import React from 'react'
import SkillCloud from './SkillCloud';

const Technologies = () => {
    return (
        <div name="technologies" className="w-full h-screen bg-[#0a192f] text-gray-300">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-[#febc59]">
                  Skills
                </p>
              </div>
              <div></div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold  ">
                  <p>
                    Here are some technologies I have worked with !
                  </p>
                </div>
                <div className='h-30 w-50 mb-40'>
                    <SkillCloud/>
                </div>
              </div>
            </div>
          </div>
      );
}

export default Technologies
