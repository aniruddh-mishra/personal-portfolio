import skillsData from '../data/skills.json'

function Skills() {
  const skillCategories = skillsData

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label">05 / Skills</div>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
