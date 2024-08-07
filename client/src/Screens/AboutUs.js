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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form data based on your state variables
    const formData = {
      name,
      email,
      subject,
      message, // Make sure you have state for this and it's updated correctly
    };

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Or any other notification mechanism
        alert("Message sent successfully!");
        // Optionally reset form state here
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission error: " + error.message);
    }
  };

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
            <a href="/contact" className="button-2">
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
          <div className="buttons-container">
            <button type="button" className="button" onClick={handleSubmit}>
              SEND MESSAGE
            </button>
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
