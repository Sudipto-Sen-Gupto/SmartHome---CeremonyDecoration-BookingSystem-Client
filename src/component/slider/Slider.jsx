import React from "react";
import pic0 from "../../assets/pic0.jpg";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.avif";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";

// Swiper core & styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const slides = [
  { img: pic0, title: "Modern Living Room", desc: "Elegant and cozy design" },
  { img: pic1, title: "Smart Lighting", desc: "Control your lights easily" },
  { img: pic2, title: "Minimal Bedroom", desc: "Clean and peaceful vibes" },
  { img: pic3, title: "Luxury Kitchen", desc: "Cook in style" },
  { img: pic4, title: "Office Setup", desc: "Boost your productivity" },
  { img: pic5, title: "Outdoor Design", desc: "Beautiful exterior spaces" },
];

const Slider = () => {
  return (
    <div className="py-10 bg-black my-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Smart Home Showcase
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={slide.img}
                alt=""
                className="w-full h-[400px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <h3 className="text-white text-xl font-bold">
                  {slide.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;