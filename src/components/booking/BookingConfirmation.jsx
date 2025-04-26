import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import StripeWrapper from '../payment/StripeWrapper';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would typically send the paymentMethod.id to your server
      navigate('/booking-success');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-2 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Pay ${booking.paymentAmount}
      </button>
    </form>
  );
};

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Booking Confirmation</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Booking Details</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Service:</span> {booking.serviceType}</p>
                <p><span className="font-medium">Amount:</span> ${booking.paymentAmount}</p>
              </div>
              
              <StripeWrapper>
                <PaymentForm />
              </StripeWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;