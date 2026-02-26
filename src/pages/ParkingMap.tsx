import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ParkingMap() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Placeholder data for map spots
    const fakeSpots = [
        { id: 'A-12', name: 'Downtown Center', distance: '0.5 mi', price: '$5/hr', available: 12 },
        { id: 'B-04', name: 'Westside Mall', distance: '1.2 mi', price: '$3/hr', available: 5 },
        { id: 'C-99', name: 'Street Ave Parking', distance: '0.8 mi', price: '$4/hr', available: 0 },
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] pt-16">
            {/* Search Bar overlay */}
            <div className="absolute top-24 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl z-20">
                <div className="relative">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for a location, street, or landmark..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/90 border border-gray-700 shadow-2xl backdrop-blur-md rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                    />
                </div>
            </div>

            <div className="flex-1 relative flex">
                {/* Sidebar List */}
                <div className="hidden md:block w-96 bg-gray-900 border-r border-gray-800 overflow-y-auto z-10 p-4 pt-20">
                    <h2 className="text-white font-bold text-xl mb-4">Nearby Parking</h2>
                    <div className="space-y-4">
                        {fakeSpots.map((spot) => (
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                key={spot.id}
                                className={`p-4 rounded-xl border cursor-pointer ${spot.available > 0
                                        ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                                        : 'bg-gray-800/50 border-gray-800 opacity-60'
                                    }`}
                                onClick={() => spot.available > 0 && navigate(`/book/${spot.id}`)}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white font-semibold">{spot.name}</h3>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${spot.available > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}>
                                        {spot.available > 0 ? `${spot.available} Spots` : 'Full'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1"><Navigation className="w-3 h-3" /> {spot.distance}</span>
                                    <span className="font-bold text-blue-400">{spot.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Map Area placeholder */}
                <div className="flex-1 bg-gray-950 relative flex items-center justify-center">
                    {/* Real implementation would use GoogleMaps here */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                    <div className="text-center z-10">
                        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-500">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Interactive Map Area</h2>
                        <p className="text-gray-400">Google Maps API integration placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
