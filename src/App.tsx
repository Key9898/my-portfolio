// import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Capabilities />
      <Projects />
      <About />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  )
}
export default App