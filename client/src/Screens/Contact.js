import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/Contact.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function Contact() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [receivesBenefits, setReceivesBenefits] = useState(null);
  const [isCheckboxCheckedStep2, setIsCheckboxCheckedStep2] = useState(false);
  const [isCheckboxCheckedStep3, setIsCheckboxCheckedStep3] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [homeStatus, setHomeStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [wallMaterial, setWallMaterial] = useState("");
  const [heatingType, setHeatingType] = useState("");
  const [heatingSystemAge, setHeatingSystemAge] = useState("");
  const [houseAndStreet, setHouseAndStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = (event) => {
    event.preventDefault();
    if (step === 2 && !isCheckboxCheckedStep2) {
      alert("Please check the box if you want to proceed");
    } else if (step === 3 && !isCheckboxCheckedStep3) {
      alert("Please check the box if you want to proceed");
    } else if (step === 4 && (!homeStatus || !propertyType)) {
      alert("Please select an option");
    } else if (step === 5 && (!wallMaterial || !heatingType)) {
      alert("Please select an option");
    } else if (
      step === 6 &&
      (!heatingSystemAge || !houseAndStreet || !postcode)
    ) {
      alert("Please fill in all fields");
    } else if (step === 7 && (!name || !dob || !phone || !email)) {
      alert("Please fill in all fields");
    } else if (step < 8) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  function scrollToContent1() {
    const content1 = document.querySelector(".content-1");
    if (content1) {
      content1.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <Header />
      <div className="content-1">
        <div className="text-container">
          <LottieAnimation />
          <p
            style={{
              fontSize: "2.5em",
              fontWeight: "bold",
              color: "blck",
            }}
          >
            CONTACT
          </p>
          <p>
            Under the boiler replacement scheme, many homeowners <br /> now have
            the opportunity to receive a brand new boiler
            <br /> under the government’s free boiler replacement scheme.
            <br /> This scheme is 100% government backed as detailed on <br />
            the official GOV.UK website.
          </p>
          <p>
            Sunderland based North East Insulation Services Ltd can <br />
            help with the application process, working with <br />
            homeowners locally and nationally. Our experienced team <br />
            can also help with the installation of your new boiler, it’s all{" "}
            <br />
            part of the service. If you are interested in finding out <br />
            more, just get in touch.
          </p>
          <div className="buttons-container">
            <button className="button">Boiler Installations</button>
            <button className="button">0191 6804575</button>
          </div>
        </div>

        <div className="form-container">
          {step !== 8 && (
            <h2>
              Are you eligible for 100% <br />
              FREE energy efficiency <br />
              upgrade? Simply follow the <br />
              steps below
            </h2>
          )}
          <p>Step {step} of 8</p>
          <form onSubmit={handleNext}>
            {step === 1 && (
              <label>
                Which Region of the UK Do You Live?*
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option value="wales">Wales</option>
                  <option value="south-east">South East</option>
                  <option value="yorkshire">Yorkshire</option>
                  <option value="east-midlands">East Midlands</option>
                </select>
              </label>
            )}
            {step === 2 && (
              <>
                <label>
                  Do you or anyone in your household receive any benefits?
                  <div>
                    <input
                      type="radio"
                      id="yes"
                      name="benefits"
                      value="Yes"
                      onChange={() => setReceivesBenefits(true)}
                      required
                    />
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      id="no"
                      name="benefits"
                      value="No"
                      onChange={() => setReceivesBenefits(false)}
                      required
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </label>
                {receivesBenefits === true && (
                  <label>
                    Which Benefits Do You Receive?
                    <div className="checkbox-container">
                      <div>
                        <input
                          type="checkbox"
                          id="income-support"
                          name="benefits"
                          className="checkbox-button"
                          value="Income Support"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep2(e.target.checked)
                          }
                        />
                        <label htmlFor="income-support">Income Support</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="tax-credits"
                          name="benefits"
                          value="Tax Credits"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep2(e.target.checked)
                          }
                        />
                        <label htmlFor="tax-credits">Tax Credits</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="child-benefits"
                          name="benefits"
                          value="Child Benefits"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep2(e.target.checked)
                          }
                        />
                        <label htmlFor="child-benefits">Child Benefits</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="universal-credits"
                          name="benefits"
                          value="Universal Credits"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep2(e.target.checked)
                          }
                        />
                        <label htmlFor="universal-credits">
                          Universal Credits
                        </label>
                      </div>
                    </div>
                  </label>
                )}
                {receivesBenefits === false && (
                  <p>You are ineligible, contact us for more information</p>
                )}
              </>
            )}
            {step === 3 && (
              <>
                {receivesBenefits === true && (
                  <label>
                    What Services Do You Require?*
                    <div className="checkbox-container">
                      <div>
                        <input
                          type="checkbox"
                          id="free-boiler-replacement"
                          name="services"
                          value="FREE Boiler Replacment"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep3(e.target.checked)
                          }
                        />
                        <label htmlFor="free-boiler-replacement">
                          FREE Boiler Replacement
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="free-solar-pv"
                          name="services"
                          value="FREE Solar PV"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep3(e.target.checked)
                          }
                        />
                        <label htmlFor="free-solar-pv">FREE Solar PV</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="free-air-source-heat-pump"
                          name="services"
                          value="FREE Air Source Heat Pump"
                          className="checkbox-button"
                          onChange={(e) =>
                            setIsCheckboxCheckedStep3(e.target.checked)
                          }
                        />
                        <label htmlFor="free-air-source-heat-pump">
                          FREE Air Source Heat Pump
                        </label>
                      </div>
                    </div>
                  </label>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <label>
                  Are You A Homeowner Or Renting?
                  <div>
                    <input
                      type="radio"
                      id="homeowner"
                      name="homeStatus"
                      value="Homeowner"
                      onChange={(e) => setHomeStatus(e.target.value)}
                      required
                    />
                    <label htmlFor="homeowner">Homeowner</label>
                    <input
                      type="radio"
                      id="renting"
                      name="homeStatus"
                      value="Renting"
                      onChange={(e) => setHomeStatus(e.target.value)}
                      required
                    />
                    <label htmlFor="renting">Renting</label>
                  </div>
                </label>
                {homeStatus && (
                  <label>
                    What Type Of Property Do You Live In?
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="detached-house"
                        name="propertyType"
                        value="Detached House"
                        className="radio-button"
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                      />
                      <label htmlFor="detached-house">Detached House</label>
                      {/* Add other property type options here */}
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="Mid-Terrace-House"
                        className="radio-button"
                        name="propertyType"
                        value="Mid Terrace House"
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                      />
                      <label htmlFor="Mid-Terrace-House">
                        Mid Terrace House
                      </label>
                      {/* Add other property type options here */}
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="Bungalow"
                        name="propertyType"
                        value="Bungalow"
                        className="radio-button"
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                      />
                      <label htmlFor="Bungalow">Bungalow</label>
                      {/* Add other property type options here */}
                    </div>
                  </label>
                )}
              </>
            )}
            {step === 5 && (
              <>
                <label>
                  What Material Are Your Walls Made From?
                  <div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="cavity-wall"
                        name="wallMaterial"
                        value="Cavity Wall"
                        className="radio-button"
                        onChange={(e) => setWallMaterial(e.target.value)}
                        required
                      />
                      <label htmlFor="cavity-wall">Cavity Wall</label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="solid-stone"
                        name="wallMaterial"
                        className="radio-button"
                        value="Solid Stone"
                        onChange={(e) => setWallMaterial(e.target.value)}
                        required
                      />
                      <label htmlFor="solid-stone">Solid Stone</label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="other"
                        name="wallMaterial"
                        className="radio-button"
                        value="Other/Not Sure"
                        onChange={(e) => setWallMaterial(e.target.value)}
                        required
                      />
                      <label htmlFor="other">Other/Not Sure</label>
                    </div>
                  </div>
                </label>
                <label>
                  How Is Your Home Heated?
                  <div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="mains-gas"
                        name="heatingType"
                        className="radio-button"
                        value="Mains Gas"
                        onChange={(e) => setHeatingType(e.target.value)}
                        required
                      />
                      <label htmlFor="mains-gas">Mains Gas</label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="electric"
                        name="heatingType"
                        className="radio-button"
                        value="Electric"
                        onChange={(e) => setHeatingType(e.target.value)}
                        required
                      />
                      <label htmlFor="electric">Electric</label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="no-heating"
                        name="heatingType"
                        className="radio-button"
                        value="No Heating"
                        onChange={(e) => setHeatingType(e.target.value)}
                        required
                      />
                      <label htmlFor="no-heating">No Heating</label>
                    </div>
                  </div>
                </label>
              </>
            )}
            {step === 6 && (
              <>
                <label>
                  How Old Is Your Heating System?
                  <div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="less-than-20"
                        name="heatingSystemAge"
                        value="Less than 20 Years Old"
                        className="radio-button"
                        onChange={(e) => setHeatingSystemAge(e.target.value)}
                        required
                      />
                      <label htmlFor="less-than-20">
                        Less than 20 Years Old
                      </label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="more-than-20"
                        name="heatingSystemAge"
                        className="radio-button"
                        value="More than 20 Years Old"
                        onChange={(e) => setHeatingSystemAge(e.target.value)}
                        required
                      />
                      <label htmlFor="more-than-20">
                        More than 20 Years Old
                      </label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="not-sure"
                        name="heatingSystemAge"
                        className="radio-button"
                        value="Not sure"
                        onChange={(e) => setHeatingSystemAge(e.target.value)}
                        required
                      />
                      <label htmlFor="not-sure">Not sure</label>
                    </div>
                  </div>
                </label>
                <input
                  type="text"
                  name="houseAndStreet"
                  placeholder="House No and Street Name"
                  onChange={(e) => setHouseAndStreet(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  onChange={(e) => setPostcode(e.target.value)}
                  required
                />
              </>
            )}
            {step === 7 && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  pattern="[0-9]{4,17}"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </>
            )}
            {step === 8 && (
              <p>
                Thank you for your interest. We will get in touch as soon as
                possible.
              </p>
            )}
            <div className="buttons-container">
              {receivesBenefits !== false && (
                <>
                  {step > 1 && (
                    <button
                      type="button"
                      className="button-2"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                  {step < 8 && (
                    <button type="submit" className="button-2">
                      Next
                    </button>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>

      <div class="content-2">
        <div class="image-container-2">
          <img src={boiler} alt="App Logo" class="image-2" />
        </div>
        <div class="text-container-2">
          <h1>
            Do you qualify for a <br /> new boiler?
          </h1>
          <p>The answer to this is yes if:</p>
          <ul>
            <li>You are a homeowner or renting</li>
            <li>You are receiving benefits</li>
            <li>Your boiler is more than 10-years old</li>
          </ul>
          <p>Benefits include:</p>
          <ul>
            <li>Income Related ESA</li>
            <li>Pension Credit Guarantee</li>
            <li>Income Based JSA</li>
            <li>Universal Credit</li>
            <li>Child Benefit</li>
            <li>Housing Benefit</li>
          </ul>
        </div>
      </div>

      <div class="content-3">
        <div class="text-container-3">
          <h1>
            Free boiler
            <br /> replacement <br />
            schemes
          </h1>
          <p>
            Sunderland based North East Insulation <br />
            Services Ltd can advise you how to take
            <br /> advantage of the government's free boiler <br />
            replacement scheme.
          </p>
          <div className="buttons-container-3">
            <a href="/contact" className="button-3">
              CONTACT US
            </a>
          </div>
        </div>
        <div class="image-container-3">
          <img src={boiler1} alt="App Logo" class="image-3" />
        </div>
      </div>

      <div class="content-4">
        <div class="text-container-4">
          <h1>Your can rely on us</h1>

          <ul>
            <li>Experienced company</li>
            <li>Great reputation</li>
            <li>Impartial advice</li>
            <li>Skilled engineers</li>
            <li>Wide service area</li>
            <li>Impartial advice</li>
          </ul>
          <h1>
            Contact Northeast <br /> Insulation Services to
            <br /> find our more about <br />
            the government’s free <br />
            boiler replacement
            <br /> scheme
          </h1>
          <div className="buttons-container-4">
            <button className="button-4" onClick={() => scrollToContent1()}>
              {" "}
              COMPLETE THE GRANT FORM
            </button>
          </div>
        </div>
        <div class="image-container-4">
          <img src={appLogo} alt="App Logo" class="image-4" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
