import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";

const App = () => {
  return (
    <>
      <main className="h-full w-full">
        <div className="h-screen w-full">
          <NavBar />
          <HeroSection />
        </div>
        <HowItWorks />
        <About />
      </main>
    </>
  );
};

export default App;
