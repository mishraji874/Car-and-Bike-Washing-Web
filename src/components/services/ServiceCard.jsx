import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book-service', { state: { service } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${service.price}</span>
          <span className="text-sm text-gray-500">{service.duration}</span>
        </div>
        <button
          onClick={handleBookNow}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;