import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-6 font-serif italic">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            Rakshya Gharti Magar
          </h1>

          <p className="text-sm mt-2 max-w-md">
            Full Stack MERN Developer passionate about building modern, responsive,
            and user-friendly web applications.
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-5 text-xl">
          <a href="https://www.facebook.com/rakshya.mgr12"><FaFacebook /></a>
          <a href="https://instagram.com/ra_kshyaa/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/rakshya-gharti-magar-9a2a68348/"><FaLinkedin /></a>
          <a href="https://github.com/rakshyamgr07/"><FaGithub /></a>
        </div>

        {/* Right */}
        <div className="text-sm text-center">
          © All Rights Reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer