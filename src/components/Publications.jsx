import publicationsData from '../data/publications.json'

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-label">04 / Publications</div>
        <h2 className="section-title">Research & Writing</h2>
        {publicationsData.map((pub, index) => (
          pub.url ? (
            <a 
              key={index} 
              href={pub.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="publication-card"
            >
              <h3>"{pub.title}"</h3>
              <p className="pub-venue">{pub.venue}</p>
              <p className="pub-date">{pub.date}</p>
              <p className="pub-description">{pub.description}</p>
            </a>
          ) : (
            <div key={index} className="publication-card">
              <h3>"{pub.title}"</h3>
              <p className="pub-venue">{pub.venue}</p>
              <p className="pub-date">{pub.date}</p>
              <p className="pub-description">{pub.description}</p>
            </div>
          )
        ))}
      </div>
    </section>
  )
}

export default Publications
