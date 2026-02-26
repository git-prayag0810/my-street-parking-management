import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Car, CreditCard } from 'lucide-react';

export default function Dashboard() {
    const recentBookings = [
        { id: '1', location: 'Downtown Parking Zone A', date: 'Oct 24, 2023', time: '14:00 - 16:00', status: 'Active' },
        { id: '2', location: 'City Mall Basement', date: 'Oct 22, 2023', time: '10:00 - 12:00', status: 'Completed' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-white mb-8">My Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Active Bookings', value: '1', icon: Clock, color: 'text-blue-500' },
                        { label: 'Saved Vehicles', value: '2', icon: Car, color: 'text-green-500' },
                        { label: 'Favorite Spots', value: '3', icon: MapPin, color: 'text-purple-500' },
                        { label: 'Payment Methods', value: '1', icon: CreditCard, color: 'text-orange-500' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-gray-800 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-white mb-4">Recent Bookings</h2>
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-800 text-gray-400 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">Location</th>
                                <th className="px-6 py-4 font-medium">Date & Time</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="text-gray-300 hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-gray-500" />
                                        {booking.location}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span>{booking.date}</span>
                                            <span className="text-gray-500 text-sm">{booking.time}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'Active' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                'bg-green-500/10 text-green-400 border border-green-500/20'
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
