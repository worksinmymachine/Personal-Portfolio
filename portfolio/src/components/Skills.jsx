import React from 'react'
import HTMLpng from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVA from '../assets/java.png'
import JS from '../assets/javascript.png'
import ANGULAR from '../assets/angular.png'
import PYTHON from '../assets/python.png'
import TAILWIND from '../assets/tailwind.png'
import REACTLogo from '../assets/react.png'
import AI from '../assets/AI.png'

const Skills = () => {
  return (
    <div name='skills'className='bg-[#0a192f] w-full h-screen'>
        {/**container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#febc59] text-gray-300  '>Experience</p>
                <p className='py-4 text-gray-300 '>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-40 mx-auto' src={HTMLpng} alt="html" />
                    <p className='text-gray-300 pt-2'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-40 mx-auto' src={CSS} alt="CSS" />
                    <p className='text-gray-300 pt-2' >CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-40 mx-auto' src={JAVA} alt="JAVA" />
                    <p className='text-gray-300 pt-2'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-32 mx-auto pt-2' src={JS} alt="JS" />
                    <p className='text-gray-300 pt-2'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-20 mx-auto' src={ANGULAR} alt="ANGULAR" />
                    <p className='text-gray-300 pt-2'>Angular</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="PYTHON" />
                    <p className='text-gray-300 pt-2'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-20 mx-auto' src={REACTLogo} alt="REACT" />
                    <p className='text-gray-300 pt-2'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-30'>
                    <img className='w-20 h-30 mx-auto' src={AI} alt="AI" />
                    <p className='text-gray-300 pt-2'>Artificial Intelligence</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Skills
