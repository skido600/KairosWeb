"use client";

import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:mb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Code Challenge
            </div>
            <h1 className="mb-5 h1 text-black-100 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-3xl max-md:leading-tight max-md:text-center">
              programming contest
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-black-100">
              The 30 Days of Code with VickyJay challenge is an engaging and
              intensive programming contest designed to foster continuous
              learning and project development
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Get Started</Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;