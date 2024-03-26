// App.js
import React from "react";
import "../Styling/Header.css";
import appLogo from "../img/app-logo.png";
import fbLogo from "../img/fb.png";
import mapLogo from "../img/map.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="contact-info">
          <div className="contact-circle">123-456-7890</div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbLogo} alt="Facebook Logo" className="social-icon" />
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mapLogo}
                alt="Google Map Logo"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        <div className="logo-container">
          <img src={appLogo} alt="App Logo" className="app-logo" />
         <p> <h1>HEAT-ING</h1>INSULATION SERVICES LTD </p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" className="form-control" />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      <div className="main-content">
          <div className="yellow-ribbon">
          <div className="ribbon-column"></div>
          <div className="ribbon-column" onClick={() => navigateTo("/")}>
            Home
          </div>
          <div className="ribbon-column" onClick={() => navigateTo("/about-us")}>
            About Us
          </div>
          <div className="ribbon-column" onClick={() => navigateTo("/solar")}>
            Solar
          </div>
          <div className="ribbon-column" onClick={() => navigateTo("/careers")}>
            Careers
          </div>
          <div className="ribbon-column" onClick={() => navigateTo("/contact")}>
            Contact
          </div>
          <div className="ribbon-column"></div> 
        </div>
      </div>
    </div>
  );
}

export default Header;




