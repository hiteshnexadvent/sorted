import React, { useEffect, useRef } from "react";
import "./style.css";

const ScrollText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress only while text is pinned in viewport
      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / windowHeight)
      );

      const words = textRef.current.querySelectorAll("span");
      const visibleCount = Math.floor(scrollProgress * words.length);

      words.forEach((word, index) => {
        if (index < visibleCount) {
          word.classList.add("visible");
        } else {
          word.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text =
    "Great design isn't what you see. It's what you feel and never forget. It earns trust, builds emotion and leaves an impact that lasts.";

  return (
    <div className="scroll-section">
      <div className="scroll-text">
        <h4 ref={textRef}>
          {text.split(" ").map((word, index) => (
            <span key={index}>{word}&nbsp;</span>
          ))}
        </h4>
      </div>
    </div>
  );
};

export default ScrollText;
