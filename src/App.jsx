import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IronmanTrainingPage from './components/IronmanTrainingPage'

function getCurrentPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

function App() {
  const [pathname, setPathname] = useState(getCurrentPath)

  useEffect(() => {
    console.log('%c🎨 Portfolio v1.0 | Built with React', 'color: #BF5700; font-size: 14px; font-weight: bold;')
    console.log('%cModern React architecture. Clean code.', 'color: #8b949e; font-size: 12px;')
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    document.title = pathname === '/ironman-training' ? 'Ironman 70.3 Training Plan' : 'Aniruddh Mishra | Portfolio'
  }, [pathname])

  if (pathname === '/ironman-training') {
    return <IronmanTrainingPage />
  }

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
