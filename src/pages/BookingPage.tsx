import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Car, CreditCard } from 'lucide-react';

export default function BookingPage() {
    const { slotId } = useParams();
    const navigate = useNavigate();
    const [duration, setDuration] = useState('2');

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking confirmed for slot:', slotId);
        navigate('/dashboard');
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
                <div className="bg-blue-600 p-6 text-white text-center">
                    <h1 className="text-2xl font-bold mb-2">Book Parking Space</h1>
                    <p className="text-blue-200">Slot ID: {slotId || 'A-12'}</p>
                </div>

                <form onSubmit={handleBooking} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 mb-2 text-sm font-medium">Select Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-2 text-sm font-medium">Start Time</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                                <input
                                    type="time"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    defaultValue="10:00"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">Duration (Hours)</label>
                        <input
                            type="range"
                            min="1" max="12"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full mb-2 accent-blue-500"
                        />
                        <div className="text-center text-white font-bold">{duration} Hours</div>
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">Vehicle License Plate</label>
                        <div className="relative">
                            <Car className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 uppercase"
                                placeholder="ABC-1234"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mt-8">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-blue-500" />
                            Order Summary
                        </h3>
                        <div className="flex justify-between text-gray-300 mb-2">
                            <span>Rate per hour</span>
                            <span>$5.00</span>
                        </div>
                        <div className="flex justify-between text-gray-300 mb-4 pb-4 border-b border-gray-700">
                            <span>Duration</span>
                            <span>{duration} hours</span>
                        </div>
                        <div className="flex justify-between text-white text-xl font-bold">
                            <span>Total Total</span>
                            <span>${(parseInt(duration) * 5).toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors mt-6 shadow-lg shadow-blue-500/30"
                    >
                        Confirm & Pay
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
