import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { project } from '../constants/project'

function Projects() {
  return (
    <>
    <h1 className='text-green-400 font-bold text-3xl uppercase text-center'>Projects</h1>
    <div className='flex flex-row gap-4 flex-wrap m-2'>
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
