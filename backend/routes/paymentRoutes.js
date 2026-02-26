import express from 'express';
import Stripe from 'stripe';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';
import { protect } from '../middlewares/authMiddleware.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_12345');
const router = express.Router();

router.post('/create-payment-intent', protect, async (req, res) => {
    try {
        const { bookingId } = req.body;

        const booking = await Booking.findById(bookingId);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(booking.totalAmount * 100), // Stripe expects cents
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        // Create payment record
        const payment = new Payment({
            bookingId: booking._id,
            userId: req.user._id,
            amount: booking.totalAmount,
            stripePaymentIntentId: paymentIntent.id
        });
        await payment.save();

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mock endpoint for payment success since we are using test mode and might skip webhook for simplicity
router.post('/success', protect, async (req, res) => {
    try {
        const { bookingId, paymentIntentId } = req.body;

        const booking = await Booking.findById(bookingId);
        if (booking) {
            booking.paymentStatus = 'completed';
            await booking.save();
        }

        const payment = await Payment.findOne({ stripePaymentIntentId: paymentIntentId });
        if (payment) {
            payment.status = 'succeeded';
            await payment.save();
        }

        res.json({ message: 'Payment recorded as successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
