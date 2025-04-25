import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();

  const services = {
    'car-wash': {
      title: 'Car Wash Services',
      description: 'Our car wash services are designed to keep your vehicle looking its best.',
      packages: [
        {
          name: 'Basic Wash',
          price: 29.99,
          features: ['Exterior Wash', 'Tire Cleaning', 'Windows Cleaning']
        },
        {
          name: 'Premium Wash',
          price: 49.99,
          features: ['Basic Wash Features', 'Interior Vacuum', 'Dashboard Cleaning', 'Waxing']
        }
      ]
    },
    'bike-wash': {
      title: 'Bike Wash Services',
      description: 'Keep your bike in top condition with our specialized cleaning services.',
      packages: [
        {
          name: 'Basic Bike Wash',
          price: 19.99,
          features: ['Exterior Wash', 'Chain Lubrication', 'Basic Polish']
        }
      ]
    },
    'detailing': {
      title: 'Detailing Services',
      description: 'Professional detailing to restore your vehicle\'s showroom shine.',
      packages: [
        {
          name: 'Basic Detailing',
          price: 99.99,
          features: ['Paint Correction', 'Interior Detailing', 'Wheel Detailing']
        }
      ]
    }
  };

  const service = services[serviceType];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">{service.title}</h1>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600">{service.description}</p>
            
            <div className="space-y-4">
              {service.packages.map((pkg, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                  <p className="text-2xl font-bold text-blue-600 mb-4">${pkg.price}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/book-service', { state: { serviceType } })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;