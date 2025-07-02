import React from 'react';

const HeroSection = () => (
  <section className="rounded-2xl bg-gray-200 px-4 py-12 text-center sm:px-4 md:px-12 lg:px-20">
    <div className="relative h-[210px] sm:h-[240px] md:h-[300px] w-full overflow-hidden flex items-center justify-center">
  <h1
    className="text-center font-[personal2] font-bold text-[1.75rem] sm:text-[2rem] md:text-[5rem] tracking-wide text-[#017ec6ef]"
    style={{ letterSpacing: '0.028em' }}
  >
    The Maui Project and D4W
  </h1>
</div>


    <h1 className="mb-4 text-base font-[personal2] text-[#0076b8] sm:text-lg md:text-xl lg:text-2xl">
      Infrastructure that serves the people, not Big Tech.
      <br className="hidden sm:inline" />
      Control your data, protect creators, and stay ahead of regulation.
    </h1>

    <p className="text-sm font-[personal2]  text-[#0099be] sm:text-base md:text-lg">
      Powering a people-first internet
    </p>
  </section>
);

export default HeroSection;
