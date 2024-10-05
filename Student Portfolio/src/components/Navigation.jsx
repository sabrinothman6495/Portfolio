import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={liStyle}>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;