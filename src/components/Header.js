import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>Ananya Shah</h1>
          <p>Startup Founder | Tech & VC Enthusiast | Student</p>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
