import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Car, LogOut, User as UserIcon, Map as MapIcon } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <Car className="text-blue-500 w-8 h-8 group-hover:text-blue-400 transition-colors" />
                            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                ParkSpot
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link to="/map" className="flex items-center gap-1 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                <MapIcon className="w-4 h-4" />
                                Find Parking
                            </Link>

                            {user ? (
                                <>
                                    <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-1 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                        <UserIcon className="w-4 h-4" />
                                        Dashboard
                                    </Link>
                                    <button onClick={handleLogout} className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                        <LogOut className="w-4 h-4" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <div className="flex gap-4 items-center">
                                    <Link to="/login" className="hover:text-blue-400 transition-colors font-medium">
                                        Log in
                                    </Link>
                                    <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30">
                                        Sign up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
