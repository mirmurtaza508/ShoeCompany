import React from "react";
import shoeImg from "../assets/how-it-works.png";
import arrowImg1 from "../assets/arrow-1.png";
import arrowImg2 from "../assets/arrow-2.png";
import arrowImg3 from "../assets/arrow-3.png";
const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section-container w-full bg-black px-12 py-20 pb-24 text-white"
    >
      <h1 className="mx-auto mb-12 p-4 text-center text-2xl font-semibold md:w-126 md:text-4xl">
        Have they finally made the perfect workout shoe?
      </h1>
      <div className="relative mx-auto w-full max-w-xl pt-60 xl:pt-20">
        <img
          src={shoeImg}
          alt=""
          className="w-full rotate-6 p-8 media560:p-12 md:p-0 xl:rotate-0"
        />
        <div className="absolute -top-2 mt-10 max-w-[200px] media560:top-0 media560:mt-0 xl:ml-14 xl:max-w-sm xl:-translate-x-full">
          <h3 className="font-bold media560:text-2xl">THE HEEL</h3>
          <p className="text-xs media560:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
          <img
            src={arrowImg1}
            alt=""
            className="mt-4 max-w-32 rotate-[45deg] media440:mt-0 media560:max-w-36 xl:ml-auto xl:max-w-40 xl:-translate-x-8 xl:translate-y-4 xl:rotate-0"
          />
        </div>
        <div className="absolute -right-0 top-3 max-w-[200px] media560:top-0 md:-top-20 xl:-right-60 xl:-top-10 xl:max-w-sm">
          <img
            src={arrowImg2}
            alt=""
            className="media440:translate-y-54 max-w-28 translate-y-44 rotate-[125deg] media560:max-w-36 media560:translate-y-64 md:max-w-44 md:translate-y-80 xl:ml-0 xl:-translate-x-32 xl:translate-y-16 xl:rotate-0"
          />
          <h3 className="font-bold media560:text-2xl">THE Front</h3>
          <p className="text-xs media560:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
        </div>
        <div className="absolute -bottom-10 max-w-[200px] md:-bottom-20 xl:-bottom-20 xl:max-w-sm">
          <img
            src={arrowImg3}
            alt=""
            className="ml-auto max-w-28 -translate-x-8 translate-y-4 media560:max-w-36 md:max-w-40 md:-translate-x-8 md:translate-y-4 xl:-translate-x-20 xl:translate-y-12"
          />
          <h3 className="font-bold media560:text-2xl xl:mt-4">THE HEEL</h3>
          <p className="text-xs media560:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
