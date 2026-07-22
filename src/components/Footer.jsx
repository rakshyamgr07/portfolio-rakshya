import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            Rakshya Gharti Magar
          </h1>

          <p className="text-sm mt-2 max-w-md">
            I design and build highly scalable web applications using
            React and Tailwind CSS.
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-5 text-xl">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://tiktok.com"><FaTiktok /></a>
          <a href="https://github.com"><FaGithub /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
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