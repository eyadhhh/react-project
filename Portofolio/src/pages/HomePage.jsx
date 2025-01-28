import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import MainFooter from '../components/MainFooter'
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Projects ShowAll={false} ShownNumber={3} />
      <Skills />
      <ContactMe />
      <MainFooter />
    </div>
  )
}

export default HomePage
