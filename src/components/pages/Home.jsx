import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const slides = [
    {
      image: '/images/slide1.webp',
      title: 'Professional Car & Bike Washing Services',
      description: 'Experience the finest car and bike washing services with state-of-the-art equipment and eco-friendly products.'
    },
    {
      image: '/images/slide2.webp',
      title: 'Premium Detailing Services',
      description: 'Transform your vehicle with our premium detailing services. We pay attention to every detail.'
    },
    {
      image: '/images/slide3.png',
      title: 'Convenient Booking',
      description: 'Book your service online and get your vehicle cleaned at your preferred time and location.'
    },
    {
      image: '/images/slide4.png',
      title: 'Customer Satisfaction Guaranteed',
      description: 'Join thousands of satisfied customers who trust us with their vehicles.'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Excellent service! My car looks brand new after their premium wash service.',
      image: '/images/testimonial1.jpg'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Very professional team and amazing results. Highly recommended!',
      image: '/images/testimonial2.webp'
    },
    {
      name: 'Mike Wilson',
      rating: 5,
      comment: 'The detailing service was outstanding. They transformed my old bike completely!',
      image: '/images/testimonial3.webp'
    }
  ];


  const services = [
    {
      id: 'car-wash',
      title: 'Car Wash Services',
      description: 'Revitalize your car with our expert cleaning services',
      image: '/images/car-bg.webp'
    },
    {
      id: 'bike-wash',
      title: 'Bike Wash Services',
      description: 'Keep your bike in pristine condition with our specialized care',
      image: '/images/bike-bg.jpg'
    },
    {
      id: 'detailing',
      title: 'Detailing Services',
      description: 'Professional detailing to restore your vehicle\'s showroom shine',
      image: '/images/detailing-bg.avif'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
        >
          {slides.map((slide, index) => (
            <div key={index} className="h-[600px] relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Enhanced Services Overview */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            What Our Customers Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-16 pb-8 px-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Premium Services?
          </h2>
          <p className="text-white text-xl mb-8">
            Book your appointment now and get 10% off on your first service!
          </p>
          <Link to="/book-service">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;