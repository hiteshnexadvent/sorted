import React from "react";
import "./section.css";

const images = [
  "/images/g1.avif",
  "/images/g2.avif",
  "/images/g3.avif",
  "/images/g4.avif",
  "/images/g5.avif",
  "/images/g6.avif",
  "/images/g7.avif",
  "/images/g8.avif",
  "/images/g9.avif",
];

const VerticalScrollGallery = () => {
  const col1 = images.slice(0, 3);
  const col2 = images.slice(3, 6);
  const col3 = images.slice(6, 9);

  return (
    <section className="gallery-wrapper">

      <div className="heading">
        <p className="sub-title">WORKS</p>
        <h1>
          Collaboration that <br />
          <span>moved the needle.</span>
        </h1>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <div className="column scroll-up">
          {col1.concat(col1).map((src, i) => (
            <div key={i} className="img-box">
              <img src={src} alt={`img-${i}`} />
            </div>
          ))}
        </div>

        <div className="column scroll-down">
          {col2.concat(col2).map((src, i) => (
            <div key={i} className="img-box">
              <img src={src} alt={`img-${i}`} />
            </div>
          ))}
        </div>

        <div className="column scroll-up">
          {col3.concat(col3).map((src, i) => (
            <div key={i} className="img-box">
              <img src={src} alt={`img-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalScrollGallery;
