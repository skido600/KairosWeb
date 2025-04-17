"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
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
      <section className="relative z-0">
        <nav className="text-white flex justify-between py-4 bg-black/40 backdrop-blur-md fixed  top-0 right-0 left-0 items-center px-3 md:px-12">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={1099}
              height={1099}
              className="h-7.5 dark:invert w-fit"
              alt="logo"
            />
          </Link>
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
