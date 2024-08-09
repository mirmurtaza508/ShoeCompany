import React from "react";
import { NavBar } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Testmonial from "./components/Testmonial";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="h-full w-full bg-black text-white">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <About />
      <Testmonial />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
