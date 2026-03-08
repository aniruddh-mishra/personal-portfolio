import profile from '../data/profile.json'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label">01 / About</div>
        <h2 className="section-title">Building at the intersection of hardware and software</h2>
        <div className="about-content">
          <div className="about-text">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-education">
            <h3>Education</h3>
            {profile.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-date">{edu.date}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
              </div>
            ))}
            <div className="education-item">
              <h4>Honors & Awards</h4>
              <ul className="honors-list">
                {profile.honors.map((honor, index) => (
                  <li key={index}>{honor}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
