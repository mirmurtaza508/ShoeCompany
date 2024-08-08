import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";

const App = () => {
  return (
    <main className="h-full w-full bg-black text-white">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      {/* <About /> */}
    </main>
  );
};

export default App;
