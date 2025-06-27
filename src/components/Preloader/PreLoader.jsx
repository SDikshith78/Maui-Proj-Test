// src/components/Preloader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
  const counterRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline for preloader animations
    const tl = gsap.timeline({
      onComplete: () => onComplete(), // Trigger parent to hide preloader
    });

    // Animate counter from 0 to 100
    tl.to(counterRef.current, {
      innerText: 100,
      duration: 2,
      snap: { innerText: 1 }, // Snap to integers
      ease: "power1.inOut",
      onUpdate: function () {
        counterRef.current.innerText = Math.round(this.targets()[0].innerText);
      },
    });

    // Animate line width and color
    tl.to(
      lineRef.current,
      {
        width: "100%",
        backgroundColor: "#ffffff", // Grey to white
        duration: 2,
        ease: "power1.inOut",
      },
      0 // Start with counter
    );

    // Animate "Welcome to" to "The Maui Project and D4W"
    tl.to(
      textRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      1.5 // Start slightly before counter finishes
    ).to(
      textRef.current,
      {
        innerText: "The Maui Project and D4W",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: function () {
          textRef.current.innerText = "The Maui Project and D4W";
        },
      },
      1.8
    );

    // Exit animation with "boom" effect
    tl.to(preloaderRef.current, {
      scale: 2,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    return () => {
      tl.kill(); // Clean up on unmount
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black"
    >
      {/* Counter and Line */}
      <div className="mb-8 text-center">
        <span
          ref={counterRef}
          className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          0
        </span>
        <div className="mt-2 h-2 w-40 bg-gray-500" ref={lineRef}></div>
      </div>

      {/* Text with HeroSection styling */}
      <div className="relative h-[210px] sm:h-[240px] md:h-[300px] w-full overflow-hidden">
        <svg width="0" height="0">
          <defs>
            <clipPath id="preloader-text-clip" clipPathUnits="objectBoundingBox">
              <text
                x="0.5"
                y="0.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Valorant, sans-serif"
                fontSize="0.07"
                fontWeight="700"
                style={{ fontSize: "0.065", letterSpacing: "0.028em" }}
              >
                Welcome to
              </text>
            </clipPath>
          </defs>
        </svg>
        <video
          className="absolute left-1/2 top-1/2 h-[300%] w-[80%] sm:w-[70%] -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ clipPath: "url(#preloader-text-clip)" }}
          ref={textRef}
        >
          <source
            src="https://cdn.magicui.design/ocean-small.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default Preloader;