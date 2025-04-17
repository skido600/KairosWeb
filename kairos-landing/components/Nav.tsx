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
      <section className="relative z-0 ">
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
              className="border-[#872341] border  px-8 py-2 rounded-lg"
              name="Sign in"
            />
            <Button
              className="bg-[#872341] px-8 py-2 rounded-lg"
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
    <main className="">
      <nav className="bg-black/40  backdrop-blur-md grid grid-cols-3 top-14 mt-5  mx-3 fixed  left-0 right-0 py-4 rounded-2x     px-3 my-2 rounded-lg">
        <aside className="text-white">
          <ul className="space-y-8">
            {navigator.map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
          </ul>
        </aside>
        <article className="col-span-2">
          <div className="space-x-2 text-white flex flex-col gap-y-4">
            <button className="border-[#872341] border text-[13px]  px-2 py-2 rounded-lg">
              Sign in
            </button>
            <button className="bg-[#872341] px-8 py-2 text-[13px] rounded-lg">
              Get started
            </button>
          </div>
        </article>
      </nav>
    </main>
  );
}
