import React from 'react'

function ProjectCards(props) {/*props ley data pass garxa parent componenets to child componenets ma*/
  return (
    <div className='  font-serif  flex flex-col  w-100 rounded-sm shadow-xl/10 flex flex-col gap-2 justify-center items-center m-8 p-3 
    transition hover:shadow-xl/30 hover:scale-105 border'>
      <img src={props.image} alt="" className="w-full h-60 p-2 rounded-xl object-cover " />
      <h1 className='text-capitalize font-bold text-center'>{props.title}</h1>
      <p className=' text-sm text-wrap text-center'>{props.desc}</p>
      <div className='flex justify-center'>
        <a href={props.url}>
        <button className='text-white bg-blue-900 rounded-sm mt-1 p-2 text-capitalize align-center min-h-10 transition duration-300 hover:scale-105 hover:bg-blue-700'>View Project</button>
      </a>
      </div>
    </div>
  )
}

export default ProjectCards
