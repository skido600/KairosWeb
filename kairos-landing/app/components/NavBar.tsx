import React from "react";
import Image from "next/image";
import logoimage from "@/public/assets/images/logosaas.png";
import MenuIcon from "@/public/assets/icons/menu.svg"; // SVG as React component

const NavBar = () => {
  return (
    <main className="bg-black">
    <div className="px-5">
      <div className="py-1 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 nav-gradient blur-md" />
          <Image src={logoimage} alt="Kairos" className="h-10 w-10 relative" />
        </div>
        <div className="border border-white border-opacity-10 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
          <MenuIcon className="text-white"/>
        </div>
        <nav className="hidden sm:flex gap-6 items-center">
            <a href="#" className="text-opacity-60 text-white hover:text-gray-500 transition">About</a>
            <a href="#" className="text-opacity-60 text-white hover:text-gray-500 transition">Features</a>
            <a href="#" className="text-opacity-60 text-white hover:text-gray-500 transition">About</a>
            <a href="#" className="text-opacity-60 text-white hover:text-gray-500 transition">Team</a>
            <a href="#" className="text-opacity-60 text-white hover:text-gray-500 transition">FAQ</a>
            <button className="bg-white py-2 px-4 rounded-lg cursor-pointer">Login</button>
        </nav>
      </div>
    </div>
    </main>
  );
};

export default NavBar;
