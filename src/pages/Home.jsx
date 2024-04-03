import React from "react";
import HeroSection from "../components/HeroSection";
import HireMe from "../components/HireMe";
import Projects from "../components/Projects";
import { useEffect } from "react";
import Technology from "../components/technology";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import { ToastContainer } from "react-toastify";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <ToastContainer theme="dark" />
        <HeroSection />
        <AboutMe />
        <Technology />
        <HireMe />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
