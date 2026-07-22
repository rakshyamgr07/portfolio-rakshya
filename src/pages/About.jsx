import React from 'react'

function About() {
  return (
    <div className='max-w-5xl mx-auto flex flex-col gap-6 items-center px-4 py-8 '>
      <h1 className='text-green-400 font-bold text-3xl md:text-4xl lg:text-5xl text-center'>About Me</h1>

      <p className='text-center text-gray-600 text-base md:text-lg max-w-3xl'>Hello, I am Rakshya Gharti Magar, a passionate frontend developer from Nepal. I enjoy building responsive and user friendly web applications.</p>
      <p className='text-center text-gray-600 text-base md:text-lg max-w-3xl'>I love learning new technologies, solving problems and creating modern websites that provides great user experiences.</p>

      <div className='border border-gray-400 rounded-lg w-full max-w-4xl p-6 text-center uppercase rounded-sm  text-center' >
        <h3 className='text-green-400 font-bold p-2 text-lg'>My frontend knowledge and skills</h3>

        <ul className='flex flex-col flex-wrap gap-4'>

          <div className='flex flex-col md:flex-row gap-4 '>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'>Html </li>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'> css </li>
          </div>

          <div className='flex flex-col md:flex-row gap-4  '>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'> javascript</li>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'>  React js</li>
          </div>

          <div className='flex flex-col md:flex-row gap-4 '>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'>tailwind css</li>
            <li className='bg-gray-300 rounded-md p-3 w-full md:w-1/2 text-center'>git and github</li>

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
