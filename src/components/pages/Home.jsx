import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const slides = [
    {
      image: '/images/slide1.jpg',
      title: 'Professional Car & Bike Washing Services',
      description: 'Experience the finest car and bike washing services with state-of-the-art equipment and eco-friendly products.'
    },
    {
      image: '/images/slide2.jpg',
      title: 'Premium Detailing Services',
      description: 'Transform your vehicle with our premium detailing services. We pay attention to every detail.'
    },
    {
      image: '/images/slide3.jpg',
      title: 'Convenient Booking',
      description: 'Book your service online and get your vehicle cleaned at your preferred time and location.'
    },
    {
      image: '/images/slide4.jpg',
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
      image: '/images/testimonial2.jpg'
    },
    {
      name: 'Mike Wilson',
      rating: 5,
      comment: 'The detailing service was outstanding. They transformed my old bike completely!',
      image: '/images/testimonial3.jpg'
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

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/car-wash" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Car Wash Services</h3>
              <p className="text-gray-600">
                From basic wash to premium detailing, we offer comprehensive car cleaning services.
              </p>
            </Link>
            <Link to="/services/bike-wash" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Bike Wash Services</h3>
              <p className="text-gray-600">
                Keep your bike spotless with our specialized bike washing and maintenance services.
              </p>
            </Link>
            <Link to="/services/detailing" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Detailing Services</h3>
              <p className="text-gray-600">
                Professional detailing services to restore your vehicle's showroom shine.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
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