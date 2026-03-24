import React from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import pfp from '../assets/pfp.jpeg';

const About = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Python', 'Node.js', 'MongoDB'];

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-16" id="about">
      <section className="w-full max-w-5xl">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>01. About</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="md:col-span-2 space-y-5">
            <p className="text-[#8892b0] text-[16px] leading-[28px]">
              Hi! My name is Naman. I'm passionate about crafting solutions for the web. My journey
              into full-stack development began when I delved into creating dynamic web applications
              capable of solving real problems. Discovering the synergy between front-end and
              back-end technologies deepened my appreciation for seamless user experiences.
            </p>

            <p className="text-[#8892b0] text-[16px] leading-[28px]">
              Fast-forward to today, and I've been fortunate to collaborate with diverse teams
              ranging from innovative start-ups to established tech companies. My primary mission is
              to engineer robust, scalable, and efficient systems. Whether it's optimizing database
              queries or refining user interfaces, I'm committed to delivering excellence.
            </p>

            <div>
              <p className="text-[#ccd6f6] text-[16px] mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 list-none">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#8892b0] text-[14px] font-mono">
                    <span className="text-[#64ffda]">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div
              className="relative group max-w-[250px] w-full"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
              <img
                src={pfp}
                alt="Naman"
                className="relative w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all duration-300"
                style={{ filter: 'grayscale(20%)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
