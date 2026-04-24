import { CalendarCheck, Palette, Search, Smile } from "lucide-react";
import React from "react";


const steps = [
  {
    id: 1,
    icon: <Search />,
    title: "Choose a Design",
    desc: "Browse our gallery and pick a decoration style that fits your event.",
  },
  {
    id: 2,
    icon: <Palette />,
    title: "Customize Package",
    desc: "Select your budget, colors, and additional services as you need.",
  },
  {
    id: 3,
    icon: <CalendarCheck />,
    title: "Book Your Date",
    desc: "Choose your preferred date and confirm your booking easily.",
  },
  {
    id: 4,
    icon: <Smile />,
    title: "We Decorate",
    desc: "Sit back and relax while we transform your space beautifully.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-4">
        How It Works
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Book your decoration in just a few simple steps
      </p>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="text-4xl text-black mb-4 flex justify-center">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;