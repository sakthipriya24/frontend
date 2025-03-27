import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h3>E-Commerce</h3>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaEllipsisV />
        </div>
      </div>

      {menuOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/recent">New Arrivals</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Help & Support</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
