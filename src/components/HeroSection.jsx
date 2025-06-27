import React from 'react';

const HeroSection = () => (
  <section className="rounded-2xl bg-white px-4 py-12 text-center sm:px-4 md:px-12 lg:px-20">
    <div className="relative h-[210px] sm:h-[240px] md:h-[300px] w-full overflow-hidden">
      <svg width="0" height="0">
        <defs>
          <clipPath id="text-clip" clipPathUnits="objectBoundingBox">
            <text
              x="0.5"
              y="0.5"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Valorant, sans-serif"
              fontSize="0.07"
              fontWeight="700"
              style={{ fontSize: '0.065', letterSpacing: '0.028em' }}
            >
              The Maui Project and D4W
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
        style={{ clipPath: 'url(#text-clip)' }}
      >
        <source
          src="https://cdn.magicui.design/ocean-small.webm"
          type="video/webm"
        />
      </video>
    </div>

    <h1 className="mb-4 text-base font-[personal2] text-[#0076b8] sm:text-lg md:text-xl lg:text-2xl">
      Infrastructure that serves the people, not Big Tech.
      <br className="hidden sm:inline" />
      Control your data, protect creators, and stay ahead of regulation.
    </h1>

    <p className="text-sm italic text-[#0099be] sm:text-base md:text-lg">
      Powering a people-first internet
    </p>
  </section>
);

export default HeroSection;
