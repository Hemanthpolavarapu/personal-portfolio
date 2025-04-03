import React from 'react';
import './assets/styles/index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import NeonAnimation from './components/NeonAnimation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    // Check if device is touch-only (mobile)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.setState({ isMobile });
    
    // Add a class to body if mobile for global CSS targeting
    if (isMobile) {
      document.body.classList.add('mobile-device');
    }
  }
  
  render() {
    return (
      <div className="nav-container">
        <Cursor />
        <Header />
        <NeonAnimation />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
