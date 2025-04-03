import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="hero-content-container">
          <h1 className="name">
            Hey..!<span className="wave">👋</span> <span>I'm Hemanth Polavarapu..!</span> <br />
            I'm a Web Developer
          </h1>
          <p className="tag-line">
            I am a frehser with multiple talents and skills
          </p>
          <div className="hero-buttons-container">
            <a href="https://drive.google.com/file/d/1d7K86lxWCuuMhHxC-emrtteMWlH3a0Nt/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="nav-link border-btn my-btn">
              <span data-content='My Resume'>My Resume</span>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img className="profile-img" loading="lazy" src="https://res.cloudinary.com/dksfgtqwl/image/upload/v1743487925/Bazaart_2_lockck.png" alt="Profile-img" />
        </div>
      </div>
    );
  }
}

export default Hero; 