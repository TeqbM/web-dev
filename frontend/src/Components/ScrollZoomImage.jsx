import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomInOutOnScroll = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for zoom in and zoom out
    gsap.to(imageRef.current, {
      scale: 2, // Zoom in to 2x
      scrollTrigger: {
        trigger: imageRef.current, // The image element is the trigger
        start: "top bottom", // Start when the image enters the viewport
        end: "top center", // End when the image is near the center of the viewport
        scrub: true,
        toggleActions: "play reverse play reverse", // Zoom out on reverse scroll
        markers: false, // Set to true for debugging
      },
    });
  }, []);

  return (
    <div style={{ height: "200vh", paddingTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Scroll to Zoom In & Out</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          ref={imageRef}
          src="https://via.placeholder.com/800x400"
          alt="Zoomable"
          style={{
            width: "70%",
            height: "auto",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default ZoomInOutOnScroll;
