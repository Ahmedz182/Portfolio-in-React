import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="bg-primary py-10">
        <p className="text-3xl hire font-bold tracking-wide text-center leading-relaxed">
          <mark>About Me</mark>
        </p>
        <div>
          <div className="flex px-10 gap-4 items-center justify-around py-5 sm:flex-col s-md:flex-col sm:gap-8 s-md:gap-8">
            <div>
              <img
                className="admin-img"
                src="https://res.cloudinary.com/dgjwycw2u/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1708247942/dev_dfh3yt.jpg?_s=public-apps"
                alt="devImg"
              />
            </div>
            <div className="w-3/5 flex flex-col gap-4 text-sm sm:w-full s-md:w-full">
              <p>
                Salam! I'm Muhammad Ahmed Fayyaz, a dynamic and driven web
                developer on a mission to craft extraordinary digital solutions.
                With a fervent passion for web development, I thrive on turning
                innovative ideas into reality. My journey is fueled by a
                relentless dedication to learning, ensuring that I stay at the
                forefront of the ever-evolving world of technology. Join me in
                exploring the boundless possibilities of web development as we
                embark on a journey to create truly remarkable solutions
                together.
              </p>
              <p>
                Let's push the boundaries of creativity and functionality, as I
                strive to make a lasting impact in the digital landscape. Join
                me on this exciting adventure, where every line of code tells a
                story of innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
