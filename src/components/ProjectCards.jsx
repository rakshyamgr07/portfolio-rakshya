import React from 'react'

function ProjectCards(props) {/*props ley data pass garxa parent componenets to child componenets ma*/
  return (
    <div className='bg-gray-300 p-4 font-serif  flex flex-col border m-2 p-4 w-60 rounded-sm shadow-gray-900/30 flex flex-col gap-2 justify-center items-center m-2 p-2'>
      <img src={props.image} alt="" className="w-64 h-48 object-cover rounded-sm " />
      <h1 className='text-capitalize font-bold text-center'>{props.title}</h1>
      <p className=' text-sm text-wrap text-center'>{props.desc}</p>
      <div className='flex justify-center'>
        <a href={props.url}>
        <button className='text-white bg-green-900 rounded-sm mt-1 p-2 text-capitalize align-center min-h-10 transition duration-300 hover:scale-105 hover:bg-green-700'>View Project</button>
      </a>
      </div>
    </div>
  )
}

export default ProjectCards
