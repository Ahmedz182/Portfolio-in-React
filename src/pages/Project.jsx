import React from "react";
import project from "../assets/demoProject.js";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-primary waveyBg flex flex-col items-center justify-center py-10">
        <p className="text-3xl hire font-bold tracking-wide text-center leading-relaxed">
          All Creative Work, <br />
          Selected
          <mark> Projetcs</mark>
        </p>

        <div className="flex flex-wrap px-5 py-10 gap-6 items-center justify-center">
          {project.map(({ title, img, category, tech, preview }) => {
            return (
              <div>
                <div className="rounded transition ease-in-out delay-150 hover:translate-y-[-10px] duration-500 relative">
                  <img
                    className="rounded-md w-80 cursor-pointer"
                    src={img}
                    alt="project"
                  />
                  <div
                    onClick={() => {
                      window.open(preview, "_blank");
                    }}
                    className="backdrop-blur-md cursor-pointer rounded-md flex justify-center items-center  bg-primary/60 p-3  absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                    <div className="flex  flex-col justify-center items-center ">
                      <p className="uppercase leading-relaxed  text-xl text-center font-black space2 text-white">
                        {title}
                      </p>
                      <p className="text-pink/90 font-semibold">{category}</p>
                      <span className="text-white font-medium">
                        Build in :{" "}
                        <span className="text-pink/90 font-bold">{tech}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
