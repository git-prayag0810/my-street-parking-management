import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    stripePaymentIntentId: { type: String },
    status: { type: String, enum: ['pending', 'succeeded', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Payment', paymentSchema);
