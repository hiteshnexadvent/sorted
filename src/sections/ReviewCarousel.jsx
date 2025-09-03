import React from "react";
import { FaStar } from "react-icons/fa";
import "./section2.css";

const testimonials = [
  {
    name: "Malik Johnson",
    role: "Founder, GrowthLoop",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We were struggling to present ourselves professionally until we worked with them. Now our brand looks like it belongs with the leaders in our space.",
  },
  {
    name: "Marcus Lee",
    role: "Product Manager, NovaTech",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "Before, we wasted time going back and forth with designers. Now we get clean, clear visuals on the first try. Which lets us focus on what really matters.",
  },
  {
    name: "Bruno Rivera",
    role: "Brand Strategist, Studio Hive",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "It’s not just about looking good. It’s about showing up confidently every time. That’s what they help us do, and it’s changed how our team feels about our brand.",
  },
  {
    name: "Ava Green",
    role: "Designer, PixelWorks",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "As a non-designer, I finally felt in control. The layout just made sense and looked incredible out of the box.",
  },
  {
    name: "Liam Brown",
    role: "CEO, Linea Agency",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Linea helped us look polished without hiring a whole design team. Our brand has never felt this aligned online.",
  },
];

const ReviewCard = ({ testimonial }) => (
  <div className="review-card">
    <div className="review-stars">
      {Array(5).fill(0).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
    <p className="review-text">{testimonial.text}</p>
    <div className="review-profile">
      <img src={testimonial.image} alt={testimonial.name} />
      <div>
        <h4>{testimonial.name}</h4>
        <p>{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const ReviewCarousel = () => {
  return (
    <div className="reviews-container">
      <h1>We love what we do, and they love the results.</h1>
      {/* Top Row (scroll right) */}
      <div className="reviews-row">
        <div className="reviews-track move-right">
          {[...testimonials, ...testimonials].map((t, i) => (
            <ReviewCard key={i} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Bottom Row (scroll left) */}
      <div className="reviews-row">
        <div className="reviews-track move-left">
          {[...testimonials, ...testimonials].map((t, i) => (
            <ReviewCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
