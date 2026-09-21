import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-500 text-slate-900 font-serif ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-start md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-left md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Rakshya Gharti Magar
          </h1>

          <p className="text-sm mt-2 max-w-md">
            Full Stack MERN Developer passionate about building modern, responsive,
            and user-friendly web applications.
          </p>
        </div>


        {/* center */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold hover:underline active:scale-95 '>Quick Link</h1>
          <div className='flex flex-col gap-2 '>
            <a href="/" className='hover:underline active:scale-95'>Home</a>
            <a href="#about" className='hover:underline active:scale-95'>About</a>
            <a href="#projects" className='hover:underline active:scale-95'>Projects</a>
            <a href="#contact" className='hover:underline active:scale-95'>Contact</a>
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col gap-4'>
          <p>Connect with me</p>
          <div className="flex gap-5 text-xl">
            <a href="https://www.facebook.com/rakshya.mgr12"><FaFacebook /></a>
            <a href="https://instagram.com/ra_kshyaa/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/rakshya-gharti-magar-9a2a68348/"><FaLinkedin /></a>
            <a href="https://github.com/rakshyamgr07/"><FaGithub /></a>
          </div>
        </div>

        
      </div>

       {/* bottom */}
      <div className='border border-gray-400'></div>
      <div className="text-sm text-center py-3 mb-2">
        © All Rights Reserved
      </div>

    </footer>
  )
}

export default Footer