import React from 'react';
import { motion } from 'framer-motion';
import { Users, Map, DollarSign, Activity } from 'lucide-react';

export default function AdminPanel() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Generate Report
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Users', value: '1,248', icon: Users, color: 'text-blue-500' },
                        { label: 'Active Zones', value: '12', icon: Map, color: 'text-green-500' },
                        { label: 'Today Revenue', value: '$845', icon: DollarSign, color: 'text-emerald-500' },
                        { label: 'Live Occupancy', value: '68%', icon: Activity, color: 'text-rose-500' },
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-white mb-4">Revenue Overview</h2>
                        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg text-gray-500">
                            [Chart Placeholder]
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div>
                                        <p className="text-gray-300 text-sm">New booking at Zone {String.fromCharCode(64 + i)}</p>
                                        <p className="text-gray-500 text-xs">{i * 5} mins ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
