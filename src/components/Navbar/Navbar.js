import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="logo"><img className='logo-img' src="https://i.imgur.com/M4vs1Q5.png"/> Tech Hub</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>

          {/* Features dropdown */}
          <li 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/features">Features</Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/features/smarthomeguides">Smart Home Guides</Link></li>
                <li><Link to="/features/recommendations">Device Recommendations</Link></li>
                <li><Link to="/features/tutorials">Video Tutorials</Link></li>
                <li><Link to="/features/sales">Sales & Discounts</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
