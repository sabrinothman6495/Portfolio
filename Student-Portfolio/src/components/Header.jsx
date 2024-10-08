import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="logo">
      <nav className='header_nav'>
        <ul>
          <li><Link to="/AboutMe">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
