import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Basic Car Wash',
    description: 'Exterior washing, tire cleaning, and basic interior vacuum',
    price: 29.99,
    duration: '45 mins',
    image: '/images/basic-car-wash.jpg'
  },
  {
    id: 2,
    title: 'Premium Car Wash',
    description: 'Complete exterior & interior cleaning with waxing',
    price: 49.99,
    duration: '90 mins',
    image: '/images/premium-car-wash.jpg'
  },
  {
    id: 3,
    title: 'Basic Bike Wash',
    description: 'Complete bike washing and chain lubrication',
    price: 19.99,
    duration: '30 mins',
    image: '/images/basic-bike-wash.jpg'
  },
  {
    id: 4,
    title: 'Premium Bike Service',
    description: 'Complete bike washing, detailing, and basic maintenance',
    price: 39.99,
    duration: '60 mins',
    image: '/images/premium-bike-wash.jpg'
  }
];

const ServiceList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;