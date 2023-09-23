import React, { useEffect, useRef } from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import styled from 'styled-components';
import pfp from '../assets/pfp.jpeg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem; // Consistent padding for all screen sizes
`;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0 1rem; // Consistent padding for all screen sizes
  font-family: 'Inter', sans-serif;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem; // Added padding at the bottom for medium heights
  }

  @media (max-width: 768px) {
    padding: 0 1rem; // Added padding for tablet screens
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
const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    // Replace this with your reveal logic if needed
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Python', 'Node.js', 'MongoDB'];

  return (
    <StyledContainer id="about" ref={revealContainer} >
      <StyledHeroSection>
        {/* <section id="about" ref={revealContainer}> */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>01. About</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-12 mt-8">
            <div className="col-span-2 space-y-6">
              <div>
                <p>
                  Hi! My name is Naman, I'm passionate about crafting solutions for the web. My journey into full-stack development began when I delved into creating dynamic
                  web applications capable of solving problems. Discovering the synergy between front-end and back-end technologies not only expanded my skill set but also deepened my appreciation for seamless user experiences.
                </p>
              </div>

              <div>
                <p>
                Fast-forward to today, and I've been fortunate to collaborate with diverse teams ranging from innovative start-ups to established tech companies. My primary mission is to engineer robust, scalable, and efficient systems that cater to the ever-evolving needs of users. Whether it's optimizing database queries or refining user interfaces, I'm committed to delivering excellence.
                </p>
              </div>

              {/* <div>
                <p>
                  I also recently{' '}
                  <a href="https://www.newline.co/courses/build-a-spotify-connected-app">launched a course</a>{' '}
                  that covers everything you need to build a web app with the Spotify API using Node
                  &amp; React.
                </p>
              </div> */}

              <div>
                <p>Here are a few technologies I’ve been working with recently:</p>
              </div>

              <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>
            <div className="max-w-xs mx-auto">
              <div
                className="shadow-md border-2 border-secondary bg-primary hover:translate-x-2 hover:translate-y-2 transition-transform duration-300"
                style={{
                  backgroundColor: "rgb(170, 166, 195, 0.3)", // Background color with opacity (adjust as needed)
                }}
              >
                {/* Replace with your image component */}
                <img
                  src={pfp}
                  alt="Headshot"
                  className="w-full h-full object-cover object-center rounded-lg"
                  style={{
                    opacity: 0.8, // Initial opacity (adjust as needed)
                    transition: "opacity 0.3s", // Transition duration (adjust as needed)
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)} // Mouse hover
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)} // Mouse leave
                />
              </div>
            </div>


          </div>
        {/* </section> */}
      </StyledHeroSection>
    </StyledContainer>

  );
};

export default About;
