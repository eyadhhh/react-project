import React from 'react'
import HeroSection from '../components/HeroSection'
import ContactMe from '../components/ContactMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  )
}

export default HomePage
