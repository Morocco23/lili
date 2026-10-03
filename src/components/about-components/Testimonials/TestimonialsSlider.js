// TestimonialSlider.js
import React from "react";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    name: "Michael Roberts",
    role: "Project Manager, BuildRight Inc",
    initials: "MR",
    message:
      "Outstanding printing services! The quality of our architectural blueprints and marketing materials exceeded all expectations. Highly recommended.",
  },
  {
    name: "Sarah Thompson",
    role: "CEO, ArchiTech Designs",
    initials: "ST",
    message:
      "Professional and timely! We always get our blueprints printed on schedule and with top-tier clarity. Exceptional work.",
  },
  {
    name: "James O'Neill",
    role: "CTO, Skyline Projects",
    initials: "JO",
    message:
      "Excellent IT support combined with their press solutions makes them a one-stop powerhouse. Their team is brilliant.",
  },
  {
    name: "Linda Gomez",
    role: "Marketing Lead, UrbanWorks",
    initials: "LG",
    message:
      "Our marketing flyers came out stunning. The gold theme printing gives us a luxury brand feel. We'll be back for more!",
  },
];

const TestimonialCard = ({ data }) => (
  <div className="testimonial-card">
    <div className="flex">
      <div className="flex text-gold-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="msgf">"{data.message}"</p>
    <div className="flex" style={{marginTop: '10px'}}>
      <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-black font-bold">
        {data.initials}
      </div>
      <div style={{marginLeft: '10px'}}>
        <p className="text-gold-400 font-semibold">{data.name}</p>
        <p className="text-gray-400 text-sm">{data.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  return (
    <div className="testimony-container">
      <div className="blur-left"></div>
      <div className='blur-right'></div>
      {[...Array(2)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`testimony-row ${
            rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
          }`}
        >
          <div className="testimony-track">
            {[...Array(3)].flatMap(() => testimonials).map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
