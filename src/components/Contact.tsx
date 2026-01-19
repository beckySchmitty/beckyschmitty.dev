import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>contact()</h2>
      <div className="contact-content">
        <p className="contact-intro">
          Want to work together or just say hi? My inbox is open.
        </p>
        
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-label mono">email:</span>
            <span className="contact-value placeholder-text">coming@soon.dev</span>
          </div>
          <div className="contact-item">
            <span className="contact-label mono">github:</span>
            <span className="contact-value placeholder-text">github.com/...</span>
          </div>
          <div className="contact-item">
            <span className="contact-label mono">linkedin:</span>
            <span className="contact-value placeholder-text">linkedin.com/in/...</span>
          </div>
        </div>
        
        <div className="contact-cta">
          <button className="cta-button mono" disabled>
            {'sendMessage() // coming soon'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
