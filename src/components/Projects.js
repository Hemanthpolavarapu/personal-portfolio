import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className="skills-section services-section body projects-section" id="projects">
        <h1 className="heading">Projects</h1>
        <div className="services-container projects-container">
          <a href="https://adithyanetflix.ccbp.tech/" target="_blank" rel="noopener noreferrer" className="service project left-back hide">
            <img src="https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20192535.png" alt="Netflix Clone" />
            <div className="hidden-content">
              <h2>Netflix Clone</h2>
            </div>
          </a>
          
          <a href="https://adifoodmunch1.ccbp.tech/" target="_blank" rel="noopener noreferrer" className="service project left-back hide">
            <img src="https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20192602.png" alt="Food Munch" />
            <div className="hidden-content">
              <h2>Food Munch</h2>
            </div>
          </a>
          
          <a href="https://adithyabookmark.ccbp.tech/" target="_blank" rel="noopener noreferrer" className="service project right-back hide">
            <img src="https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20192627.png" alt="Bookmark Maker" />
            <div className="hidden-content">
              <h2>Bookmark Maker</h2>
            </div>
          </a>
          
          <a href="https://adipodcast1.ccbp.tech/" target="_blank" rel="noopener noreferrer" className="service project right-back hide">
            <img src="https://ik.imagekit.io/ve7kfpijr/Screenshot%202024-08-20%20192650.png" alt="Popular Podcasts" />
            <div className="hidden-content">
              <h2>Popular Podcasts</h2>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects; 