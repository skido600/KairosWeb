"use client";

import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:mb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              30 Days of Code Challenge
            </div>
            <h1 className="mb-5 h1 text-p5 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              programming contest
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-s5">
              The 30 Days of Code with VickyJay challenge is an engaging and
              intensive programming contest designed to foster continuous
              learning and project development
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Get Started </Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/here"
              alt="hero"
              width={130}
              height={60}
             className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
