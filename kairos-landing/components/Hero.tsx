import Link from "next/link";
import Button from "./props/Button";

function Hero() {
  return (
    <div className="pt-24 md:pt-36 flex justify-center text-center items-center min-h-[85vh] bg-black pb-12">
      <section className="text-white mx-3 md:px-12 max-w-2xl md:max-w-[70%] ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 tracking-[-0.5px]">
          Kairos *30-Days* <br /> <i className="font-normal tracking-normal"> Programming</i> <br />
          Contest
        </h1>
        <p className="mt-4 text-neutral-300 text-[0.978rem] font-medium px-4 md:px-0">
          The 30 Days of Code with VickyJay challenge is an engaging and intensive programming
          contest designed to foster continuous learning and project development
        </p>

        <Link href="/auth">
          <Button
            className="bg-white hover:opacity-50 text-black px-8 py-2 font-bold text-[13px] rounded-lg mt-4"
            name="Get started"
          />
        </Link>
        <div className="flex justify-center items-center mt-4"></div>
      </section>
    </div>
  );
}

export default Hero;
