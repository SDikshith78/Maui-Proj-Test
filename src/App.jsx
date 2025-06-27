// src/App.jsx
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ProblemANDSolution from "./components/ProblemANDSolution";
import Provide from "./components/Provide";
import Win from "./components/Win";
import Rollout from "./components/Rollout";
import Team from "./components/Team";
import Ask from "./components/Ask";
import Form from "./components/Form";
import Preloader from "./components/Preloader/PreLoader";
import MiniCursor from "./components/cursor/MiniCursor";

const App = () => {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {!isPreloaderComplete && (
        <Preloader onComplete={() => setIsPreloaderComplete(true)} />
      )}
      {isPreloaderComplete && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;