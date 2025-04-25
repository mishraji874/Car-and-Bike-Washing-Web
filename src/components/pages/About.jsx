import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              At Car & Bike Wash, we're passionate about keeping your vehicles looking their best. 
              With years of experience in the industry, we've perfected our techniques to provide 
              top-notch cleaning services for both cars and bikes.
            </p>
            <p>
              Our mission is to deliver exceptional cleaning services that not only enhance the 
              appearance of your vehicles but also protect their value. We use eco-friendly products 
              and state-of-the-art equipment to ensure the best results while being kind to the 
              environment.
            </p>
            <p>
              What sets us apart is our attention to detail and commitment to customer satisfaction. 
              Whether you need a quick wash or a full detailing service, our team of professionals 
              is here to make your vehicle shine.
            </p>
            <p>
              We offer a range of services tailored to meet your needs, from basic exterior washes 
              to comprehensive interior and exterior detailing packages. Our flexible scheduling 
              and mobile services make it easy to get your vehicle cleaned at your convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;