import React from 'react'
import Timeline from './Timeline'


const Work = () => {
  const events=[
    {
      header:"Tata Consultancy Services",
      body:"Product Engineer,July 2022 - Present",
      footer:"Mainly tasked with the development and upkeep of widgets within the UI library, alongside managing various APIs essential for the product ",
      direction:"left"
    },
    {
      header:"Persistent Sytems",
      body:"Mentee, July 2019-Feb-2020",
      footer:"Spearheaded the development of a COVID-19 data visualization portal leveraging HTML, CSS, Bootstrap, and JavaScript",
      direction:"right"
    }
  ]
  return (
    <div name="work" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#febc59]">
              Work
            </p>
          </div>
          <div></div>
          </div>
          
          
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold  ">
              <p>
              My professional experience -
              </p>
            </div>
            <div className='h-30 w-30'>
                <Timeline events={events}/>
            </div>
          </div>
          
         
          
        </div>
      </div>
  );
}

export default Work
