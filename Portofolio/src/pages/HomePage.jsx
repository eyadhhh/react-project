import React from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import HeroSection from '../components/HeroSection'
import ContactInformation from '../components/ContactInformation'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <ContactInformation />
    </div>
  )
}

export default HomePage
