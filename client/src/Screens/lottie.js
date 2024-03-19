import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../img/fire.json"; // Import your Lottie animation JSON file
// import "../Styling/lottie.css";

function LottieAnimation() {
  const container = useRef(null);

  useEffect(() => {
    // Initialize and load the animation
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // Your animation JSON file
    });

    // Cleanup on unmount
    return () => {
      anim.destroy();
    };
  }, []);

  return <div className="lottie-container" ref={container} />;
}

export default LottieAnimation;
