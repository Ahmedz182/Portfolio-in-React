import React from "react";
import logo from "../assets/img/logo_arabics.svg";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="flex waveyBg  px-8 py-1 justify-between items-center bg-primary">
        <span
          className="cursor-pointer"
          onClick={() => {
            location.href = "/";
          }}>
          <img className="w-14 p-1 logoImg" src={logo} alt="Ahmed.Dev" />
        </span>
        <div className="flex gap-4 uppercase justify-evenly items-center sm:hidden md:hidden">
          <p
            className="cursor-pointer text-sm space2 link p-1 "
            onClick={() => {
              location.href = "/";
            }}>
            Home
          </p>
          <p className="cursor-pointer text-sm space2 link p-1">About</p>
          <p
            className="cursor-pointer text-sm space2 link p-1"
            onClick={() => {
              // navigate("/projects");
              location.href = "/projects";
            }}>
            Projects
          </p>
          <p className="cursor-pointer text-sm space2 link p-1 ">Contact me</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
