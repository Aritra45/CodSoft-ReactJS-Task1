import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../styles/Header.css'; 

const Header = () => {
  const [activeLink, setActiveLink] = useState(''); 
  const location = useLocation();

  useEffect(() => {
    
    const currentPath = location.pathname;

    
    if (currentPath === '/') {
      setActiveLink('home');
    } else if (currentPath === '/projects') {
      setActiveLink('projects');
    } else if (currentPath === '/about') {
      setActiveLink('about');
    } else if (currentPath === '/contact') {
      setActiveLink('contact');
    }
  }, [location.pathname]);

  const handleItemClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <h1>Aritra <span className='head'>Deb</span></h1>
        </div>
        <nav className="header-right">
          <ul>
            <li className={activeLink === 'home' ? 'active' : ''}>
              <Link to="/" onClick={() => handleItemClick('home')}>Home</Link>
            </li>
            <li className={activeLink === 'projects' ? 'active' : ''}>
              <Link to="/projects" onClick={() => handleItemClick('projects')}>Projects</Link>
            </li>
            <li className={activeLink === 'about' ? 'active' : ''}>
              <Link to="/about" onClick={() => handleItemClick('about')}>About</Link>
            </li>
            <li className={activeLink === 'contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => handleItemClick('contact')}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
