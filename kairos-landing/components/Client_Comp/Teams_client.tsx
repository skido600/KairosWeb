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
type TeamMain = {
  teams: TeamMember[];
};
function Teams_client({ teams }: TeamMain) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {" "}
      {teams.map((member, index) => (
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

            <div className="space-y-2 mb-6">
              <div className="flex items-center text-neutral-600">
                <FaEnvelope className="mr-3" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-600 hover:underline">
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
                  className="text-neutral-700 hover:text-black transition-colors">
                  <FaGithub size={20} />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={`https://linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700">
                  <FaLinkedin size={20} />
                </a>
              )}
              {member.twitter && (
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700">
                  <FaXTwitter size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Teams_client;
