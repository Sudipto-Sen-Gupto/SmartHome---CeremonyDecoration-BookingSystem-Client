import { motion } from 'framer-motion';
import React from 'react';
import banner from './banner.jpg';
import { Link } from 'react-router';

const texts = [
  "Smart Home Solutions",
  "Luxury Ceremony Decorations",
  "Make Your Moments Memorable"
];

const Herosection = () => {
  return (
    <section
      className="relative h-[850px] mt-14 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-6"
        >
          {/* 🟧 Orange Border */}
          <div className="w-1 bg-orange-500 h-[260px] md:h-[300px] rounded-full"></div>

          {/* Text Content */}
          <div>
            {/* Tagline */}
            <motion.p
              className="text-orange-400 uppercase tracking-widest mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Premium Event & Lifestyle Services
            </motion.p>

            {/* Animated Headlines */}
            {texts.map((text, index) => (
              <motion.h1
                key={index}
                className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.4,
                  duration: 0.8,
                  ease: 'easeOut'
                }}
              >
                {text}
              </motion.h1>
            ))}

            {/* Subtitle */}
            <motion.p
              className="text-gray-300 max-w-xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              From elegant decorations to smart living solutions — we bring
              innovation, beauty, and comfort together for your special moments.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              <Link
                to="/services"
                className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
