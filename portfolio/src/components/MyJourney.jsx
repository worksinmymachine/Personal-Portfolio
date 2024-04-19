import React from 'react'

const MyJourney = () => {
    return (
        <div name="MyJourney" className="w-full h-screen bg-[#0a192f] text-gray-300">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-[#febc59]">
                  My Journey
                </p>
              </div>
              <div></div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className=" text-4xl font-bold  ">
                  <p>
                    Education
                  </p>
                </div>
                <div className=" text-4xl font-bold  ">
                  <p>
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
      );
}

export default MyJourney
