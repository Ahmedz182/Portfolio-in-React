import React from "react";
import HeroSection from "../components/HeroSection";
import HireMe from "../components/HireMe";
import Projects from "../components/Projects";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection />
        <HireMe />
        <Projects />
      </div>
    </>
  );
};

export default Home;
