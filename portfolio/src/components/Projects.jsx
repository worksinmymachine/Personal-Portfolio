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
    <div name="projects" className="w-full h-full bg-[#0a192f] text-gray-300">
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
        title="Practice Interview Voice Based Chatbot"
        description="Developed a voice based chatbot for interview practice,integrating voice and text inputs ,sentiment analysis and answer scoring. "
        date="April , 2022"
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
        title="Hostel Management System"
        description="Developed a Hostel management system to streamline various administrative tasks and enhance the overall hostel experience."
        date="May , 2021"
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
        title="Car recognition System"
        description="Developed a car recognition system using OpenCV and Haar Cascade classifiers for accurate detection and
        classification of cars in real-time videos and images."
        date="May, 2021"
        image={Car}
      />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects