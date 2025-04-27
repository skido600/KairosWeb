import About_Client from "./Client_Comp/About_Client";

function About() {
  const Goals = [
    {
      discription: "Connect & Collaborate",
      para: "Find like-minded developers, exchange ideas, and build meaningful connections.",
    },
    {
      discription: "Showcase Projects",
      para: "Share your code, applications, and creative work with a community that appreciates innovation.",
    },
    {
      discription: "Inspire & Grow",
      para: "Learn from others, share your journey, and contribute to a community that values growth.",
    },
  ];

  return (
    <main className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6">
            About <span className="">Kairos</span>
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <About_Client goal={Goals} />
      </div>
    </main>
  );
}

export default About;
