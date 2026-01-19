import './Hero.css'
import constructionImg from '../assets/under-construction.png'

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting mono">
            <span className="comment">{'// '}</span>Hello, world!
          </p>
          <h1>
            I'm <span className="text-gradient">Becky Schmitthenner</span>
          </h1>
          <p className="hero-tagline">
          Lead QA Engineer for a crypto security company by day, full-stack app builder by night. Shipping fast, breaking nothing.
          </p>
          <div className="hero-status">
            <span className="status-indicator"></span>
            <span className="mono">portfolio.status = "building..."</span>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img 
            src={constructionImg} 
            alt="Under Construction" 
            className="hero-image glow"
          />
        </div>
      </div>
      
      <nav className="hero-nav">
        <a href="#about" className="nav-link mono">about()</a>
        <a href="#projects" className="nav-link mono">projects()</a>
        <a href="#contact" className="nav-link mono">contact()</a>
      </nav>
      
      <div className="scroll-indicator">
        <span className="mono">scroll</span>
        <div className="scroll-line"></div>
      </div>
    </header>
  )
}

export default Hero
