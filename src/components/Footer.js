import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './../styles/Footer.css'; 

const Footer = () => (
  <footer className="footer">
    <p>
      Copyright &copy; {new Date().getFullYear()} All rights reserved | This portfolio is made with
      <FontAwesomeIcon icon={faHeart} className="icon-heart" aria-hidden="true" /> by
      <a href="https://www.linkedin.com/in/aritra-deb-bb16131a3/" target="_blank" rel="noopener noreferrer"> Aritra Deb</a>
    </p>
  </footer>
);

export default Footer;
