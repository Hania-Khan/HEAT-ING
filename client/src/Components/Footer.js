import React from "react";
import "../Styling/Footer.css";
import appLogo from "../img/app-logo.png";
import fbLogo from "../img/fb1.png";
import mapLogo from "../img/map1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="left-container">
        <div className="logo-container">
          <img src={appLogo} alt="App Logo" className="app-logo" />
          <p>
            <h1>HEAT-ING</h1>INSULATION SERVICES LTD
          </p>
        </div>
        <div className="social-icons-f">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fbLogo} alt="Facebook Logo" className="social-icon-f" />
          </a>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapLogo}
              alt="Google Map Logo"
              className="social-icon-f"
            />
          </a>
        </div>
      </div>
      <div className="mid-container">
        <h2 className="font-bold text-lg mb-4">Quick Links</h2>
        <p>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about-us" className="footer-link">
            About Us
          </Link>
          <Link to="/solar" className="footer-link">
            Solar
          </Link>
          <Link to="/careers" className="footer-link">
            Careers
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </p>
      </div>
      <div className="right-container">
        <h2 className="font-bold text-lg mb-4">Contact</h2>
        <p>
          Tel 0191 6804575 <br />
          <a href="mailto:enquires@northeastinsulationservices.co.uk">
            enquires@northeastinsulationservices.co.uk
          </a>
          <br />1 Charles Street
          <br />
          Sunderland
          <br />
          SR6 0AN
        </p>
      </div>
      <div className="bottom-container">
        <p>
          We are an{" "}
          <a
            href="https://www.southtyneside.gov.uk/article/15216/Approved-installers"
            target="_blank"
            rel="noopener noreferrer"
          >
            approved installer
          </a>{" "}
          for South Tyneside Council
        </p>

        <p>
          NORTH EAST INSULATION SERVICES LTD registered as a limited company in
          England and Wales under company number: 11780476
          <br />
          Registered Company Address: 15 Riverside Studios Amethyst Road,
          Newcastle Business Park, Newcastle Upon Tyne, England NE4 7YL
        </p>
        <p>
          {" "}
          Terms of Use | Privacy & Cookie Policy | Trading Terms | Powered by
          Yell Business © 2022. <br />
          The content on this website is owned by us and our licensors. <br />
          Do not copy any content (including images) without our consent
        </p>
      </div>
    </div>
  );
};

export default Footer;
