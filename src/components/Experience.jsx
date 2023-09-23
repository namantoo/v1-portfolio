import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import styled from 'styled-components';

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const StyledContainer = styled.div`
background-color: #050816;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`;
const StyledHeroSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center; /* Vertically center content */
align-items: flex-start;
min-height: 100vh;
height: 100vh;
padding: 0;
font-family: 'Inter', sans-serif; /* Use Inter font */

@media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
  height: auto;
  padding-top: 4rem;
}


h1 {
  margin: 0 0 1.5rem 0.1rem;
  color: #64ffda;
  font-family: 'Space Mono', monospace; /* Use Space Mono font */
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 1rem 0.1rem;
  }
}

h3 {
  margin-top: 0.5rem;
  color: #ccd6f6;
  line-height: 0.9;
}

p {
  margin: 1rem 0 0;
  max-width: 30rem;
  color: #ccd6f6;
}

.email-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #64ffda;
  background-color: transparent;
  border: 2px solid #64ffda;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }
}
`;
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain"
            style={{ borderRadius: "50%" }}
          />
        </div>
      }
    >
      
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
     <section id="works">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>02. What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      </section>
    </>
  );
};

export default SectionWrapper(Experience, "work");
