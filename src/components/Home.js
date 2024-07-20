import React from 'react';
import { ReactTyped } from 'react-typed';
import profilePic from './../images/profile-pic.png';
import './../styles/Home.css';

const typingTexts = [
  'Web Developer',
  'MCA Student',
  'Fresher',
];

const Home = () => (
  <div className="home-container">
    <div className="text-content">
      <span className="subheading">Hello!</span>
      <h1>I'm <span className="highlight">Aritra Deb</span></h1>
      <ReactTyped
        strings={typingTexts}
        typeSpeed={40}
        backSpeed={50}
        loop
      /><p></p>
      <h3>Exploring the world of Information and Technologies.</h3>
      <div className="button-group">
        <button className="explore-button"><a href='https://www.linkedin.com/in/aritra-deb-bb16131a3/'>LINKEDIN</a></button>
        <button className="work-button"><a href='https://github.com/Aritra45?tab=repositories'>My Works</a></button>
      </div>
    </div>
    <div className="image-content">
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
  </div>
);

export default Home;
