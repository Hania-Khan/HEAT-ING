import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function Solar() {
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
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

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
          <h1>
            Harness the <br />
            energy of the sun <br />
            to power your <br />
            home
          </h1>

          <p>
            Take a step towards energy independence with solar <br /> panels.
            Sunderland-based North East Insulation Services <br /> can help.
          </p>
          <div className="buttons-container-2">
            <a href="/contact" className="button-2">
              GET IN TOUCH
            </a>
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
                      className="button"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                  {step < 8 && (
                    <button type="submit" className="button">
                      Next
                    </button>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="content-2">
        <div className="text-container-2">
          <h1>
            Generate power
            <br /> from sunlight all <br />
            day long
          </h1>
          <p>
            Are you fed up with large energy bills? Concerned about <br />
            the harm that fossil fuels are doing to the environment? <br />
            You aren’t alone in that. With energy bills soaring, and <br />
            environmental concerns always in the news, many people <br />
            are looking for ways to reduce their dependence on the big <br />
            power companies. Solar power is a great option for many <br />
            homes. You can generate power to use in your home, and <br />
            if you generate more than you need, you can even sell the
            <br /> excess back to the National Grid! If that sounds good, get{" "}
            <br />
            in touch..
          </p>
          <div className="buttons-container-2">
            <a href="/faqs" className="button-2">
              GRANTS
            </a>
          </div>
        </div>

        {/* <div className="image-container-2">
          <img src={boiler1} alt="App Logo" className="image-2" />
        </div> */}
        <LottieAnimation />
      </div>

      <div className="content-3">
        <div className="text-container-3">
          <h1>
            How do solar panels <br /> work?
          </h1>
          <p>
            The short version is that solar panels work by collecting sunlight
            and converting its light and heat energy into electrical energy,
            stored in a battery unit. It’s a simple, elegant system that uses a
            renewable resource to generate power that you can use even when the
            sun isn’t shining. It’s a fantastic option for many people.
          </p>
          <p>
            In addition to the obvious benefits of no longer being reliant on
            fossil fuels, and therefore doing your bit to help the environment,
            there’s another huge reason to choose solar power for your home – it
            can save you money! Solar energy can reduce your consumption of
            power from the National Grid, leading to lower energy bills, as well
            as lower carbon emissions. It’s a win-win situation.
          </p>
          <p>
            Even better than that, there are grants available for people looking
            to install solar panels – we can help you find out if you’re
            eligible.
          </p>
        </div>
      </div>
      <div className="content-4">
        <div className="text-container-4">
          <h1>Our certifications and memberships include:</h1>

          <ul>
            <li>Ocean Certification</li>
            <li>PAS2030 Certification</li>
            <li>TrustMark</li>
            <li>Domestic Energy Assessor</li>
            <li>Wide service area</li>
            <li>Accreditation Scheme</li>
          </ul>
        </div>
        {/* <div className="image-container-4">
            <img src={appLogo} alt="App Logo" className="image-4" />
          </div> */}
      </div>

      <div className="content-5">
        <div className="form-container-5">
          <form>
            <>
              <h1>Send us a message</h1>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="e.g., email@example.com"
                pattern="[0-9]{4,17}"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g., Support"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label>Your Meassage</label>
              <input
                type="text"
                name="meassage"
                placeholder="Enter Text here"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </>
          </form>
          <div className="buttons-container-2">
            <button className="button-2">SEND MESSAGE</button>
          </div>
        </div>
        <div className="text-container-5">
          <h1>
            To find out more
            <br /> about what solar <br />
            panels can do for you,
            <br /> contact North East <br />
            Insulation Services.
          </h1>

          <div className="buttons-container-5">
            <a href="/" className="button-5">
              APPLY FOR FUNDING
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Solar;
