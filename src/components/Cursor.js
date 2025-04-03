import React from 'react';

class Cursor extends React.Component {
  componentDidMount() {
    // Check if device is touch-only (mobile)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      const cursor = document.getElementById("cursor");
      
      window.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX-5}px`;
        cursor.style.top = `${event.clientY-5}px`;
      });
      
      // Add event listeners for services
      const services = document.querySelectorAll(".service");
      services.forEach(service => {
        service.addEventListener("mouseover", (event) => {
          cursor.style.left = `${event.clientX}px`;
          cursor.style.top = `${event.clientY}px`;
          cursor.style.zIndex = 1;
          cursor.innerHTML = `<p class="cursor-text">Open Project</p>`;
        });
        
        service.addEventListener("mouseout", (event) => {
          cursor.innerHTML = "";
          cursor.style.left = `${event.clientX}px`;
          cursor.style.top = `${event.clientY}px`;
        });
      });
      
      // Add event listeners for projects
      const projects = document.querySelectorAll(".project");
      projects.forEach(project => {
        project.addEventListener("mouseover", (event) => {
          cursor.style.left = `${event.clientX}px`;
          cursor.style.top = `${event.clientY}px`;
          cursor.innerHTML = `<p class="cursor-text">Open Project</p>`;
          cursor.style.zIndex = 1;
        });
        
        project.addEventListener("mouseout", (event) => {
          cursor.innerHTML = "";
          cursor.style.left = `${event.clientX}px`;
          cursor.style.top = `${event.clientY}px`;
        });
      });
    }
  }
  
  render() {
    // Check if device is touch-only (mobile)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Only render the cursor element if not on a touch device
    return isTouchDevice ? null : <div id="cursor"></div>;
  }
}

export default Cursor; 