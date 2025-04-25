import React from 'react';

const Faq = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
              <p className="text-gray-600">We offer car washing, bike washing, and detailing services with various packages to choose from.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">How do I book a service?</h2>
              <p className="text-gray-600">You can book a service through our website by selecting your preferred service and time slot.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">What payment methods do you accept?</h2>
              <p className="text-gray-600">We accept all major credit cards and digital payment methods.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;