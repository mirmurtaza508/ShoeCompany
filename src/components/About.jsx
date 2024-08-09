import React from "react";
import aboutUsImg from "../assets/about-shoe-company.png";
import aboutUsBackground from "../assets/about-us-background.png";
const About = () => {
  return (
    <section id="about-us" className="section-container scroll-mt-12 pt-20">
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <h3 className="block text-center text-3xl font-bold md:hidden md:text-6xl">
          About Us!
        </h3>
        <div
          className="w-full self-center bg-no-repeat"
          style={{ backgroundImage: `url('${aboutUsBackground}')` }}
        >
          <img src={aboutUsImg} alt="" />
        </div>
        <div className="w-full space-y-8 text-[16px]">
          <h3 className="hidden text-6xl font-bold md:block">About Us!</h3>
          <p>
            For each one of those shoe sweethearts out there, THE SHOE COMPANY
            offer the one-stop goal to pick the correct match of footwear.
          </p>
          <p className="hidden md:block">
            Gone are the days when you needed to go from store to store to
            locate the correct style and size for yourself.
          </p>
          <p>
            At THE SHOE COMPANY, you can locate a vast accumulation of dashing
            footwear in all sizes and styles, all inside a couple of snaps.
          </p>
          <p className="hidden md:block">
            {" "}
            Simple right? Not just we are here to spare your time, we are
            putting forth you the most dazzling footwear alternatives from all
            the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At
            ‘Organization Name’, we offer men, ladies, and child’s shoes perfect
            for any and each event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
