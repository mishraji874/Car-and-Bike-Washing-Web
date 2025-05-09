import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CustomerDashboard from './components/dashboard/CustomerDashboard';
import ProviderDashboard from './components/dashboard/ProviderDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import BookingForm from './components/booking/BookingForm';
import BookingConfirmation from './components/booking/BookingConfirmation';
import About from './components/pages/About';
import Faq from './components/pages/Faq';
import Terms from './components/pages/Terms';
import ServiceDetail from './components/pages/ServiceDetail';
import BookingSuccess from './components/booking/BookingSuccess';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/provider-dashboard" element={<ProviderDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/book-service" element={<BookingForm />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/services/:serviceType" element={<ServiceDetail />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
