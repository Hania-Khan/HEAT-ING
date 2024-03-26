import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function AboutUs() {
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
              10 years’ experience
              <br /> in house insulation
            </h1>
        
          <p>
            Working in homes and businesses across the UK, North
            <br /> East Insulation Services is the team to rely on to help you
            <br /> save money on your energy bills.
          </p>
          <div className="buttons-container-2">
            <a href="/contact-us" className="button-2">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <div className="content-2">
        <div className="text-container-2">
          <h1>
            Saving you money
            <br /> whilst warming <br />
            your home
          </h1>
          <p>
            North East Insulation Services is run by a father and son
            <br /> team with over 10 years' industry experience. Our family
            <br /> run team always puts quality of workmanship and
            <br /> customer service first. We've earned a great reputation{" "}
            <br />
            across the UK and look forward to working with you.
          </p>
          <div className="buttons-container-2">
            <a href="/faqs" className="button-2">
              FAQs
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
              You could get <br />
              funding to help with <br />
              the costs of house <br />
              insulation. Fill in our <br />
              form today to apply.
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

export default AboutUs;
