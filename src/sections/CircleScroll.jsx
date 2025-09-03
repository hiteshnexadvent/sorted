import React, { useEffect, useState } from "react";
import "./section.css";

const CircleScroll = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // scrolling down → clockwise
        setAngle((prev) => prev + 5);
      } else {
        // scrolling up → counterclockwise
        setAngle((prev) => prev - 5);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "/images/s1.avif",
    "/images/s2.avif",
    "/images/s3.avif",
    "/images/s4.avif",
    "/images/s5.avif",
    "/images/s1.avif",
    "/images/s2.avif",
    "/images/s3.avif",
    "/images/s4.avif",
    "/images/s5.avif"
  ];

  return (
    <div className="circle-scroll-section">
      <div className="circle-container">
        {images.map((src, i) => (
          <div
            key={i}
            className="circle-item"
            style={{
              transform: `rotate(${(360 / images.length) * i + angle}deg) 
                          translate(300px) 
                          rotate(-${(360 / images.length) * i + angle}deg)`
            }}
          >
            <img src={src} alt={`client-${i}`} />
          </div>
        ))}

        {/* ✅ Text fixed in center */}
        <h2 className="circle-text">
          100+ clients getting <br /> better design, faster.
        </h2>
      </div>
    </div>
  );
};

export default CircleScroll;
