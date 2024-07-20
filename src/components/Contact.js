import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './../styles/Contact.css';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setShowAlert(true); 
      form.reset(); 

      
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      
    }
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <h2>Aritra Deb</h2>
        <h3>Kolkata, West Bengal, Howrah-711205</h3>
        <div className="phone-number">
          <FaPhoneAlt className="phone-icon" />
          <p>+91 7044373952</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/aritra-deb-bb16131a3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Aritra45" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/aritra.deb.94" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/___badsah_bhai___/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mnnaavgj" method="POST" className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" rows="7" placeholder="Your Message" required></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
          </div>
        </form>
        {showAlert && (
          <div className="popup-alert">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
