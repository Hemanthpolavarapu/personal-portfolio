import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="body skills-section contact-section" id="contact">
        <h2 className="heading">Contact</h2>
        <div className="contact-container">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hemanth-polavarapu/" className="contact-card-section" style={{"--bg-color": "#0077B5"}}>
            <div className="contact-link">
              <img src="https://res.cloudinary.com/dhrxxm585/image/upload/v1722422222/icons8-linkedin-94_a7fuxk.png" alt="LinkedIn" />
            </div>
            <div className="contact-card">
              <p>LinkedIn</p>
            </div>
          </a>
          
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/7780708172" className="contact-card-section" style={{"--bg-color": "#25D366"}}>
            <div className="contact-link">
              <img src="https://res.cloudinary.com/dhrxxm585/image/upload/v1722422222/icons8-whatsapp-94_laqt3s.png" alt="WhatsApp" />
            </div>
            <div className="contact-card">
              <p>Whatsapp</p>
            </div>
          </a>
          
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hemanthpolavarapu" className="contact-card-section" style={{"--bg-color": "#24292F"}}>
            <div className="contact-link">
              <img src="https://res.cloudinary.com/dhrxxm585/image/upload/v1722422222/icons8-github-94_h2vwpn.png" alt="GitHub" />
            </div>
            <div className="contact-card">
              <p>Github</p>
            </div>
          </a>
          
          <a target="_blank" rel="noopener noreferrer" href="mailto:hemanth3533@gmail.com" className="contact-card-section" style={{"--bg-color": "#B82C2C"}}>
            <div className="contact-link">
              <img src="https://res.cloudinary.com/dhrxxm585/image/upload/v1722422246/icons8-gmail-94_d1txxw.png" alt="Gmail" />
            </div>
            <div className="contact-card">
              <p>Gmail</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact; 