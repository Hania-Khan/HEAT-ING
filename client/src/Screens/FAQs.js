import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function FAQs() {


  return (
    <div>
      <Header />
      <div className="content-1">
        <div className="text-container">
          <h1>
            Questions
            <br /> about insulation
            <br /> installation?
          </h1>

          <p>
            North East Insulation Services has been in the industry for over 10
            years and is happy to help with all insulation installation and
            funding queries. If you can’t find your answer here, don’t hesitate
            to contact us directly.
          </p>
          <div className="buttons-container-2">
            <a href="/contact" className="button-2">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <div className="content-3">
        <div className="text-container-3">
          <h1>Our FAQs</h1>
          <p>Copming Soon</p>
        </div>
      </div>

      <div className="content-5">
        <div className="text-container-5">
          <h1>
            Grants and funding are available to help with
            <br /> costs. Fill in our form now to find out more.
          </h1>

          <div className="buttons-container-5">
            <a href="/" className="button-5">
              APPLY FOR A GRANT
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQs;
