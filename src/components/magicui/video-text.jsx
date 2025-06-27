// src/magicui/video-text.jsx
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = "70px", // Match HeroSection.jsx
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}) {
  const [svgMask, setSvgMask] = useState("");
  const content = React.Children.toArray(children).join("");
  const isMd = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const updateSvgMask = () => {
      let responsiveFontSize = fontSize;
      if (typeof fontSize === "object") {
        responsiveFontSize = isMd ? fontSize.md || fontSize.base : fontSize.base;
      } else if (typeof fontSize === "number") {
        responsiveFontSize = `${fontSize}px`;
      }
      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 2000 500' preserveAspectRatio='xMidYMid meet'>
        <style>
          @font-face {
            font-family: 'Valorant';
            src: url('/assets/font/ValorantFont.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        </style>
        <text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}, sans-serif'>${content}</text>
      </svg>`;
      setSvgMask(newSvgMask);
    };

    updateSvgMask();
    window.addEventListener("resize", updateSvgMask);
    return () => window.removeEventListener("resize", updateSvgMask);
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily, isMd]);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

  return (
    <Component className={cn(`relative size-full`, className)}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "100% auto",
          WebkitMaskSize: "100% auto",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="sr-only">{content}</span>
    </Component>
  );
}