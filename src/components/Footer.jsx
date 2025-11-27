import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left section with logo and description */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="YourBrand Logo" className="footer-logo-img" />
          </Link>
          <div>
            <h4>MJ Caterings & Events</h4>
            <p>
             We provide all-service catering, locations, décor & staging for weddings,
              parties, and all celebrations.
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/menu">Menu</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/get-quote">Get Quote</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms &amp; Policies</Link>

        </div>

        {/* Social media icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/174FsYD9Vh/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/mj_catering_events_?igsh=czRmdXo3Z3YydnM3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com/@mjcateringandevents?si=l68kM9prFwYU_Ujr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} MJ Caterings. All rights reserved(Absoltix Solution).
        </span>
      </div>
    </footer>
  );
};

export default Footer;
