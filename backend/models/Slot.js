import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
    zoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingZone', required: true },
    slotNumber: { type: String, required: true },
    status: { type: String, enum: ['available', 'occupied', 'reserved', 'maintenance'], default: 'available' },
    vehicleNumber: { type: String, default: null },
    currentBookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', default: null }
});

export default mongoose.model('Slot', slotSchema);
