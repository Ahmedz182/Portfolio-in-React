import React from "react";
import logo from "../assets/img/logo_arabics.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-darkPrimary py-12 footerBg  gap-8 border-t-2 flex flex-col flex-wrap  justify-center overflow-x-hidden">
        <div className="flex flex-wrap gap-12 items-center justify-center sm:gap-4 sm:justify-start sm:px-5 s-md:gap-4  s-md:px-5">
          <a href="tel:+923246983182">
            <div className="bg-primary flex gap-2 items-center p-5 rounded cursor-pointer transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500">
              <i className="ri-phone-fill text-4xl text-pink"></i>
              <span className="flex flex-col gap-1">
                <p className=" font-bold ">Call Me</p>

                <p className="text-sm text-white/70">+92 324 698 3182</p>
              </span>
            </div>
          </a>
          <div className="bg-primary flex gap-2 items-center p-5 rounded cursor-pointer transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500">
            <i className="ri-map-pin-line text-4xl text-pink"></i>
            <span className="flex flex-col gap-1">
              <p className=" font-bold ">Find Me</p>
              <p className="text-sm text-white/70">
                Johar Town Lahore , Pakistan
              </p>
            </span>
          </div>
          <a href="mailto:ahmedmughal3182@gmail.com">
            <div className="bg-primary flex gap-2 items-center p-5 rounded cursor-pointer transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500">
              <i className="ri-mail-line text-4xl text-pink"></i>
              <span className="flex flex-col gap-1">
                <p className=" font-bold ">Mail Me</p>
                <p className="text-sm text-white/70">
                  Ahmedmughal3182@gmail.com
                </p>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <span className="flex gap-3 ">
            <a className="social" href="https://facebook.com/ahmedx182">
              <i className="ri-facebook-circle-fill cursor-pointer text-xl "></i>
            </a>
            <a className="social" href="https://www.instagram.com/ahmedz182">
              <i className="ri-instagram-fill cursor-pointer text-xl"></i>
            </a>
            <a className="social" href="https://www.linkedin.com/in/ahmedz182/">
              <i className="ri-linkedin-fill cursor-pointer text-xl"></i>
            </a>
            {/* <i className="ri-twitter-x-line cursor-pointer"></i> */}
          </span>
          <p className="px-3 text-sm">Design and Craft by M.Ahmed Fayyaz</p>
          <p className="text-xs  text-white/80">
            All rights resverd &copy; 2024{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
