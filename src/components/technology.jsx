// Technology.js
import React from "react";
import tech from "../assets/tech.js";
const Technology = () => {
  return (
    <div>
      <div className="bg-darkPrimary slider">
        <div className="flex flex-wrap p-4 py-10 items-center gap-16 justify-center cursor-pointer slide-track ">
          {tech.map(({ img }) => (
            <img
              className="w-20 slide transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500"
              src={img}
              alt="Tech Logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
