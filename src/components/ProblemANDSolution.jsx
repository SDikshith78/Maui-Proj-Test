import React from "react";
import "./fontStyles.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemAndSolution = () => {
  useGSAP(() => {
    const problm1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".problem",
        // markers:true,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    problm1.from(".problem", {
      x: -700,
      duration: 0.1,
      opacity: 0,
      ease: "power3.in",
    });

    const solution1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".solution",
        // markers:true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    solution1.from(".solution", {
      x: 1100,
      duration: 0.1,
      opacity: 0,
      ease: "power3.in",
    });
  }, []);

  return (
    <section className="mx-auto mb-16 mt-5 flex max-w-6xl flex-col gap-8 rounded-lg bg-white px-4 py-12 overflow-hidden">
      
      {/* 🧨 PROBLEM BLOCK */}
      <div className="problem backgroundCard5 rounded-lg bg-[#f2ecff] p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 text-center">
          The Problem
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/assets/images/problem.webp"
            alt="Surveillance or tech monopoly"
            className="w-full md:w-[36%] max-h-72 object-cover rounded-lg shadow"
          />
          <p className="text-left text-gray-600 font-[personal2] leading-relaxed md:w-1/2">
            The internet relies on legacy infrastructure controlled by tech giants
            who dominate data, rules, and profits. Platforms struggle with costly,
            fragile systems—manual KYC, outsourced moderation, rising fees, and
            legal overhead. Creators are exploited, innovation stalls, and users
            become products. Content grows toxic, unregulated, and
            algorithm-driven. A new architecture for digital sovereignty is
            needed.
          </p>
        </div>
      </div>

      {/* 🔧 SOLUTION BLOCK */}
      <div className="solution backgroundCard5 rounded-lg bg-[#5cdab7] p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 text-center">
          Our Solution
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-left text-gray-600 font-[personal2] leading-relaxed md:w-1/2">
            MAUI offers a modular, compliance-ready infrastructure stack,
            replacing centralized gatekeepers with privacy-first tools. Built on
            the Timpi/Neutaro Platform’s decentralized web index, it empowers
            platforms to cut costs, launch faster, monetize safely, and drive
            regulatory-compliant, user-first innovation.
          </p>
          <img
            src="/assets/images/solution.jpg"
            alt="Modular infrastructure solution"
            className="w-full md:w-[36%] max-h-72 object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* 🖼️ DIAGRAM BLOCK */}
      <div className="mt-16 text-center px-4">
        <h1 className="mb-4 text-xl sm:text-2xl font-semibold text-[#042880]">
          How It Works
        </h1>

        <p className="mb-6 text-gray-700 font-[personal2] max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
          We use the decentralized web, AI, and MLaaS tools as the foundation.
          Key features are built on top in a modular fashion. Platforms can
          select what and how they want these features, leading to fully
          customizable infrastructure.
        </p>

        <div className="flex justify-center">
          <img
            src="/assets/images/Diagram.png"
            alt="MAUI Infrastructure Diagram"
            className="backgroundCard5 w-[124%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[80%] max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
