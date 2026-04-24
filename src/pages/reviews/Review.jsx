import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Amit Das",
    email: "amit.das@gmail.com",
    image: "https://i.pravatar.cc/150?img=1",
    review: "Amazing service! The decoration ideas were modern and perfectly matched my home.",
    star: 5
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat.jahan@gmail.com",
    image: "https://i.pravatar.cc/150?img=2",
    review: "Very creative designs and professional team. Highly recommended.",
    star: 4
  },
  {
    name: "Rakib Hasan",
    email: "rakib.hasan@gmail.com",
    image: "https://i.pravatar.cc/150?img=3",
    review: "Good experience overall, but delivery time could be faster.",
    star: 4
  },
  {
    name: "Farhana Rahman",
    email: "farhana.rahman@gmail.com",
    image: "https://i.pravatar.cc/150?img=4",
    review: "Loved the decoration style! My living room looks stunning now.",
    star: 5
  },
  {
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed@gmail.com",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Affordable pricing and quality service. Will hire again.",
    star: 4
  },
  {
    name: "Sadia Islam",
    email: "sadia.islam@gmail.com",
    image: "https://i.pravatar.cc/150?img=6",
    review: "Not fully satisfied with the finishing, but support was helpful.",
    star: 3
  },
  {
    name: "Imran Hossain",
    email: "imran.hossain@gmail.com",
    image: "https://i.pravatar.cc/150?img=7",
    review: "Excellent customer service and beautiful design execution.",
    star: 5
  },
  {
    name: "Mim Akter",
    email: "mim.akter@gmail.com",
    image: "https://i.pravatar.cc/150?img=8",
    review: "Nice work, but I expected a bit more variety in design options.",
    star: 3
  }
];

const Review = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Clients Say
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
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px] md:!w-[350px]"
          >
            <div className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 text-center">
              
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
              />

              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{review.email}</p>

              <p className="text-gray-700 mb-4">
                {review.review}
              </p>

              <div className="text-yellow-500 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.star ? "★" : "☆"}
                  </span>
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;