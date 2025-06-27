import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // 👈 Import Lenis
import HeroSection from "./components/HeroSection";
import ProblemANDSolution from "./components/ProblemANDSolution";
import Provide from "./components/Provide";
import Win from "./components/Win";
import Rollout from "./components/Rollout";
import Team from "./components/Team";
import Ask from "./components/Ask";
import Form from "./components/Form";
import MiniCursor from "./components/cursor/MiniCursor";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <MiniCursor />
        <HeroSection />
        <ProblemANDSolution />
        <Provide />
        <Win />
        <Rollout />
        <Ask />
        <Team />
        <Form />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 The Maui Project and D4W. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
