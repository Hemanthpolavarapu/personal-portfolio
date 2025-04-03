import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <input type="checkbox" defaultChecked title="menu" name="menu" id="menu" />
        <div className="logo-container">
          <a href="#">
            <img className="logo" src="https://res.cloudinary.com/dksfgtqwl/image/upload/v1743663137/hp-logo_qjpl1z.jpg" alt="logo" />
          </a>
        </div>
        <nav>
          <label htmlFor="menu" className="label"><i className="fa-solid fa-bars"></i></label>
          <div className="nav-links-container">
            <ul className="nav-links-containr">
              <li>
                <label htmlFor="menu" className="label"><i className="fa-solid fa-xmark"></i></label>
              </li>
              <li><a className="nav-link" href="#"><span data-content='Home'>Home</span></a></li>
              <li><a className="nav-link" href="#skills"><span data-content='Skills'>Skills</span></a></li>
              <li><a className="nav-link" href="#projects"><span data-content='Projects'>Projects</span></a></li>
              <li><a className="nav-link" href="#contact"><span data-content='Contact'>Contact</span></a></li>
            </ul>
          </div>
        </nav>
        <label htmlFor="menu" className="overlay"></label>
      </header>
    );
  }
}

export default Header; 