import React from 'react';
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import Explore from '../assets/explore-unscreen.gif'


const Card = ({ title, description, date, image }) => {
  return (
    <div className="max-w-md mx-auto bg-[#0a192f] border rounded-xl shadow-xl md:max-w-2xl relative overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform hover:scale-110"
            src={image}
            alt="Project"
            style={{ objectFit: 'cover', height: '100%' }}

          />
          <div className="absolute inset-0 bg-[#a9e2f3] opacity-0 hover:opacity-100 transition duration-700 ease-in-out flex flex-col items-center justify-center">
            <div>
              <img src={Explore} alt="explore gif" />
            </div>
            <button className="bg-[#7dcbae] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-700 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#febc59] font-bold">
            {title}
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
             <MdOutlineAssignmentTurnedIn size={30} className='pr-2 text-[#a9e2f3]' />
              <p className="text-[#a9e2f3]">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
