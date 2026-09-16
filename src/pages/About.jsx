import React from 'react'

function About() {
  return (
    <div className='max-w-5xl mx-auto flex flex-col gap-6 items-center px-4 py-8 font-serif m-18'>
      <h1 className='text-green-900 font-bold text-3xl md:text-4xl lg:text-5xl text-center'>About Me</h1>

      <p className='text-center text-black-600 text-base md:text-lg max-w-3xl italic'>Hello, I am Rakshya Gharti Magar, a passionate Full Stack MERN Developer from Nepal.
         I enjoy building responsive, scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js.</p>
      <p className='text-center text-black-600 text-base md:text-lg max-w-3xl italic'>I love learning new technologies, solving problems, and developing modern web applications with both efficient frontends and reliable backend systems. 
        I am continuously improving my skills through hands-on projects and exploring modern full-stack development practices.</p>

      <div className='border border-gray-900 rounded-lg w-full max-w-4xl p-6 text-center uppercase rounded-sm  text-center' >
        <h3 className='text-green-900 font-bold p-2 text-lg'>My knowledge and skills</h3>

        <ul className='flex flex-col flex-wrap gap-4'>

          <div className='flex flex-col md:flex-row gap-4 items-stretch '>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>Html </li>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'> css </li>
          </div>

          <div className='flex flex-col md:flex-row gap-4 items-stretch '>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'> javascript</li>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2 h-14 flex items-center justify-center'>  React js</li>
          </div>

          <div className='flex flex-col md:flex-row gap-4 items-stretch'>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>Node.js</li>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>Express.js </li>

          </div>
           <div className='flex flex-col md:flex-row gap-4 items-stretch'>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>MongoDB </li>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>Rest APIs</li>
          </div>
          
           <div className='flex flex-col md:flex-row gap-4 items-stretch'>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>tailwind css</li>
            <li className='bg-gray-400 rounded-md p-3 w-full md:w-1/2  h-14 flex items-center justify-center'>git and github</li>

          </div>
        </ul>
        {/* <p>Html, css and javascript</p>
        <p>React js and tailwind css</p>
        <p>User interface</p> */}

      </div>
    </div>
  )
}

export default About
