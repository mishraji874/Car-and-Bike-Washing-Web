import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Register from './components/auth/Register';
import CustomerDashboard from './components/dashboard/CustomerDashboard';
import ProviderDashboard from './components/dashboard/ProviderDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import BookingForm from './components/booking/BookingForm';
// import BookingConfirmation from './components/booking/BookingConfirmation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/provider-dashboard" element={<ProviderDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/book-service" element={<BookingForm />} />
            {/* <Route path="/booking-confirmation" element={<BookingConfirmation />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
