import mongoose from 'mongoose';

const parkingZoneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    totalSlots: { type: Number, required: true },
    pricePerHour: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ParkingZone', parkingZoneSchema);
