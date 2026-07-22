import React from 'react'
import Students from '../components/Students'
import Hero from './Hero'
import About from './About'

import Contact from './Contact'
import Projects from '../components/projects'

function Home() {
  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* <Students/> */}
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
