import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>projects()</h2>
      <div className="projects-grid">
        <div className="project-card placeholder">
          <div className="project-icon">🚀</div>
          <h3>Project Alpha</h3>
          <p className="mono">status: "in_development"</p>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
          </div>
        </div>
        
        <div className="project-card placeholder">
          <div className="project-icon">⚡</div>
          <h3>Project Beta</h3>
          <p className="mono">status: "planning"</p>
          <div className="project-tags">
            <span className="tag">Node.js</span>
            <span className="tag">GraphQL</span>
          </div>
        </div>
        
        <div className="project-card placeholder">
          <div className="project-icon">🎨</div>
          <h3>Project Gamma</h3>
          <p className="mono">status: "dreaming"</p>
          <div className="project-tags">
            <span className="tag">Creative</span>
            <span className="tag">TBD</span>
          </div>
        </div>
      </div>
      
      <p className="projects-note mono">
        {'/* Real projects coming soon... */'}
      </p>
    </section>
  )
}

export default Projects
