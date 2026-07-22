import React from 'react'

function ProjectCards(props) {/*props ley data pass garxa parent componenets to child componenets ma*/
  return (
    <div className='flex flex-col border border-gray-500 m-2 p-4 w-60'>
      <img src={props.image} alt="" className="w-64 h-48 object-cover " />
      <h1 className='uppercase font-bold text-center'>{props.title}</h1>
      <p className=' text-sm text-wrap'>{props.desc}</p>
      <div className='flex justify-center'>
        <a href={props.url}>
        <button className='text-white bg-green-400 rounded-sm mt-1 p-2 text-capitalize align-center min-h-10 transition duration-300 hover:scale-105'>View Project</button>
      </a>
      </div>
    </div>
  )
}

export default ProjectCards
