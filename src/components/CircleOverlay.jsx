import React, { useEffect, useState } from "react";
import "./style.css";

const CircleOverlay = () => {
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);
  const [locked, setLocked] = useState(false);

  // 👇 Top pe aane par reset
  useEffect(() => {
    const checkTop = () => {
      if (window.scrollY === 0) {
        setLocked(true);
        setProgress(0);
        setScale(0);
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", checkTop);
    checkTop();

    return () => window.removeEventListener("scroll", checkTop);
  }, []);

  // 👇 Wheel se animation
  useEffect(() => {
    if (!locked) return;

    const handleWheel = (e) => {
  e.preventDefault();

  // 🔥 Normalize deltaY (trackpad aur mouse dono ke liye)
  let delta = Math.sign(e.deltaY); // sirf -1 ya +1 milega
  const step = 0.03; // jitna chhota, utna slow (try 0.02 bhi kar sakte ho)

  setProgress((prev) => {
    let next = Math.min(Math.max(prev + delta * step, 0), 1);
    return next;
  });
};



    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [locked]);

  // 👇 Animation handling
  useEffect(() => {
    if (locked) {
      setScale(progress * 10);
      setOpacity(progress < 1 ? 1 : 0);

      if (progress === 1) {
        const heroHeight = window.innerHeight;
        window.scrollTo({
          top: heroHeight,
          behavior: "smooth",
        });

        // ✅ Ab overlay band kar do taaki normal scroll enable ho
        setTimeout(() => {
          setLocked(false);
        }, 900); // smooth scroll complete hone ka thoda wait
      }
    }
  }, [progress, locked]);

  if (!locked) return null;

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
