import Button from "./props/Button";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <main className="relative z-0 flex h-[50rem] w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <section className="relative z-10 text-center md:max-w-3xl mx-auto bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-3 font-bold">
          Code Challenge <br /> programming <br />
          contest
        </h1>
        <p className="mt-4 text-gray-300 text-[15px] px-4">
          The 30 Days of Code with VickyJay challenge is an engaging and
          intensive programming contest designed to foster continuous learning
          and project development
        </p>

        <Button
          className="bg-white w-[80%] md:w-auto   px-8 py-2 rounded-lg mt-8"
          name="Get started"
        />
      </section>
    </main>
  );
}

export default Hero;
