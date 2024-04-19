import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#febc59]">Hi , my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#7dcbae]">Siddhant Dharmatti</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a9e2f3]">I am a full-stack developer.</h2>
        <p className="text-[#fff2e1]">
          Experienced IT professional with a strong background in software
          development ,project engineering, and creative problem-solving. Adept
          at leveraging technology to drive results and enhance user
          experiences. Experienced in collaborating across teams to deliver
          solutions and optimize processes. Committed to continuous learning and
          innovation in the ever-evolving tech landscape
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#245a82] hover:border-[#febc59]">View Work 
          <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-2"/>
          </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
