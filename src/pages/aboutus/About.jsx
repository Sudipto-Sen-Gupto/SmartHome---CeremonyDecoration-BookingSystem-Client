import React from 'react';
import backgroundImage from './about.avif'

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
     
      <section className="relative bg-cover bg-center h-[400px]" >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Transforming Homes Into Dream Spaces
          </h1>
        </div>
      </section>

      
      <section className="py-16 container mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src={backgroundImage} alt="Our Team" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We are a home decoration booking platform that transforms your spaces into beautiful, functional, and cozy areas. Our team of experts ensures top-quality designs with seamless booking.
          </p>
          <p className="text-gray-700">
            Our mission is to make every home a reflection of its owner's personality and style. With a focus on creativity, affordability, and timely service, we aim to redefine home decoration.
          </p>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
              <p>Create stunning interiors tailored to your style.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Furniture Arrangement</h3>
              <p>Optimize space and functionality with our expert planning.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
              <p>Book your decoration service easily and securely online.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
