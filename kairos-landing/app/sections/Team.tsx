import React from "react";
import { teams } from "../contants/indexs";
import  TeamItems from "../components/TeamItems";


const Team = () => {
  const halfLength = Math.floor(teams.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="uppercase text-p3 small-2 mb-5 max-md:mb-2.5 ">Kairos Team</p>
          <h3 className="h3 max-md:h5 text-black">Elite Developers</h3>
        </div>
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50 ">
            {teams.slice(0, halfLength).map((Team) => (
              <TeamItems
                key={Team.id}
                items={Team}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>
          <div className="flex-50 ">
            {teams.slice(halfLength).map((Team) => (
              <TeamItems
                key={Team.id}
                items={Team}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
