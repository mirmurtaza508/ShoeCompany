import React from "react";
import heroImg from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <>
      <section
        className={`section-container bg-hero-background h-full w-full bg-cover bg-right bg-no-repeat pt-20 text-white md:bg-contain`}
      >
        <div className="mx-auto mt-8 flex h-full w-full max-w-6xl flex-col items-center justify-between md:mt-0 md:flex-row">
          <h1 className="mx-8 text-5xl font-bold leading-[60px] md:text-7xl md:leading-[90px]">
            THE <br /> SHOE <br /> COMPANY
          </h1>
          <div>
            <img src={heroImg} alt="" className="w-full max-w-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
