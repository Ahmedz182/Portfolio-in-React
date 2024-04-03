import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

const App = () => {
  const [sticky, setSticky] = useState(false);
  const [Showmenu, setShowmenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowmenu(false);
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Router>
        <NavBar sticky={sticky} Showmenu={Showmenu} setShowmenu={setShowmenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
