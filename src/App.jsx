import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    console.log('%c🎨 Portfolio v1.0 | Built with React', 'color: #BF5700; font-size: 14px; font-weight: bold;')
    console.log('%cModern React architecture. Clean code.', 'color: #8b949e; font-size: 12px;')
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
