import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    slotId: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot', required: true },
    zoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingZone', required: true },
    vehicleNumber: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    durationHours: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
    bookingStatus: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },
    qrCodeData: { type: String }, // For verification
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
