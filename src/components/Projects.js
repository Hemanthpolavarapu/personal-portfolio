import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className="skills-section services-section body projects-section" id="projects">
        <h1 className="heading">Projects</h1>
        <div className="services-container projects-container">
          <a href="https://real-time-voting-app-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="service project left-back hide">
            <img src="https://res.cloudinary.com/dksfgtqwl/image/upload/v1743834647/Screenshot_2025-04-05_115717_ger4fx.png" alt="Real Time Voting Poll" />
            <div className="hidden-content">
              <h2>Real Time Voting Poll</h2>
            </div>
          </a>
          
          <a href="https://the-weather-forcasting.vercel.app/" target="_blank" rel="noopener noreferrer" className="service project left-back hide">
            <img src="https://res.cloudinary.com/dksfgtqwl/image/upload/v1743834649/Screenshot_2025-04-05_115849_ak3dem.png" alt="The Weather Forecasting" />
            <div className="hidden-content">
              <h2>The Weather Forecasting</h2>
            </div>
          </a>
          
          <a href="https://smart-budget-tracker-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="service project right-back hide">
            <img src="https://res.cloudinary.com/dksfgtqwl/image/upload/v1743834647/Screenshot_2025-04-05_115815_ymoahs.png" alt="Smart Budget Tracker" />
            <div className="hidden-content">
              <h2>Smart Budget Tracker</h2>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects; 