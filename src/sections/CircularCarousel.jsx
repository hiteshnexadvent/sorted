import React from "react";
import "./section.css"; 

const CircularCarousel = () => {
  const images = [
    { id: 1, url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Professional woman" },
    { id: 2, url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Professional man" },
    { id: 3, url: "https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Designer" },
    { id: 4, url: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Creative professional" },
    { id: 5, url: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Business woman" },
    { id: 6, url: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Young professional" },
    { id: 7, url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Tech professional" },
    { id: 8, url: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Entrepreneur" },
    { id: 9, url: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Marketing professional" },
    { id: 10, url: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", alt: "Consultant" },
  ];

  return (
    <section className="carousel-section">
      {/* Center content */}
      <div className="center-content">
        <h2>
          100+ <span>clients getting</span>
        </h2>
        <p>
          <em>better</em> design, faster.
        </p>

        <div className="cta">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
            alt="Consultant"
          />
          <div>
            <p>Book a 15-min intro call</p>
            <p>
              <span className="dot"></span> Available now
            </p>
          </div>
        </div>
      </div>

      {/* Circular carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-container auto-rotate">
          {images.map((image, index) => {
            const angle = (index * 360) / images.length;
            return (
              <div
                key={image.id}
                className="carousel-item"
                style={{ "--angle": `${angle}deg` }}
              >
                <img src={image.url} alt={image.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CircularCarousel;
