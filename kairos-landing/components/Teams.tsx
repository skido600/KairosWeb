"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Treasure uzoma",
    role: "Fullstack Developer",
    bio: "Full-stack developer with 4 years of experience . Passionate about clean code and user experience. heavy on frontend",
    email: "treasureuzoma650@gamil.com",
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
    email: "priya@chackton.com",
    linkedin: "priya-patel-pm",
    github: "davidkim-qa",
    twitter: "priyapatel_pm",
  },
  //   {
  //     name: "David Kim",
  //     role: "QA Engineer",
  //     bio: "Detail-oriented tester with automation expertise. Committed to delivering high-quality, bug-free software.",
  //     email: "david@chackton.com",
  //     linkedin: "alex-johnson",
  //     github: "davidkim-qa",
  //     twitter: "qa_david",
  //   },
];

function Teams() {
  return (
    <main className=" min-h-screen">
      <section className="mx-3 md:px-12 py-12 max-w-7xl ">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="border border-[#e5e7eb] rounded-xl ">
              <div className="p-6">
                <div className="flex items-center gap-5 mb-4">
                  <div>
                    <h3 className="font-bold text-xl pb-3 text-neutral-800">
                      {member.name}
                    </h3>
                    <p className=" font-medium text-[15px]">{member.role}</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-6 text-[13px]">{member.bio}</p>

                {/* Contact info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-neutral-600">
                    <FaEnvelope className="mr-3" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-blue-600 hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex space-x-4 pt-4 border-t border-neutral-100">
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-black transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700"
                    >
                      <FaXTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Teams;
