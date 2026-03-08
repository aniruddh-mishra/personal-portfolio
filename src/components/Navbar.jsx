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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>AM</a>
        <div
          className={`nav-backdrop ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div id="mobile-nav-links" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#publications" onClick={handleLinkClick}>Publications</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
        <button
          type="button"
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
