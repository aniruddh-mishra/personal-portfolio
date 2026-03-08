import experienceData from '../data/experience.json'

function Experience() {
  const experiences = experienceData

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label">02 / Experience</div>
        <h2 className="section-title">Professional Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                {exp.description && <p>{exp.description}</p>}
                {exp.bullets && (
                  <ul>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
