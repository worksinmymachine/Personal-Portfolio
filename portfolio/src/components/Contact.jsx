import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center pt-32 p-4'>
        <form method='POST' action="https://getform.io/f/pbqgljkb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#febc59] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email" placeholder='Email' name="email" id="" />
            <textarea className='bg-[#ccd6f6] p-2 rounded' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ccd6f6] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
      
    </div>
  )
}

export default Contact
