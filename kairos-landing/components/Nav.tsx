"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "./props/Button";
type NavItem = {
  name: string;
  link: string;
};

const navigator: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Fqr", link: "/" },
  { name: "Teams", link: "/" },
];
export function DesktopNav() {
  const [toggle, setToggle] = useState<boolean>(false);
  const Toggleme = () => {
    setToggle(!toggle);
  };

  return (
    <main>
      <section className="relative z-10 ">
        <nav className="text-white flex justify-between py-2 md:py-4  bg-black/40 backdrop-blur-md fixed  top-0 right-0 left-0 items-center px-3 md:px-12 ">
          <div className="flex  items-center space-x-2">
            <Image
              src="/white-logo.png"
              alt="Logo"
              width={29}
              height={29}
              className="object-contain"
            />
            <p className=" text-[22px] font-orbitron md:text-[20px] font-bolder ">
              Kairos
            </p>
          </div>
          <ul className="md:flex items-center space-x-5 hidden">
            {navigator.map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
          </ul>
          <div className="space-x-2 md:flex items-center  hidden ">
            <Button
              className="bg-white text-black px-8 py-2 rounded-lg"
              name="Get started"
            />
          </div>
          <div className="md:hidden" onClick={Toggleme}>
            {toggle ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </div>
        </nav>
      </section>
      {toggle && <MobileNav />}
    </main>
  );
}
function MobileNav() {
  return (
    <main className="fixed top-14 justify-center items-center left-0 right-0 z-50 px-3">
      <nav className="bg-black/80 backdrop-blur-md text-center mb-8 rounded-lg  py-4 px-3">
        <aside className="text-white">
          <ul className="space-y-8">
            {navigator.map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
          </ul>
        </aside>
        <article className="">
          <div className="text-white flex flex-col gap-y-4">
            <Button
              className="bg-white text-black border w-full mt-8 border-neutral-300 px-8 py-2 text-[13px] rounded-lg"
              name="Get started"
            />
          </div>
        </article>
      </nav>
    </main>
  );
}
