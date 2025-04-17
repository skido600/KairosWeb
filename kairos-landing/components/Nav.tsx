"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Button from "./props/Button";
type NavItem = {
  name: string;
  link: string;
};

const navigator: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Faq", link: "/#faqs" },
  { name: "Teams", link: "/#teams" }
];
export function DesktopNav() {
  const [toggle, setToggle] = useState<boolean>(false);
  const Toggleme = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <section className="relative z-0 ">
        <nav className="text-white flex justify-between py-2 md:py-4  bg-black/40 backdrop-blur-md fixed  top-0 right-0 left-0 items-center px-3 md:px-12 ">
          <div className="flex  items-center space-x-2">
            <Link href="/">
              <Img src={"/logo.svg"} className="h-7.5 dark:invert w-fit" alt="logo" />
            </Link>
            <p className=" text-[22px] font-orbitron md:text-[20px] font-bolder ">Kairos</p>
          </div>
          <ul className="md:flex items-center space-x-5 hidden">
            {navigator.map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
          </ul>
          <div className="space-x-2 md:flex items-center hidden ">
            <Link href="/auth">
              <Button className="bg-[#872341] px-8 py-2 rounded-lg" name="Get started" />
            </Link>
          </div>
          <div className="md:hidden" onClick={Toggleme}>
            {toggle ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </div>
        </nav>
      </section>
      {toggle && <MobileNav />}
    </div>
  );
}

function MobileNav() {
  return (
    <div>
      <nav className="bg-black/40  backdrop-blur-md grid grid-cols-3 top-14 mt-5  mx-3 fixed left-0 right-0 py-5 rounded-2x px-3 my-2 rounded-lg">
        <aside className="text-white">
          <ul className="space-y-8">
            {navigator.map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
          </ul>
        </aside>
        <article className="col-span-2">
          <div className="space-x-2 text-white flex flex-col gap-y-4">
            <Link href="/auth" className="bg-[#872341] px-8 py-2 text-[13px] rounded-lg">
              Get started
            </Link>
          </div>
        </article>
      </nav>
    </div>
  );
}
