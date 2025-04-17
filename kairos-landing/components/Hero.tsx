import Button from "./props/Button";
function Hero() {
  return (
    <main className="pt-24 md:pt-36 flex justify-center h-[90vh] text-center items-center bg-[#020202] pb-12 relative z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#1a0033]/30 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-[30%] h-[30%] bg-white/30 rounded-full blur-[80px] opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[30%] h-[30%] bg-white/30 rounded-full blur-[80px] opacity-50"></div>

      {/* Content section */}
      <section className="text-white mx-3 md:px-12 max-w-2xl md:max-w-[70%] relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Raleway text-white font-[900] mb-3">
          Code Challenge <br /> programming <br />
          contest
        </h1>
        <p className="mt-4 text-gray-300/90 text-[15px]">
          The 30 Days of Code with VickyJay challenge is an engaging and
          intensive programming contest designed to foster continuous learning
          and project development
        </p>

        <Button
          className="bg-white text-black px-8 py-2 rounded-lg mt-8"
          name="Get started"
        />
      </section>
    </main>
  );
}

export default Hero;
