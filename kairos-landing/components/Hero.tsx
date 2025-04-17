import Image from "next/image";
import Button from "./props/Button";
import Link from "next/link";

function Hero() {
  return (
    <div className="pt-24 md:pt-36 flex justify-center text-center items-center min-h-screen bg-black pb-12">
      <section className="text-white mx-3 md:px-12 max-w-2xl md:max-w-[70%] ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-[900] mb-3">
          Kairos <i>30-Days</i> <br /> <span className="text-[#872341]"> Programming</span> <br />
          Contest
        </h1>
        <p className="mt-4 text-gray-300/90 text-[15px]">
          The 30 Days of Code with VickyJay challenge is an engaging and intensive programming
          contest designed to foster continuous learning and project development
        </p>

        <Link href="/auth">
          <Button
            className="bg-[#872341] px-8 py-2 text-[13px] rounded-lg mt-4"
            name="Get started"
          />
        </Link>
        <div className="flex justify-center items-center mt-4">
          <Image alt="kairos hero" src="/hero.svg" width={300} height={300} />
        </div>
      </section>
    </div>
  );
}

export default Hero;
