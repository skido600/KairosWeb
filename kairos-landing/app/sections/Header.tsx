"use client";

import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DynamicLinkScroll = dynamic(
    () => import("react-scroll").then((mod) => mod.Link),
    { ssr: false }
  );

  const NavLink = ({ title }: { title: string }) => (
    <DynamicLinkScroll
      onClick={() => setIsMenuOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-black uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5 max-lg:text-2xl"
    >
      {title}
    </DynamicLinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-1 bg-gray-100 backdrop-blur-[10px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image
            src="/images/kairoslogo.jpg"
            alt="logo"
            width={55}
            height={55}
          />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s1 max-lg:opacity-0",
            isMenuOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:p-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="team" />
                </li>
                <li className="nav-logo">
                  <DynamicLinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-700 cursor-pointer"
                    )}
                  >
                    <Image
                      src="/assets/image/thumbnail.jpg"
                      alt="logo"
                      width={65}
                      height={35}
                    />
                  </DynamicLinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="about" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                className="relative z-2"
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
              />
              <Image
                className="absolute inset-0 mix-blend-soft-light opacity-5"
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsMenuOpen((preState) => !preState)}
        >
          <Image
            className="size-1/2 object-contain"
            src={`/images/${isMenuOpen ? "close" : "magic"}.svg`}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={40}
            height={40} 
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
