import React from "react";
import { TrendingUp, Hub, AccountTree } from "@mui/icons-material";
import "./fontStyles.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rollout = () => {
  useGSAP(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return; // Disable GSAP for mobile/tablet

    const rollout = gsap.timeline({
      scrollTrigger: {
        trigger: ".roll",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
        markers: true,
      },
    });

    rollout.from(".roll", {
      y: -200,
      duration: 0.1,
      opacity: 0,
      ease: "power3.in",
      stagger: 1,
    });

    
  }, []);

  return (
    <section className="mb-16 rounded-lg bg-white p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#042880]">Rollout Roadmap</h2>
      </div>

      <div className="roll grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Phase 1: Proof of Life",
            description:
              "Deploy core modules (Identity, IP, Compliance) with early partners.",
            icon: (
              <div
                className="w-[100px] h-[100px] bg-[#042880]"
                style={{
                  WebkitMaskImage: "url(/assets/icons/Tree.png)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskImage: "url(/assets/icons/Tree.png)",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
              />
            ),
          },
          {
            title: "Phase 2: Scale",
            description:
              "Expand platform integration, optimize speed and cost efficiencies.",
            icon: (
              <TrendingUp sx={{ fontSize: 60 }} className="text-[#042880]" />
            ),
          },
          {
            title: "Phase 3: Ecosystem Enablement",
            description:
              "Launch open APIs and governance toolkits to onboard developers and node operators.",
            icon: <Hub sx={{ fontSize: 60 }} className="text-[#042880]" />,
          },
          {
            title: "Phase 4: Cross-Sector Expansion",
            description:
              "Adapt infrastructure for fintech, media, education, and civic governance—positioning MAUI as the data backbone for sovereign digital economies.",
            icon: (
              <AccountTree sx={{ fontSize: 60 }} className="text-[#042880]" />
            ),
          },
        ].map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="backgroundCard5 flex flex-col sm:flex-row items-center sm:items-start rounded-lg bg-gray-200 p-6 shadow-md text-center sm:text-left"
          >
            <div className="mb-4 sm:mb-0 sm:mr-6">{icon}</div>
            <div>
              <h3 className=" mb-2 text-xl font-semibold text-gray-800">
                {title}
              </h3>
              <p className=" text-gray-600 font-[personal2]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rollout;
