import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Archives from "./components/Archives";
import VerticalLineWithEmail from "./components/VerticalLineWithEmail";
import FeaturedProjects from "./components/FeaturedProjects";
import Links from "./components/Links";
import Books from "./components/Books";

const StarCanvasWrapper = ({ children }) => {
  return (
    <div className="relative z-0 bg-primary h-full min-h-screen">
      {children}
      <StarsCanvas />
    </div>
  );
};
const HomePage = () => {
  return (
    <div className="relative">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* <Hero /> */}
      </div>

      <div className="relative z-0 bg-primary">
        <Hero />
        <StarsCanvas />
      </div>
      <div className="relative z-0 bg-primary">
        <About />
        {/* <Tech /> */}
      </div>

      <div className="relative z-0 bg-primary">
        <Experience />
        <StarsCanvas />
      </div>
      <div className="relative z-0 bg-primary">
        <Works />
      </div>
      {/* <Feedbacks /> */}

      <div className="relative z-0 bg-primary">
        <Archives />
        <StarsCanvas />
      </div>
      {/* <Contact /> */}
      {/* </VerticalLineWithEmail> */}
    </div>
  );
};
const App = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<StarCanvasWrapper><Links /></StarCanvasWrapper>} />
        <Route path="/books" element={<StarCanvasWrapper><Books /></StarCanvasWrapper>} />
      
        {/* Assuming you have a Books component */}
        {/* <Route path="/books" element={<Books />} /> */}
      </Routes>
      <div className="fixed bottom-2 right-2">
      <div className="fixed bottom-2 right-2 sm:block hidden">
  <VerticalLineWithEmail />
</div>
      </div>
      {/* <FeaturedProjects/> */}
    </BrowserRouter>
  );
};

export default App;
