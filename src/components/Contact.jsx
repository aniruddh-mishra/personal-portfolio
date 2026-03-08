import profile from '../data/profile.json'

function Contact() {
  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  )

  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
    </svg>
  )

  const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-1.025-.013-1.862-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"></path>
    </svg>
  )

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.802c2.67 0 2.987.01 4.041.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.123C19.773 2.242 17.755.228 14.123.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path>
    </svg>
  )

  const ResumeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="12" y1="18" x2="12" y2="12"></line>
      <polyline points="9 15 12 18 15 15"></polyline>
    </svg>
  )

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-label">06 / Contact</div>
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm currently seeking physical design engineering roles for Summer 2026. 
            Feel free to reach out about opportunities, research collaboration, or just 
            to chat about semiconductor design.
          </p>

          {profile.resume?.url ? (
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              download={profile.resume.fileName || true}
              className="contact-link resume-link"
            >
              <ResumeIcon />
              {profile.resume.label || 'Download Resume'}
            </a>
          ) : (
            <div className="contact-link resume-link disabled" aria-disabled="true">
              <ResumeIcon />
              {profile.resume?.label || 'Download Resume'}
              <span className="resume-note">(add url in profile.json)</span>
            </div>
          )}

          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <EmailIcon />
              {profile.email}
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <GitHubIcon />
              GitHub
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">
              <InstagramIcon />
              Instagram
            </a>
          </div>
          <p className="contact-location">📍 {profile.location}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
