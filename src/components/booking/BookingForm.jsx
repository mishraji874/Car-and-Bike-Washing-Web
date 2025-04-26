import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { paymentService } from '../../services/api';

const BookingForm = () => {
  const location = useLocation();
  const service = location.state?.service;
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      address: '',
      vehicleType: '',
      vehicleNumber: '',
      specialInstructions: '',
      serviceType: service?.title || '',
      paymentAmount: service?.price || 0
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      vehicleType: Yup.string().required('Required'),
      vehicleNumber: Yup.string().required('Required'),
      serviceType: Yup.string().required('Required'),
      paymentAmount: Yup.number().required('Required').min(0)
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setError(null);
      try {
        const paymentResult = await paymentService.confirmPayment({
          amount: values.paymentAmount
        });

        if (paymentResult.success) {
          navigate('/booking-success', {
            state: {
              booking: values,
              payment: paymentResult
            }
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book {service?.title}</h2>
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500">{formik.errors.phone}</div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Date</label>
              <input
                type="date"
                name="date"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('date')}
              />
            </div>
            <div>
              <label className="block mb-2">Time</label>
              <input
                type="time"
                name="time"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('time')}
              />
            </div>
            <div>
              <label className="block mb-2">Address</label>
              <textarea
                name="address"
                className="w-full border rounded-md p-2"
                {...formik.getFieldProps('address')}
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              Processing payment...
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;