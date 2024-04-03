import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function Grants() {

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    // Gather form data
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
  
    try {
      const response = await fetch('http://localhost:5000/apply-for-funding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formProps),
      });
  
      if (response.ok) {
        alert("Grant application submitted successfully!");
      } else {
        throw new Error('Failed to submit grant application.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("Failed to submit grant application.");
    }
  };
  
  // Add onSubmit={handleSubmit} to your <form> element
  

  return (
    <div>
      <Header />
      <div className="content-1">
        <div className="text-container">
          <h1>
            Apply or a<br /> home insulation
            <br /> grant today
          </h1>

          <p>
            North East Insulation Services can help you apply for a grant under
            the ECO4 scheme. We complete insulation installations across the UK.
            You may qualify for a free grant.
          </p>
          <div className="buttons-container-2">
            <a href="/contact" className="button-2">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <div className="content-2">
        <div className="text-container-2">
          <h1>What is the ECO4 scheme?</h1>
          <p>
            The ECO4 scheme provides grants to fund energy-efficient upgrades to
            homes reducing emissions, electricity and energy bills. These grants
            pay for new heating systems like boilers, loft or cavity wall
            insulation and other measures designed primarily to increase energy
            efficiency and reduce fuel poverty and energy costs. For more
            information please visit Ofgem’s website.
          </p>
          <div className="buttons-container-2">
            <a
              href="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
              target="_blank"
              rel="noopener noreferrer"
              className="button-2"
            >
              ECO4 Scheme
            </a>
          </div>
        </div>

        <div className="image-container-2">
          <img src={boiler1} alt="App Logo" className="image-2" />
        </div>
      </div>

      <div className="content-3">
        <div className="text-container-3">
          <h1>Our Values</h1>
          <p>
            North East Insulation Services focuses on our core values in
            everything we do.
          </p>
        </div>
      </div>

      <div className="grants-container">
        <Header />
        <div className="apply-for-funding">
          <div className="funding-form-container">
            <h1>Apply for Funding</h1>
            <form className="funding-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" />
              <br />
              <input type="email" name="email" placeholder="Email" />
              <br />
              <input type="tel" name="phone" placeholder="Phone" />
              <br />
              <input type="text" name="address" placeholder="Your Address" />
              <br />
              <input type="text" name="postcode" placeholder="Postcode" />
              <br />

              {/* Energy Saving Measures */}
              <p>Which Energy Saving Measures are you interested in?</p>
              <label>
                <input
                  type="radio"
                  name="energySaving"
                  value="Cavity Wall insulation"
                />{" "}
                Cavity Wall insulation
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="energySaving"
                  value="First time Central Heating"
                />{" "}
                First time Central Heating
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="energySaving"
                  value="Loft Insulation"
                />{" "}
                Loft Insulation
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="energySaving"
                  value="Smart Thermostat"
                />{" "}
                Smart Thermostat
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="energySaving"
                  value="Boiler Install"
                />{" "}
                Boiler Install
              </label>
              <br />
              <label>
                <input type="radio" name="energySaving" value="Not Sure" /> Not
                Sure
              </label>
              <br />

              {/* Property Ownership */}
              <p>Do you own or rent your property?</p>
              <select name="propertyOwnership">
                <option value="Owner Occupied">Owner Occupied</option>
                <option value="Privately Rented">Privately Rented</option>
              </select>
              <br />

              {/* Property Type */}
              <p>Please confirm your property type:</p>
              <select name="propertyType">
                <option value="Mid terrace house">Mid terrace house</option>
                <option value="Semi-detached house">Semi-detached house</option>
                <option value="End terrace house">End terrace house</option>
              </select>
              <br />

              {/* Funding or Quote */}
              <p>Are you applying for funding or wanting a quote?</p>
              <select name="fundingOrQuote">
                <option value="I am looking for a quote">
                  I am looking for a quote
                </option>
                <option value="I want to apply for funding">
                  I want to apply for funding
                </option>
              </select>
              <br />

              {/* Additional Information */}
              <textarea
                name="additionalInfo"
                placeholder="Any additional information"
              ></textarea>
              <br />

              {/* Benefits */}
              <p>Which benefits do you receive?</p>
              <label>
                <input
                  type="radio"
                  name="benefits"
                  value="Working Tax credit"
                />{" "}
                Working Tax credit
              </label>
              <br />
              <label>
                <input type="radio" name="benefits" value="Universal Credit" />{" "}
                Universal Credit
              </label>
              <br />
              <label>
                <input type="radio" name="benefits" value="Child Tax Credit" />{" "}
                Child Tax Credit
              </label>
              <br />
              <label>
                <input type="radio" name="benefits" value="Housing Benefit" />{" "}
                Housing Benefit
              </label>
              <br />

              {/* Submit Button */}
              <div className="buttons-container-5">
                <button type="submit" className="button">
                  ENQUIRE NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="content-5">
        <div className="text-container-5">
          <h1>
            Any questions before you apply for a home <br />
            insulation grant? We're happy to help. Contact <br />
            our friendly Sunderland-based team today.
          </h1>

          <div className="buttons-container-5">
            <a href="/contact" className="button-5">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Grants;
