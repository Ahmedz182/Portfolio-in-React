import React from "react";
import rocket from "../assets/img/rocket.png";
import ui from "../assets/img/ui.png";
import ux from "../assets/img/ux.png";
import CV from "../assets/AhmedCv.pdf";

const HireMe = () => {
  return (
    <>
      <div className="bg-primary flex flex-wrap p-10 gap-24 items-center justify-center py-20">
        <div className="w-[45%] flex flex-col gap-6 sm:w-[95%] s-md:w-screen">
          <div className="skill cursor-pointer  rounded-2xl outline outline-1 outline-white/35 bg-darkPrimary flex gap-5 p-5 items-center transition ease-in-out delay-150 hover:translate-y-[-10px] duration-300 shadow-lg shadow-darkBlue/5">
            <span className="bg-darkBlue  p-3 rounded-xl">
              <img className="w-5" src={rocket} alt="rocket" />
            </span>
            <span className="flex flex-col gap-1">
              <p className="uppercase  font-medium tracking-wide">
                Product Design
              </p>
              <p className="text-sm text-white/55">
                Create Digital Products with unique ideas.
              </p>
            </span>
          </div>
          <div className="skill cursor-pointer rounded-2xl outline outline-1 outline-white/35 bg-darkPrimary flex gap-5 p-5 items-center transition ease-in-out delay-150 hover:translate-y-[-10px] duration-300 shadow-lg shadow-lightBlue/5">
            <span className="bg-darkBlue  p-3 rounded-xl">
              <img className="w-5" src={ui} alt="rocket" />
            </span>
            <span className="flex flex-col gap-1">
              <p className="uppercase  font-medium tracking-wide">
                Responsive UI
              </p>
              <p className="text-sm text-white/55">
                Smooth and Responsive pages.
              </p>
            </span>
          </div>
          <div className="skill cursor-pointer rounded-2xl outline outline-1 outline-white/35 bg-darkPrimary flex gap-3 p-5 items-center transition ease-in-out delay-150 hover:translate-y-[-10px] duration-300 shadow-lg shadow-lightBlue/5">
            <span className="bg-darkBlue  p-3 rounded-xl">
              <img className="w-5" src={ux} alt="rocket" />
            </span>
            <span className="flex flex-col gap-1">
              <p className="uppercase  font-medium tracking-wide">
                UI / UX Experience
              </p>
              <p className="text-sm text-white/55">Amazing Ux/Ui Experience.</p>
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-[42%] sm:w-[90%] s-md:w-[90%] items-center">
          <p className="text-3xl hire font-bold text-lightBlue/85 space2 uppercase pt-7 first-letter:text-pink sm:pt-1 s-md:pt-2">
            Why Hire Me for your Next Project ?
          </p>
          <p className="  text-white/70 leading-relaxed">
            Let's push the boundaries of creativity and functionality, as I
            strive to make a lasting impact in the digital landscape. Join me on
            this exciting adventure, where every line of code tells a story of
            innovation and excellence.
          </p>
          <a href={CV} download={CV}>
            <button className="btn rounded-full mt-3 bg-pink w-[170px] p-4 text-sm  shadow-xl shadow-pink/50 mx-40 transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500">
              Download My CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HireMe;
