import React from 'react';
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";


const Card = ({ title, description, date, image }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl relative overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform hover:scale-110"
            src={image}
            alt="Project"
            style={{ objectFit: 'cover', height: '100%' }}

          />
          <div className="absolute inset-0 bg-[#a9e2f3] opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
            <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Explore More
            </button>
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
             <MdOutlineAssignmentTurnedIn size={30} className='pr-2 text-black' />
              <p className="text-gray-700">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
