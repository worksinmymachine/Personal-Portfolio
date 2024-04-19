import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logoSD.png'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="SD logo" style={{width:'50px'}}/>
        </div>
        {/*menu*/}
        <div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/*hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
           { !nav?<FaBars/>:<FaTimes/>}           
        </div>
        {/**Mobile Menu */}
        <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About Me</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* *Social Media Icons */}
        <div className='hidden lg:flex fixed top-[35vh] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center text-gray-300  text-xl'
                href='https://www.linkedin.com/in/siddhant-dharmatti-98b239193/'>Linkedin <FaLinkedin style={{marginLeft:'10px'}} size={30}/></a></li>
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                <a className='flex justify-between items-center text-gray-300  text-xl'
                href='https://github.com/worksinmymachine'>Github <FaGithub style={{marginLeft:'30px'}} size={30}/></a></li>
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                <a className='flex justify-between items-center text-gray-300  text-xl'
                href='siddhantdharmatti2210@gmail.com'>MailTo: <HiOutlineMail style={{marginLeft:'30px'}} size={30}/></a></li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500'>
                <a className='flex justify-between items-center text-gray-300  text-xl'
                href='/'>Resume <BsFillPersonLinesFill style={{marginLeft:'20px'}} size={30}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
