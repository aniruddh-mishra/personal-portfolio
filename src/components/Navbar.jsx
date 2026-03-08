import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>AM</a>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#publications" onClick={handleLinkClick}>Publications</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
        <div 
          className="nav-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
