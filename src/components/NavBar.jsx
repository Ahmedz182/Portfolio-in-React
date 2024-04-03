import React from "react";
import logo from "../assets/img/logo_arabics.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = ({ Showmenu, setShowmenu }) => {
  const handelToggle = () => {
    setShowmenu(true);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="flex waveyBg  px-8 py-1 justify-between items-center bg-primary">
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}>
          <img className="w-14 p-1 logoImg" src={logo} alt="Ahmed.Dev" />
        </span>

        <span className="lg:hidden  sm:block s-md:block md:block">
          <i
            className="ri-menu-4-fill text-[#ffffff] text-2xl cursor-pointer p-1 transform ease-in-out duration-300"
            onClick={handelToggle}></i>
        </span>
      </div>

      {Showmenu && (
        <div className="flex  fixed top-0 flex-col bg-primary  resNav">
          <span>
            <i
              class="ri-close-fill text-[#ffffff] text-4xl cursor-pointer p-5 float-end"
              onClick={() => {
                setShowmenu(false);
              }}></i>
          </span>
          <ul className=" flex flex-col text-3xl resNav gap-4 uppercase items-center justify-center  font-semibold py-1 px-2 cursor-pointer z-50 transform duration-300 ease-linear  ">
            <NavLink
              to="/"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold link">Home</li>
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="font-bold "
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold link">Projects</li>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              onClick={() => {
                setShowmenu(false);
              }}>
              <li className=" hover:font-bold link">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
