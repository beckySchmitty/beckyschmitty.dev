import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>about()</h2>
      <div className="about-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title mono">becky@dev ~ </span>
          </div>
          <div className="terminal-body mono">
            <p><span className="prompt">$</span> cat about.txt</p>
            <p className="output">
              Coming soon: details on this passionate developer who loves to build and break things...
            </p>
            <p className="cursor-line"><span className="prompt">$</span> <span className="cursor">█</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
