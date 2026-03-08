import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function TerminalDemo({ projectId, script, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const [output, setOutput] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const outputRef = useRef(null)
  const timeoutsRef = useRef([])

  useEffect(() => {
    // Cleanup timeouts on unmount
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
      timeoutsRef.current = []
    }
  }, [])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeTerminal()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const runAnimation = () => {
    if (isRunning) return
    
    setIsRunning(true)
    setOutput([])
    
    let cumulativeDelay = 0
    
    script.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setOutput(prev => [...prev, line])
        
        if (index === script.length - 1) {
          setIsRunning(false)
        }
      }, cumulativeDelay)
      
      timeoutsRef.current.push(timeout)
      cumulativeDelay += line.delay
    })
  }

  const closeTerminal = () => {
    setIsOpen(false)
    setOutput([])
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    timeoutsRef.current = []
    setIsRunning(false)
  }

  const openTerminal = () => {
    setIsOpen(true)
    setTimeout(runAnimation, 100)
  }

  const handleToggle = () => {
    if (!isOpen) {
      openTerminal()
    } else {
      closeTerminal()
    }
  }

  return (
    <>
      <button 
        className={`terminal-toggle ${isOpen ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <span className="toggle-icon">{isOpen ? '■' : '▶'}</span> 
        {isOpen ? 'Close' : 'Run Demo'}
      </button>
      
      {isOpen && createPortal(
        <div className="terminal-modal-overlay" onClick={closeTerminal}>
          <div className="terminal-container terminal-modal" onClick={(event) => event.stopPropagation()}>
            <div className="terminal-header">
              <div className="terminal-buttons">
                <button
                  type="button"
                  className="terminal-btn red"
                  aria-label="Close terminal"
                  onClick={closeTerminal}
                ></button>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <div className="terminal-title">{title}</div>
            </div>
            <div className="terminal-body" ref={outputRef}>
              <div className="terminal-output">
                {output.map((line, index) => (
                  <span key={index} className={line.className}>
                    {line.text}
                  </span>
                ))}
              </div>
              {isRunning && <div className="terminal-cursor"></div>}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default TerminalDemo
