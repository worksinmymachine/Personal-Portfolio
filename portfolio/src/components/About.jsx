import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#febc59]">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
                Hi. I'm Siddhant,nice to meet you. Please take a look around
              </p>
            </div>
            <div>
            <p>

              I'm a full-stack developer dedicated to crafting sleek, efficient
              web solutions. With expertise in front-end and back-end
              technologies, I thrive on creating seamless user experiences and
              robust server-side architectures. Let's build something amazing
              together! Passionate about problem-solving and continuous
              learning, I'm always eager to tackle new challenges and stay ahead
              of the curve in the dynamic world of technology.
            </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
