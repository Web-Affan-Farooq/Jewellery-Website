import React from "react";
import "./style.css";
import Card_testimonials from "./Card-testimonials";

const Section_7 = () => {
  return (
    <section className="w-full p-5 text-center">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Our Allumini</h1>      <br />
      <br />
      <br />
      <div className="scroll-container overflow-hidden w-full whitespace-nowrap p-3">
        <div className="scroll-list scroll-smooth flex flex-row flex-nowrap whitespace-normal gap-5">
          <Card_testimonials/>
          <Card_testimonials/>
          <Card_testimonials/>
          <Card_testimonials/>
          <Card_testimonials/>
          <Card_testimonials/>
        </div>
      </div>
    </section>
  );
};

export default Section_7;