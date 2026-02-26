import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ParkingMap from './pages/ParkingMap';
import BookingPage from './pages/BookingPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<ParkingMap />} />
          <Route path="/book/:slotId" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;