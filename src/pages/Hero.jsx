import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <div className="min-h-screen font-serif pt-14 flex flex-col-reverse md:flex-row items-center justify-center gap-6 p-4 bg-gray-300">

      {/* left conatiner */}
       <div className=" text-center items-center p-4 font-serif flex flex-col gap-4">{/*flex flex-col gap-2 items-center w-full md:w-1/2 text-center md:text-left p-4 */}
        <h1 className='text-green-900 font-bold text-2xl uppercase'>Rakshya Gharti Magar</h1>
        <h2 className='text-green-900 font-bold text-xl '> Full Stack MERN Developer</h2>
        <p className='text-gray-800 font-12 italic'>I am a Full Stack MERN Developer from Nepal with a strong interest in building responsive, scalable, and user-friendly web applications. 
          I work with MongoDB, Express.js, React, and Node.js, and have experience developing dynamic frontend interfaces, REST APIs, and database-driven applications.</p>


        <div className="flex gap-2 p-4 justify-center text-gray-400">{/*flex md:flex-row  gap-2 justify-center w-full md:w-1/2 text-center md:text-left */}
          <a href="/RAKSHYA_CV.pdf">
            <button className='bg-green-900 text-white p-2 m-1 rounded-sm transition duration-300 hover:scale-105 hover:bg-green-700' >View CV</button></a>
           {/* <a href="/contact">
          <button className='bg-green-900 text-white p-2 m-1 rounded-sm transition duration-300 hover:scale-105 hover:bg-green-700'>
           Get in Touch
          </button></a> */}
        </div>
        {/* social contact */}
        <p className='font-18 p-2 text-black italic'>Connect With Me</p>
        <div className="flex gap-4 justify-center text-black text-2xl">
          <a href="https://www.facebook.com/rakshya.mgr12"><FaFacebook /></a>
          <a href="https://instagram.com/ra_kshyaa"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/rakshya-gharti-magar-9a2a68348/"><FaLinkedin /></a>
          <a href="https://github.com/rakshyamgr07"><FaGithub /></a>
        </div>

      </div>

      {/* right containers */}
      <div className="w-full md:w-1/2 flex justify-center p-4 m-2">    
          <img src="/me.png" alt="" className='w-40 h-40 md:w-64 md:h-64 rounded-full object-cover '></img>
      </div>
    </div>
  )
}

export default Hero
