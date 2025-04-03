import React from 'react';

class NeonAnimation extends React.Component {
  componentDidMount() {
    let blueNeon = document.getElementById("blue");
    let purpleNeon = document.getElementById("purple");

    let angleBlue = 0;
    let anglePurple = Math.PI;
    const radiusBlue = 40;
    const radiusPurple = 30;
    const centerX = 50;
    const centerY = 50;

    const setCircularPositions = () => {
      let blueX = centerX + radiusBlue * Math.cos(angleBlue) + "%";
      let blueY = -50 + centerY + radiusBlue * Math.sin(angleBlue) + "%";
      let purpleX = 30 + centerX + radiusPurple * Math.cos(anglePurple) + "%";
      let purpleY = centerY + radiusPurple * Math.sin(anglePurple) + "%";
      
      blueNeon.style.top = blueY;
      blueNeon.style.left = blueX;
      purpleNeon.style.top = purpleY;
      purpleNeon.style.left = purpleX;
      
      angleBlue += 0.05;
      anglePurple += 0.05;
    };

    this.animationInterval = setInterval(setCircularPositions, 100);
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  render() {
    return (
      <>
        <div className="neon purple" id="purple" style={{ "--color": "rgb(218, 106, 252)" }}></div>
        <div className="neon blue" id="blue" style={{ "--color": "rgb(106, 252, 230)" }}></div>
      </>
    );
  }
}

export default NeonAnimation; 