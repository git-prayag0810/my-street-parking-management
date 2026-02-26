import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual login logic with backend
        console.log('Login attempt', { email, password });
        navigate('/dashboard');
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800"
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2 text-sm">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mt-2">
                        <label className="flex items-center text-gray-400 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-6"
                    >
                        Sign In
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-400 text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
