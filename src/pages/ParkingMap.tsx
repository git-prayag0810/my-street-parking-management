import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import MapComponent, { type ParkingMarker } from '../components/MapComponent';

export default function ParkingMap() {
    const [searchTerm, setSearchTerm] = useState('');

    const [spots, setSpots] = useState<ParkingMarker[]>([
        { id: '1', name: 'Downtown Center', location: [18.5150, 73.8550], available: 12, pricePerHour: 20 },
        { id: '2', name: 'Westside Mall', location: [18.5280, 73.8400], available: 0, pricePerHour: 15 },
        { id: '3', name: 'Street Ave Parking', location: [18.5250, 73.8650], available: 5, pricePerHour: 10 },
    ]);

    const handleBook = (id: string, name: string) => {
        setSpots(prevSpots =>
            prevSpots.map(spot =>
                spot.id === id ? { ...spot, available: spot.available - 1 } : spot
            )
        );
        alert(`Successfully booked a slot at ${name}!`);
    };

    const filteredSpots = spots.filter(spot =>
        spot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        {filteredSpots.map((spot) => (
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                key={spot.id}
                                className={`p-4 rounded-xl border cursor-pointer ${spot.available > 0
                                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                                    : 'bg-gray-800/50 border-gray-800 opacity-60'
                                    }`}
                                onClick={() => spot.available > 0 && handleBook(spot.id, spot.name)}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white font-semibold">{spot.name}</h3>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${spot.available > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                        }`}>
                                        {spot.available > 0 ? `${spot.available} Spots` : 'Full'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="font-bold text-blue-400">₹{spot.pricePerHour}/hr</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Map Area */}
                <div className="flex-1 relative z-0">
                    <MapComponent searchTerm={searchTerm} spots={spots} onBook={handleBook} />
                </div>
            </div>
        </div>
    );
}
