import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function Careers() {
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
            Careers with North East
            <br /> Insulation Services
          </h1>

          <p>
            if you’re someone with experience and qualifications in the
            industry, then we <br /> want to hear from you. We are a growing
            company, and we’re always open to <br />
            recruiting talented individuals.
          </p>
          <div className="buttons-container-2">
            <a href="/contact" className="button-2">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <div className="content-2">
        <div className="text-container-2">
          <h1>
            Are you looking <br />
            for your next
            <br /> career move?
          </h1>
          <p>
            North East Insulation Services is always looking for skilled,
            experienced, and dedicated people to join the team. What we do makes
            a difference, and we take pride in that. If you’re interested in a
            career with us, please take a look at our current vacancies and get
            in touch. We look forward to hearing from talented applicants.
          </p>
          <div className="buttons-container-2">
            <a href="/faqs" className="button-2">
              FAQs
            </a>
          </div>
        </div>
        <div className="form-container-2">
          <form>
            <>
              <h1>CURRENT VACANCIES</h1>
              <div className="buttons-container-2-1">
                <a href="/" className="button-2">
                  DOMESTIC ELECTRICIAN
                </a>
              </div>
              <div className="buttons-container-2-2">
                <a href="/" className="button-2">
                  DOMESTIC GAS ENGINEER
                </a>
              </div>
              <div className="buttons-container-2-3">
                <a href="/" className="button-2">
                  RETROFIT ASSESSOR
                </a>
              </div>
              <div className="buttons-container-2-4">
                <a href="/" className="button-2">
                  RETROFIT COORDINATOR
                </a>
              </div>
            </>
          </form>
        </div>
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
            Need more
            <br /> information?
            <br /> Complete the <br />
            contact form and <br />
            we’ll be in touch.
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

export default Careers;
