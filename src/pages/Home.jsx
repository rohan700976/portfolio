import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'

function Home() {
  return (
   <>
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Experience/>
   </>
  )
}

export default Home