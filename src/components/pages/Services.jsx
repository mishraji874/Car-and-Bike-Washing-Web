import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Car Wash Services',
      description: 'Professional car washing services with attention to detail',
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
        },
        {
          name: 'Ultimate Package',
          price: 79.99,
          features: ['Premium Wash Features', 'Engine Bay Cleaning', 'Leather Treatment', 'Paint Protection']
        }
      ],
      link: '/services/car-wash'
    },
    {
      title: 'Bike Wash Services',
      description: 'Expert bike cleaning and maintenance services',
      packages: [
        {
          name: 'Basic Bike Wash',
          price: 19.99,
          features: ['Exterior Wash', 'Chain Lubrication', 'Basic Polish']
        },
        {
          name: 'Premium Bike Wash',
          price: 34.99,
          features: ['Basic Wash Features', 'Detailed Cleaning', 'Waxing', 'Tire Treatment']
        },
        {
          name: 'Complete Package',
          price: 49.99,
          features: ['Premium Wash Features', 'Engine Cleaning', 'Anti-Rust Treatment']
        }
      ],
      link: '/services/bike-wash'
    },
    {
      title: 'Detailing Services',
      description: 'Professional detailing for the perfect finish',
      packages: [
        {
          name: 'Basic Detailing',
          price: 99.99,
          features: ['Paint Correction', 'Interior Detailing', 'Wheel Detailing']
        },
        {
          name: 'Premium Detailing',
          price: 149.99,
          features: ['Basic Detailing Features', 'Ceramic Coating', 'Headlight Restoration']
        },
        {
          name: 'Ultimate Detailing',
          price: 199.99,
          features: ['Premium Detailing Features', 'Paint Protection Film', 'Interior Sanitization']
        }
      ],
      link: '/services/detailing'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {service.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="mb-6 p-4 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      ${pkg.price}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
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

                <Link
                  to={service.link}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;