"use client";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa"; 

// fadeIn variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type goalsData = {
  discription: string;
  para: string;
};

type goalsmainData = {
  goal: goalsData[];
};

function About_Client({ goal }: goalsmainData) {
  const icons = [FaUsers, FaCode, FaLightbulb]; 

  return (
    <main>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {goal.map((item, index) => {
            const Icon = icons[index % icons.length]; 
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[#e5e7eb]">
                <div className="p-3 bg-neutral-900 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.discription}
                </h3>
                <p className="text-neutral-600">{item.para}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-8 rounded-2xl border border-[#e5e7eb] ">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            Our Mission
          </h2>
          <div className="md:text-lg text-neutral-600 leading-relaxed space-y-6">
            <p>
              At Kairos, we believe in empowering developers to showcase their
              creativity and passion. Our platform is a space where developers
              can share their projects, connect with like-minded individuals,
              and inspire others with their work. Whether you&#39;re a beginner
              or a seasoned professional, Kairos is designed to help you present
              your ideas to the world.
            </p>
            <p>
              We are a community that celebrates innovation, collaboration, and
              growth. At Kairos, your projects are more than just code — they
              are stories of hard work, learning, and imagination.
            </p>
            <p>
              Join us, share your journey, and be part of a movement that pushes
              the boundaries of technology and creativity.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default About_Client;
