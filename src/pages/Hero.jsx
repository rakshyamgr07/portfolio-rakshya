import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <div className="min-h-screen pt-14 flex flex-col-reverse md:flex-row items-center justify-center gap-6 p-4 bg-gray-500">

      {/* left conatiner */}
       <div className=" text-center items-center p-4">{/*flex flex-col gap-2 items-center w-full md:w-1/2 text-center md:text-left p-4 */}
        <h1 className='text-green-500 font-bold text-2xl uppercase'>Rakshya Gharti Magar</h1>
        <h2 className='text-green-500 font-bold text-xl '>Frontend Developer</h2>
        <p className='text-gray-300 font-12 '>I am a frontend developer from Nepal. I design and build highly scalable and responsive web application using html,css,js and react.</p>


        <div className="flex gap-2 p-4 justify-center text-gray-400">{/*flex md:flex-row  gap-2 justify-center w-full md:w-1/2 text-center md:text-left */}
          <a href="/CV.pdf" download="RAKSHYA_CURRICULUM_VITAE.pdf">
            <button className='bg-green-400 text-white p-2 m-1 rounded-sm ' >Download CV</button></a>
          <button className='bg-green-400 text-white p-2 m-1 rounded-sm'>Hire Me</button>
        </div>
        {/* social contact */}
        <p className='font-18 p-2 text-white'>connect with us</p>
        <div className="flex gap-4 justify-center text-white">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://tiktok.com"><FaTiktok /></a>
          <a href="https://github.com"><FaGithub /></a>
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
