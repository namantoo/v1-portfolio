import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  height: auto;
  padding: 0 1rem 2rem;
  font-family: 'Inter', sans-serif;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem 2rem;
  }

  h3 {
    margin-top: 0.5rem;
    color: #ccd6f6;
    line-height: 0.9;
  }

  p.description {
    margin: 1.5rem 0 0;
    max-width: 32rem;
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .cta-group {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }

  .email-link {
    display: inline-block;
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <StyledHeroSection>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText2}>Hi, my name is</p>
          <h2 className={styles.sectionHeadText}>Naman.</h2>
          <h2 className={`${styles.sectionHeadText} text-[#8892b0]`}>
            I craft web experiences with code.
          </h2>
        </motion.div>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a Software Engineer specializing in building exceptional full-stack
          web experiences. Passionate about clean architecture, performance, and
          developer-friendly APIs.
        </motion.p>

        <motion.div
          className="cta-group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Resume link — update path once resume is in /public */}
          {/* <a
            className="email-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a> */}
          <a
            className="email-link"
            href="/#about"
          >
            Learn more ↓
          </a>
        </motion.div>
      </StyledHeroSection>
    </div>
  );
};

export default Hero;
