import React from "react";
import "./section.css";

const OverlappingCards = () => {
  return (
    <div className="cards-wrapper">
      <div className="top-shadow"></div>
          <h1>We help brands show up with clarity, confidence, and design that actually works.</h1>
      {/* Card 1 */}
      <div className="card card1">
        <div>
          <img
            src="/images/o1.avif"
            alt=""
            style={{ height: "400px", width: "400px",borderRadius:'20px' }}
          />
        </div>
        <div>
          <h1>Brand Identity</h1>
          <p>
            We help founders shape how their brand looks, sounds, and feels.
            From logo to typography to colors, we craft a system that’s
            distinct, aligned, and built to grow with your business.
                  </p>
                  <div style={{marginTop:'100px'}}>
                  <button className="tag-btn"><span className="icon">✔</span>Brand GuideLine</button>
                  <button className="tag-btn"><span className="icon">✔</span>Responsive</button>
                  <button className="tag-btn"><span className="icon">✔</span>Optimization</button>
                  <button className="tag-btn"><span className="icon">✔</span>Domain Setup</button>
                  </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card card2">
        <div>
          <img
            src="/images/o2.avif"
            alt=""
            style={{ height: "400px", width: "400px",borderRadius:'20px' }}
          />
        </div>
        <div>
          <h1>Brand Identity</h1>
          <p>
            We help founders shape how their brand looks, sounds, and feels.
            From logo to typography to colors, we craft a system that’s
            distinct, aligned, and built to grow with your business.
                  </p>

                  <div style={{marginTop:'100px'}}>
                  <button className="tag-btn"><span className="icon">✔</span>Brand GuideLine</button>
                  <button className="tag-btn"><span className="icon">✔</span>Responsive</button>
                  <button className="tag-btn"><span className="icon">✔</span>Optimization</button>
                  <button className="tag-btn"><span className="icon">✔</span>Domain Setup</button>
                  </div>
                  
        </div>
      </div>

      {/* Card 3 */}
      <div className="card card3">
        <div>
          <img
            src="/images/o3.avif"
            alt=""
            style={{ height: "400px", width: "400px",borderRadius:'20px' }}
          />
        </div>
        <div>
          <h1>Brand Identity</h1>
          <p>
            We help founders shape how their brand looks, sounds, and feels.
            From logo to typography to colors, we craft a system that’s
            distinct, aligned, and built to grow with your business.
                  </p>
                  <div style={{marginTop:'100px'}}>
                  <button className="tag-btn"><span className="icon">✔</span>Brand GuideLine</button>
                  <button className="tag-btn"><span className="icon">✔</span>Responsive</button>
                  <button className="tag-btn"><span className="icon">✔</span>Optimization</button>
                  <button className="tag-btn"><span className="icon">✔</span>Domain Setup</button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCards;
