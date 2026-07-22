import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <div className='bg-gray-500  flex flex-col-reverse md:flex-row items-center justify-between min-h-screen md:h-100vh  px-6 '>
      {/* left contents  */}
      <div className='text-center p-4 '>
        <h1 className='text-green-500 font-bold text-2xl uppercase'>Rakshya Gharti Magar</h1>
        <h2 className='text-green-500 font-bold text-xl '>Frontend Developer</h2>
        <p className='text-gray-300 font-12'>I am a frontend developer from Nepal. I design and build highly scalable and responsive web application using html,css,js and react.</p>


        <div className='flex gap-2 p-4 justify-center text-gray-400'>
          <a href="/CV.pdf" download="RAKSHYA_CURRICULUM_VITAE.pdf">
          <button className='bg-green-400 text-white  p-2 m-1 rounded-sm' >Download CV</button></a>
          
          <button className='bg-green-400 text-white p-2 m-1 rounded-sm'>Contact Us</button>

        </div>

        {/* social contact  */}
        <p className='font-18 p-2 text-white'>connect with us</p>
        <div className="flex gap-4 justify-center text-white">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://tiktok.com"><FaTiktok /></a>
          <a href="https://github.com"><FaGithub /></a>
        </div>

      </div>

      {/* right containers */}
      <div className='p-4 m-2'>
        <img src="/me.png" alt="" className='w-40 h-40 md:w-64 md:h-64 rounded-full object-cover '></img>
      </div>
    </div>
  )
}

export default Hero
