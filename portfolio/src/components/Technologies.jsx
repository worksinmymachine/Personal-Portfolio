import React from "react";
import SkillCloud from "./SkillCloud";

const Technologies = () => {
  return (
    <div
      name="technologies"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
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
            <p>Here are some technologies I have worked with !</p>
          </div>
          <div>
            <div className="m-2 space-y-2">
              <div
                className="group flex flex-col gap-2 rounded-lg border  shadow-[#040c16] shadow-xl  p-5 text-gray-300"
                tabIndex="1"
              >
                <div className="flex cursor-pointer items-center justify-between">
                  <span> Frontend Technologies </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                <div className="grid grid-cols-3 md:grid-cols-4">

                <button type="button" disabled className="mx-auto my-2 bg-[#febc59] text-white p-2 rounded  leading-none flex items-center">
      	Html
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#7dcbae] text-white p-2 rounded  leading-none flex items-center">
      	CSS
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#a9e2f3] text-white p-2 rounded  leading-none flex items-center">
      	Bootstrap
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#febc59] text-white p-2 rounded  leading-none flex items-center">
      	Javascript
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#7dcbae] text-white p-2 rounded  leading-none flex items-center">
      	Angular
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#a9e2f3] text-white p-2 rounded  leading-none flex items-center">
      	React
    </button>
    <button type="button" disabled className="mx-auto my-2 bg-[#febc59] text-white p-2 rounded  leading-none flex items-center">
      	Tailwind
    </button>
                </div>
                </div>
              </div>

              <div
                className="group flex flex-col gap-2 rounded-lg border  shadow-[#040c16] shadow-xl  p-5 text-gray-300"
                tabIndex="2"
              >
                <div className="flex cursor-pointer items-center justify-between">
                  <span> Backend Technologies </span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                  />
                </div>
                <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                <div className="grid grid-cols-3 md:grid-cols-4">

<button type="button" disabled className="mx-auto my-2 bg-[#febc59] text-white p-2 rounded  leading-none flex items-center">
Java
</button>
<button type="button" disabled className="mx-auto my-2 bg-[#7dcbae] text-white p-2 rounded  leading-none flex items-center">
Spring boot
</button>
<button type="button" disabled className="mx-auto my-2 bg-[#a9e2f3] text-white p-2 rounded  leading-none flex items-center">
Python
</button>
<button type="button" disabled className="mx-auto my-2 bg-[#febc59] text-white p-2 rounded  leading-none flex items-center">
Node
</button>

</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
