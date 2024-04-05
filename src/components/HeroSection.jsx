import React from "react";
import ahmedImg from "../assets/img/ahmedImg.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <div className="HeroSection waveyBg h-auto py-16 flex flex-row flex-wrap mt-[-30px]  items-center sm:h-auto sm:mt-0 sm:pt-10 s-md:justify-items-center  sm:justify-items-center ">
        <div
          data-aos="fade-right"
          className="  w-[60%] md:w-[62%] s-md:w-screen flex flex-col gap-3  ps-20 px-12 sm:w-scrreen sm:ps-12 ">
          <p className="px-1">Hi ✨I am,</p>
          <span className="uppercase text-6xl md:text-4xl s-md:text-4xl sm:text-2xl name ">
            <span className="space">Muhammad</span>
            <div className="mt-4 devName">
              <span className="text-pink space2 cursor-pointer  link  hover:text-white">
                Ahmed
              </span>
              &nbsp;
              <span className="space2 pt-10">Fayyaz</span>
            </div>
            <span className="typeAnimation ">I am</span>{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer.",
                1000,
                "Freelancer.",
                1000,
                "Designer.",
                1000,
              ]}
              className="typeAnimation text-lightBlue  "
              wrapper="span"
              speed={30}
              style={{ fontSize: "0.45em", fontWeight: 700 }}
              repeat={Infinity}
            />
          </span>
        </div>
        <div
          data-aos="fade-left"
          className=" w-[40%]  s-md:mx-20	 s-md:w-screen md:w-[35%] mt-[-20px] sm:mt-0 s-md:mt-0  drop-shadow-[0_5px_5px_#222222] sm:w-screen items-center  justify-items-center">
          <img className="devImg sm:h-84 " src={ahmedImg} alt="devPic" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
