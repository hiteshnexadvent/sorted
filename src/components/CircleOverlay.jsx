import React, { useEffect, useState } from "react";
import "./style.css";

const CircleOverlay = () => {
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Hero section height
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrollTop / heroHeight, 1);

      // scale 0 → 10
      const newScale = progress * 10;
      setScale(newScale);

      // 🔥 Fix: White full until progress = 1, then suddenly hide
      const newOpacity = progress < 1 ? 1 : 0;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="circle-overlay"
      style={{
        transform: `translateX(-50%) scale(${scale})`,
        opacity: opacity,
      }}
    ></div>
  );
};

export default CircleOverlay;
