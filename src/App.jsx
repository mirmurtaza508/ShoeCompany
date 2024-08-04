import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <main className="h-full w-full">
        <NavBar />
        <HeroSection />
      </main>
    </>
  );
};

export default App;
