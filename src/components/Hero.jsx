import { useState, useEffect } from 'react'
import profile from '../data/profile.json'

function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const fullText = profile.cyclingTaglines[currentTagline]
    let timeout

    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 50)
    } else {
      timeout = setTimeout(() => {
        setTypedText('')
        setCurrentTagline((prev) => (prev + 1) % profile.cyclingTaglines.length)
      }, 1300)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentTagline])

  return (
    <section id="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-label">{profile.label}</div>
        <h1 className="hero-name">{profile.name}</h1>
        <div className="hero-tagline">
          <span className="tagline-prefix">I </span>
          <span className="cycling-text">{typedText}</span>
        </div>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#about" className="btn btn-secondary">View Work</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
