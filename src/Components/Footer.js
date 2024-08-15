import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.png";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-container">
    <div className="upper-footer">
    <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/our_team_y20">Our Team</a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/phoenix.lnmiit/"
            target="_blank"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.linkedin.com/company/phoenix-lnmiit/"
            aria-label="Linkedin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/phoenix.lnmiit/"
            aria-label="Instagram"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-section newsletter-section">
        <h3>Subscribe to our Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" 
                placeholder="Enter your email" 
                onChange={(e)=>setEmail(e.target.value)}
                required 
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Phoenix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
