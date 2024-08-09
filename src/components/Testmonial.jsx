import React from "react";
import testmonial1 from "../assets/testmonial-1.png";
import testmonial2 from "../assets/testmonial-2.png";
import testmonial3 from "../assets/testmonial-3.png";
import testmonialBackImage from "../assets/testmonial-section-background.png";
const Testmonial = () => {
  return (
    <section
      id="testimonials"
      className="section-container scroll-mt-12 bg-cover pb-20 pt-16"
      style={{ backgroundImage: `url('${testmonialBackImage}')` }}
    >
      <h2 className="text-center text-3xl font-bold md:text-6xl">
        What People are saying about THE SHOE COMPANY ?
      </h2>
      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:items-stretch">
        <TestmonialCard
          img={testmonial1}
          text="“Looking for shoes that are built just for you? THE SHOE COMPANY is the
        way to go. Love the design and build quality.”"
        />
        <TestmonialCard
          img={testmonial2}
          text="“I love the shoes, the quality, and everyting. They are worth the investment!”"
          selfStart="self-start"
        />
        <TestmonialCard
          img={testmonial3}
          text="“They make the best and forever lasting shoes. Superb fit and confort is literally the next level. Much recommended!”"
        />
      </div>
    </section>
  );
};

export default Testmonial;

export function TestmonialCard({ img, text, selfStart }) {
  let tailWindClass = selfStart ? selfStart : "";
  return (
    <div className="w-60">
      <img
        src={img}
        alt="testmonial"
        className={`mb-4 w-full ${tailWindClass}`}
      />
      <p className="text-center">{text}</p>
    </div>
  );
}
