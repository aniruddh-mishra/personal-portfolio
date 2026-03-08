import { useState, useEffect } from 'react'
import profile from '../data/profile.json'

function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % profile.cyclingTaglines.length)
        setIsTransitioning(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-label">{profile.label}</div>
        <h1 className="hero-name">{profile.name}</h1>
        <div className="hero-tagline">
          <span className="tagline-prefix">I </span>
          <span 
            className="cycling-text"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}
          >
            {profile.cyclingTaglines[currentTagline]}
          </span>
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
