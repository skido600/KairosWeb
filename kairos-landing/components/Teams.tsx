import Teams_client from "./Client_Comp/Teams_client";

const teamMembers = [
  {
    name: "Treasure uzoma",
    role: "Fullstack Developer",
    bio: "Full-stack developer with 4 years of experience . Passionate about clean code and user experience. heavy on frontend",
    email: "treasureuzomajew650@gamil.com",
    github: "TreasureUzoma",
    linkedin: "#",
    twitter: "idolodev",
  },
  {
    name: "Leowave",
    role: "backend route & Frontend intergration ",
    bio: "Creative designer focused on intuitive interfaces and engaging user experiences. Background in graphic design and HCI.",
    email: "ebisileonard@gmail.com",
    github: "skido600",
    linkedin: "sarah-chen-design",
    twitter: "https://x.com/Momentum1962",
  },
  {
    name: "MroLU",
    role: "backend route & Frontend intergration ",
    bio: "Database expert and API architect with strong skills in system optimization and security implementation.",
    email: "michael@chackton.com",
    linkedin: "alex-johnson",
    github: "mrodriguez",
    twitter: "mike_backend",
  },
  {
    name: "Onos Ejoor",
    role: "Backend logic && frontend intergartion",
    bio: "Certified project manager with experience in agile methodologies. Focused on team coordination and efficient delivery.",
    email: "anos@gmail.com",
    linkedin: "priya-patel-pm",
    github: "davidkim-qa",
    twitter: "priyapatel_pm",
  },
];

function Teams() {
  return (
    <main className=" min-h-screen">
      <section className="mx-3 md:px-12 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-800">
            Our Team
          </h1>
          <p className="text-neutral-600 max-w-3xl mx-auto text-[15px]">
            Meet the talented individuals behind the Chackton project. Our
            diverse team brings together expertise in development, design, and
            project management.
          </p>
        </div>

        <div className="">
          <Teams_client teams={teamMembers} />
        </div>
      </section>
    </main>
  );
}

export default Teams;
