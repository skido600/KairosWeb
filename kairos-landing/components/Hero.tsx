import Image from "next/image";
import Button from "./props/Button";

function Hero() {
  return (
    <main className="pt-24 md:pt-36 flex justify-center text-center items-center  bg-[#020202] pb-12">
      <section className="text-white mx-3 md:px-12 max-w-2xl md:max-w-[70%] ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Raleway text-white font-[900] mb-3">
          Code Challenge <br />{" "}
          <span className="text-[#872341]"> programming</span> <br />
          contest
        </h1>
        <p className="mt-4 text-gray-300/90 text-[15px]">
          The 30 Days of Code with VickyJay challenge is an engaging and
          intensive programming contest designed to foster continuous learning
          and project development
        </p>

        <Button
          className="bg-[#872341] px-8 py-2 text-[13px] rounded-lg mt-4"
          name="Get started"
        />
        <div className="flex justify-center items-center mt-4">
          <Image alt="karos hero" src="/hero.svg" width={300} height={300} />
        </div>
      </section>
    </main>
  );
}

export default Hero;
