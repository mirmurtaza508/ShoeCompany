import React from "react";
import shoeImg from "../assets/how-it-works.png";
import arrowImg1 from "../assets/arrow-1.png";
import arrowImg2 from "../assets/arrow-2.png";
import arrowImg3 from "../assets/arrow-3.png";
const HowItWorks = () => {
  return (
    <section className="section-container w-full bg-black px-12 py-20 pb-24 text-white">
      <h1 className="mx-auto p-4 text-center text-2xl font-semibold md:w-126 md:text-4xl">
        Have they finally made the perfect workout shoe?
      </h1>
      <div className="relative mx-auto w-full max-w-xl pt-60 xl:pt-20">
        <img
          src={shoeImg}
          alt=""
          className="w-full rotate-6 p-12 md:p-0 xl:rotate-0"
        />
        <div className="absolute top-0 max-w-[200px] xl:ml-14 xl:max-w-sm xl:-translate-x-full">
          <h3 className="font-bold xl:text-3xl">THE HEEL</h3>
          <p className="media540:text-[1rem] text-xs xl:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
          <img
            src={arrowImg1}
            alt=""
            className="media540:max-w-36 mt-8 max-w-32 rotate-[45deg] xl:ml-auto xl:max-w-40 xl:-translate-x-8 xl:translate-y-4 xl:rotate-0"
          />
        </div>
        <div className="absolute right-0 top-0 max-w-[200px] md:-top-20 xl:-right-60 xl:-top-10 xl:max-w-sm">
          <img
            src={arrowImg2}
            alt=""
            className="media540:max-w-36 media540:translate-y-60 media440:translate-y-56 max-w-28 translate-y-44 rotate-[125deg] md:max-w-44 md:translate-y-80 xl:translate-x-0 xl:rotate-0"
          />
          <h3 className="font-bold xl:text-3xl">THE Front</h3>
          <p className="media540:text-[1rem] text-xs xl:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
        </div>
        <div className="absolute -bottom-20 ml-14 max-w-[200px] xl:max-w-sm">
          <img
            src={arrowImg3}
            alt=""
            className="ml-auto max-w-36 -translate-x-8 translate-y-4 md:max-w-40 md:-translate-x-8 md:translate-y-4"
          />
          <h3 className="font-bold xl:text-3xl">THE HEEL</h3>
          <p className="media540:text-[1rem] text-xs xl:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
