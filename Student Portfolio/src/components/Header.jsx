import React from 'react';
import { Link } from 'react-router-dom'; 
const Header = () => {
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>My Portfolio</h1>
        <nav>
          <ul style={navStyle}>
            <li style={listItemStyle}>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  export default Header;
  