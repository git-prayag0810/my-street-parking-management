import ParkingZone from '../models/ParkingZone.js';
import Slot from '../models/Slot.js';

// Get all active parking zones
export const getParkingZones = async (req, res) => {
    try {
        const zones = await ParkingZone.find({ isActive: true });
        res.json(zones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Create new zone
export const createParkingZone = async (req, res) => {
    try {
        const { name, address, location, totalSlots, pricePerHour } = req.body;

        const zone = new ParkingZone({
            name, address, location, totalSlots, pricePerHour
        });

        const createdZone = await zone.save();

        // Generate slots automatically
        const slots = [];
        for (let i = 1; i <= totalSlots; i++) {
            slots.push({
                zoneId: createdZone._id,
                slotNumber: `S-${i}`,
                status: 'available'
            });
        }
        await Slot.insertMany(slots);

        res.status(201).json(createdZone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get slots for a specific zone
export const getZoneSlots = async (req, res) => {
    try {
        const slots = await Slot.find({ zoneId: req.params.id });
        res.json(slots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
