import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { project } from '../constants/project'

function Projects() {
  return (
    <>
    <h1 className=' text-slate-800 font-bold text-3xl uppercase text-center font-serif mt-30 hover:text-blue-800 p-4'>Featured Projects</h1>
    <div className='flex flex-row justify-center gap-4 flex-wrap  w-full'>
      {
        project.map((proj)=>(
            <ProjectCards
          key = {proj.id}
          image = {proj.image}
          title = {proj.title}
          desc={proj.desc}
          url={proj.url}/>
        ))
   
      }
    </div>
    </>
  )
}

export default Projects
