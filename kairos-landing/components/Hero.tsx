import Image from "next/image";
import Button from "./props/Button";
import Link from "next/link";

function Hero() {
  return (
    <div className="pt-24 md:pt-36 flex justify-center text-center items-center min-h-screen bg-black pb-12">
      <section className="text-white mx-3 md:px-12 max-w-2xl md:max-w-[70%] ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3">
          Kairos <i className="font-normal">30-Days</i> <br /> <span> Programming</span> <br />
          Contest
        </h1>
        <p className="mt-4 text-neutral-500 text-[0.95rem]">
          The 30 Days of Code with VickyJay challenge is an engaging and intensive programming
          contest designed to foster continuous learning and project development
        </p>

        <Link href="/auth">
          <Button
            className="bg-white hover:opacity-50 text-black px-8 py-2 text-[15px] rounded-lg mt-4"
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
