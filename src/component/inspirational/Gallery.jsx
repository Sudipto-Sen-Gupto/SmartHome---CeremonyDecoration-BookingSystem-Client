import React, { useState } from "react";
import pic0 from "../../assets/pic0.jpg";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.avif";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";

const galleryData = [
  { id: 1, img: pic0, category: "Indoor", title: "Modern Living Room" },
  { id: 2, img: pic1, category: "Outdoor", title: "Garden Lighting" },
  { id: 3, img: pic2, category: "Premium", title: "Luxury Bedroom" },
  { id: 4, img: pic3, category: "Budget", title: "Simple Decoration" },
  { id: 5, img: pic4, category: "Indoor", title: "Office Setup" },
  { id: 6, img: pic5, category: "Outdoor", title: "Outdoor Party" },
];

const categories = ["All", "Indoor", "Outdoor", "Premium", "Budget"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="py-16 bg-gray-100">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Inspiration Gallery
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Get inspired by our beautiful decoration projects
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;