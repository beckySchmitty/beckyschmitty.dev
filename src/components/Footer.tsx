import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="mono">
          <span className="comment">{'// '}</span>
          Built with React + TypeScript + ☕
        </p>
        <p className="copyright">
          © {currentYear} Becky Schmitthenner
        </p>
      </div>
    </footer>
  )
}

export default Footer
