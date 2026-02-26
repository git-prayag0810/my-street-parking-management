import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

import authRoutes from './routes/authRoutes.js';
import parkingRoutes from './routes/parkingRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*', // To be replaced with frontend URL for production
        methods: ['GET', 'POST']
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/street-parking')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Socket.io for real-time updates
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('joinZone', (zoneId) => {
        socket.join(zoneId);
        console.log(`User ${socket.id} joined zone ${zoneId}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Export io so we can use it in routes/controllers if needed
export { io };

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
