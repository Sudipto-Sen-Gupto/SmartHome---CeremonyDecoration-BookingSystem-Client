import { motion } from 'framer-motion';
import React from 'react';
import banner from './banner.jpg';

const texts = [
  "Smart Home Solutions",
  "Luxury Ceremony Decorations",
  "Make Your Moments Memorable"
];

const Herosection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {texts.map((text, index) => (
          <motion.h1
            key={index}
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8, duration: 0.8 }}
          >
            {text}
          </motion.h1>
        ))}
         <button className="mt-6 px-6 py-3 bg-white text-black rounded hover:bg-gray-200">
  Explore Services
</button>
      </div>
     
    </section>
  );
};

export default Herosection;
