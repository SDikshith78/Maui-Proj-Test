import React, { useEffect, useState } from "react";
import "./MiniCursor.css";
import gsap from "gsap";

function MiniCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ xscale: 1, yscale: 1 });
  const [prevPos, setPrevPos] = useState({ xprev: 0, yprev: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable cursor on mobile

    let timeout;

    const handleMouseMove = (e) => {
      clearTimeout(timeout);

      const deltaX = e.clientX - prevPos.xprev;
      const deltaY = e.clientY - prevPos.yprev;

      const xscale = gsap.utils.clamp(0.8, 1.2, deltaX / 100);
      const yscale = gsap.utils.clamp(0.8, 1.2, deltaY / 100);

      setPosition({ x: e.clientX, y: e.clientY });
      setScale({ xscale, yscale });
      setPrevPos({ xprev: e.clientX, yprev: e.clientY });

      timeout = setTimeout(() => {
        setScale({ xscale: 1, yscale: 1 });
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [prevPos]);

  return (
    <div className="mini-cursor">
      <div
        id="minicircle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale.xscale}, ${scale.yscale})`,
        }}
      ></div>
    </div>
  );
}

export default MiniCursor;
