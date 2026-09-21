import React from 'react'
import { FaGraduationCap, FaSchool } from "react-icons/fa";
function Education() {
    return (
        <div className='bg-blue-30 mt-15 '>
            <div className='border border-gray-200'></div>
            {/* main div  */}
            <div className='flex flex-col m-7 p-8 gap-10'>

                {/* top div  */}
                <div className='gap-4'>
                    <span className='text-sm font-bold text-blue-500'>BACKGROUND</span>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide'>Education</h1>
                </div>

                {/* second div  */}
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 '>

                    {/* first div  */}
                    <div className='border border-blue-200 rounded-lg p-4 flex flex-row gap-5 items-center justify-center hover:border-blue-400 transition duration-300 hover:scale-105'>
                        <div className='text-3xl bg-blue-100 rounded-sm p-2 text-blue-500 '>
                            <FaGraduationCap />
                        </div>
                        <div className='flex-col '>
                            <p className='text-blue-500 text-xs font-bold'>2024-Present</p>
                            <p className='font-bold tracking-wide text-xl'>Bachelor of Engineering in Information Technology</p>
                            <p className='text-sm'>Pokhara University, Everest Engineering College</p>
                        </div>
                    </div>

                    {/* second div  */}
                    <div className='border border-blue-200 rounded-lg p-4 flex flex-row gap-4 items-center justify-center hover:border-blue-400 transition duration-300 hover:scale-105'>
                        <div className='text-3xl bg-blue-100 rounded-sm p-2 text-blue-500 '>
                            <FaSchool />
                        </div>
                        <div className='flex-col '>
                            <p className='text-blue-500 text-xs font-bold'>2079-2080</p>
                            <p className='font-bold tracking-wide text-xl'>+2 Science</p>
                            <p className='text-sm'>Kalika Manavgyan Secondary School, Butwal, Rupandehi</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='border border-gray-200'></div>

        </div>
    )
}

export default Education
