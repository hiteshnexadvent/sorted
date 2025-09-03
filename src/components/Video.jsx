import React from "react";

const Video = () => {
  return (
    <div>
      <video 
        width="100%" 
        height="auto" 
        controls 
        autoPlay 
        muted 
        loop
        style={{ borderRadius: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.3)" }}
      >
        <source src="/images/video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
