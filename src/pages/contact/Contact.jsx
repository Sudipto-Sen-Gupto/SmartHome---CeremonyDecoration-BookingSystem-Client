import React, { useState } from "react";
import backgroundImage from './Contact.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate with email API or backend here
  };

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="h-[300px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </section>

      {/* Contact Form + Info */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <p>
            <strong>Address:</strong> 123 Home Decor St, Kushtia, Bangladesh
          </p>
          <p>
            <strong>Email:</strong> gauravsengupto@gamil.com
          </p>
          <p>
            <strong>Phone:</strong> +8801745688796
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-600">Facebook</a>
              <a href="#" className="hover:text-indigo-600">Instagram</a>
              <a href="#" className="hover:text-indigo-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
