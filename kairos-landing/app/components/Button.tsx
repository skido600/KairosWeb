"use client";

import clsx from "clsx";
import React, { ReactNode } from "react";
import Marker from "./Maker";

const Button = ({
  icon,
  children,
  href,
  containerClassNane,
  onClick,
  markerFill,
}: {
  icon?: string;
  children: ReactNode;
  href?: string;
  containerClassNane?: string;
  onClick?: () => void;
  markerFill?: string;
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center bg-black min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker  MarkerFill={markerFill} />
        </span>
        {icon && (
          <img
            className="size-10 mr-5 object-contain z-10"
            src={icon}
            alt="circle"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-s1 uppercase">
          {children}
        </span>
      </span>
      
      <span
        className="glow-before glow-after block absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 to-black-100 rounded-2xl shadow-500 group cursor-pointer", 
        containerClassNane
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 to-black-100 rounded-2xl shadow-500 group cursor-pointer", 
        containerClassNane
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
