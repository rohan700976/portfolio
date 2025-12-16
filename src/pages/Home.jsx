import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Footer from '../component/Footer'

function Home() {
  return (
   <>
       <Navbar/>
       <Hero/>

       <section id="about">
        <About/>
       </section>

       <section id="skills">

       <Skills/>
       </section>

       <section id="project">

       <Projects/>

       </section>

       <section id="experience">

       <Experience/>

       </section>

       <Footer/>
   </>
  )
}

export default Home