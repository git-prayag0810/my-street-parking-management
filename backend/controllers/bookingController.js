import Booking from '../models/Booking.js';
import Slot from '../models/Slot.js';
import { io } from '../server.js'; // Assuming we export io from server.js

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { slotId, zoneId, vehicleNumber, startTime, endTime } = req.body;

        // Calculate duration in hours
        const start = new Date(startTime);
        const end = new Date(endTime);
        const durationHours = Math.abs(end - start) / 36e5;

        // We should fetch price from zone, but for demo we just assume a fixed or passed price
        // Ideally query the Zone. For now assume $5/hr or passed in body
        const totalAmount = req.body.totalAmount || Math.ceil(durationHours * 5); // $5/hr

        // Check if slot is available
        const slot = await Slot.findById(slotId);
        if (!slot || slot.status !== 'available') {
            return res.status(400).json({ message: 'Slot not available' });
        }

        const booking = new Booking({
            userId: req.user._id,
            slotId,
            zoneId,
            vehicleNumber,
            startTime,
            endTime,
            durationHours,
            totalAmount,
            qrCodeData: `Booking-${Date.now()}-${req.user._id}`
        });

        const createdBooking = await booking.save();

        // Update slot status
        slot.status = 'occupied';
        slot.vehicleNumber = vehicleNumber;
        slot.currentBookingId = createdBooking._id;
        await slot.save();

        // Emit socket event for real-time map update
        if (io) {
            io.to(zoneId).emit('slotUpdated', { slotId, status: 'occupied' });
        }

        res.status(201).json(createdBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User Bookings
export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id }).populate('slotId').populate('zoneId');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
