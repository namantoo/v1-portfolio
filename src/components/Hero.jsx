import React, { useEffect, useRef, useState } from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import pfp from '../assets/pfp.jpeg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import VerticalLineWithEmail from './VerticalLineWithEmail';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem; // Consistent padding for all screen sizes
`;
// Animation variants for the fade-in effect
const fadeInVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  height: auto; // Change from 100vh to auto
  padding-bottom: 2rem; // Add some padding at the bottom // Consistent padding for all screen sizes
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
const Hero = () => {
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I'm a Software Engineer, specializing in building and developing exceptional web/digital experiences. With a full-stack approach, I'm dedicated to creating accessible, innovative solutions.
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="../src/assets/Naman[3].pdf" // Update this path to the location of your resume.pdf
      target="_blank"
      rel="noreferrer">
      Resume
    </a>
  );

  const items = [four];
    // resume add
  return (
    <StyledContainer>
      <StyledHeroSection>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText2}>Hi, my name is</p>
          <h2 className={styles.sectionHeadText}>Naman.</h2>
          <h2 className={styles.sectionHeadText}>I craft web experiences with code.</h2>
        </motion.div>

        <TransitionGroup component={null}>
          {items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={1000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </StyledHeroSection>
    </StyledContainer>
  );
};

export default Hero;

function() {
  var c =10;
 let e =10;
  if (whatsup) {
    var a = 4;
    let b = 6;
    console.log(e);
  }
  console.log(b);
  console.log(a);
}

