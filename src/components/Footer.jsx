import React from "react";
import logo from "../assets/img/logo_arabics.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-darkPrimary py-20 px-16 gap-8 border-t-2 flex flex-wrap items-center justify-between overflow-x-hidden">
        <div className="flex  items-center sm:w-screen s-md:w-screen">
          <img
            className="w-20 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => {
              location.href = "/";
            }}
          />
          <p className="text-xl px-7 font-bold space2 uppercase tracking-wide">
            Ahmed.dev
          </p>
        </div>

        <div>
          <span className="flex gap-3 sm:w-screen s-md:w-screen">
            <a className="social" href="https://facebook.com/ahmedx182">
              <i class="ri-facebook-circle-fill cursor-pointer"></i>
            </a>
            <a className="social" href="https://www.instagram.com/ahmedz182">
              <i class="ri-instagram-fill cursor-pointer"></i>
            </a>
            <a className="social" href="https://www.linkedin.com/in/ahmedz182/">
              <i class="ri-linkedin-fill cursor-pointer"></i>
            </a>
            {/* <i class="ri-twitter-x-line cursor-pointer"></i> */}
          </span>
        </div>
        <p>All rights resverd &copy; 2024 </p>
      </div>
    </>
  );
};

export default Footer;
