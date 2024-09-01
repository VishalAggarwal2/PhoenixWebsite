import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.png";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const requestData = { email };
      await axios.post("/api/users/create", requestData);
      setEmail(''); 
      alert('Thank you for subscribing to our newsletter! We are thrilled to have you as part of our community. Expect to receive regular updates, exclusive content, and the latest news straight to your inbox');
    } catch (err) {
      console.error("Subscription error:", err);
      setError("There was an error subscribing. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-container">
      <div className="upper-footer">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/our_team_y20">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/phoenix.lnmiit/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/company/phoenix-lnmiit/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/phoenix.lnmiit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-section newsletter-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Phoenix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;