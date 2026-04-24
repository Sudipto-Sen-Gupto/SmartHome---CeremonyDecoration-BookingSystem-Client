import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const CTA = () => {
  return (
    <div className="bg-black py-16 my-6">
      <div className="max-w-6xl mx-auto text-center px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Space?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Book your smart decoration today and let us create something beautiful for your special moment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Book Now */}
          <Link to={'/services'} className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Book Now
          </Link>

          {/* Call Button */}
          <a
            href="tel:01745688796"
            className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801745688796"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
};

export default CTA;