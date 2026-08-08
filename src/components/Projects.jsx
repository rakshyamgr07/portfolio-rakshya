import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { project } from '../constants/project'

function Projects() {
  return (
    <>
    <h1 className='text-green-900 font-bold text-3xl uppercase text-center font-serif m-15 p-4'>Projects</h1>
    <div className='flex flex-row justify-center gap-4 flex-wrap m-10 '>
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
