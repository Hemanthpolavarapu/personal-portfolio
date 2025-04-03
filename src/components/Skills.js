import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className="body skills-section" id="skills">
        <h1 className="blurrr heading">
          Skills
        </h1>
        <div className="skills-container">
          <div className="blurrr">
            <h1 className="skill-name">
              Frontend
            </h1>
            <div className="skill-part">
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="HTML">
                    HTML
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="CSS">
                    CSS
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Javascript">
                    Javascript
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Bootstrap">
                    Bootstrap
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="React.js">
                    React.js
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="blurrr">
            <h1 className="skill-name">
              Backend
            </h1>
            <div className="skill-part">
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Node.js">
                    Node.js
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Express.Js">
                    Express.Js
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Rest APIs">
                    Rest APIs
                  </span>
                </h1>
              </div>
            </div>
          </div>
          
          <div className="blurrr">
            <h1 className="skill-name">Database</h1>
            <div className="skill-part">
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="SQLite">
                    SQLite
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="blurrr">
            <h1 className="skill-name">
              Programming Languages
            </h1>
            <div className="skill-part">
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Javascript">
                    Javascript
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="Python">
                    Python
                  </span>
                </h1>
              </div>
              <div className="skill">
                <h1 className="nav-link">
                  <span data-content="C/C++">
                    C/C++
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills; 