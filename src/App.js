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
      isMobile: false,
      hasError: false
    };
  }

  componentDidMount() {
    try {
      // Check if device is touch-only (mobile)
      const isMobile = 'ontouchstart' in window || 
                      (window.navigator && window.navigator.maxTouchPoints > 0) || 
                      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      
      this.setState({ isMobile });
      
      // Add a class to body if mobile for global CSS targeting
      if (isMobile && document.body) {
        document.body.classList.add('mobile-device');
      }
    } catch (error) {
      console.error('Error in componentDidMount:', error);
      this.setState({ hasError: true });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
          <h1>Something went wrong</h1>
          <p>Please try refreshing the page</p>
        </div>
      );
    }

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
