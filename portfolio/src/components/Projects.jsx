// import React, {useState} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';

import React, {useState} from "react";
import Chatbot from "../assets/chatbot.jpg"
import Hostel from '../assets/hostel.jpg'
import Car from '../assets/car.jpg'

import Card from "./Card";
const CARDS = 10;
const MAX_VISIBILITY = 3;


const Projects = ({children}) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);
  
  return (
    <div name="about" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#febc59]">
              My Projects
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
                Practice Interview Voice Based Chatbot
              </p>
            </div>
            <div>
            <Card
        title="Project Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="April 22, 2024"
        image={Chatbot}
      />
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-4 ">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
                Hostel Management System
              </p>
            </div>
            <div>
            <Card
        title="Project Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="April 22, 2024"
        image={Hostel}
      />
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-4">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
                Car recognition System
              </p>
            </div>
            <div>
            <Card
        title="Project Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="April 22, 2024"
        image={Car}
      />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects