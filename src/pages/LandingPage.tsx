import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Map, Clock, CreditCard } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
                    >
                        Find Parking
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            In Seconds
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 mb-10"
                    >
                        Real-time street parking management system. Book your slot, navigate easily, and manage your payments securely all in one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex gap-4 justify-center"
                    >
                        <Link to="/map" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] transform hover:scale-105">
                            Find a Spot Now
                        </Link>
                        <Link to="/register" className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold text-lg transition-all transform hover:scale-105">
                            Create Account
                        </Link>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <FeatureCard
                        icon={<Map className="w-8 h-8 text-blue-400" />}
                        title="Real-Time Map"
                        desc="Interactive map showing live parking availability in your area."
                    />
                    <FeatureCard
                        icon={<Clock className="w-8 h-8 text-purple-400" />}
                        title="Instant Booking"
                        desc="Reserve your parking slot ahead of time to guarantee a spot."
                    />
                    <FeatureCard
                        icon={<CreditCard className="w-8 h-8 text-green-400" />}
                        title="Seamless Payments"
                        desc="Pay securely directly from the app using credit cards or wallets."
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="w-8 h-8 text-red-400" />}
                        title="Secure Verification"
                        desc="QR code based check-in and check-out for absolute security."
                    />
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
        <div className="mb-4 p-3 glass rounded-xl inline-block">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
);

export default LandingPage;
