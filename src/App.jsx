import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
