import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Terms and Conditions</h1>

          <div className="space-y-6 text-gray-600">
            <p>Welcome to Car & Bike Wash! These terms and conditions outline the rules and regulations for the use of our services.</p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Service Agreement</h2>
              <p>By booking a service with us, you agree to our terms and conditions and understand that we reserve the right to modify these terms at any time.</p>

              <h2 className="text-xl font-semibold">2. Cancellation Policy</h2>
              <p>You may cancel your booking up to 24 hours before the scheduled service time. Late cancellations may incur a fee.</p>

              <h2 className="text-xl font-semibold">3. Liability</h2>
              <p>While we take utmost care of your vehicle, we are not liable for any pre-existing damages or mechanical issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;