import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function Electrician() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitMessage = async (event) => {
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
          <h1>Electrician</h1>
        </div>
      </div>

      <div className="content-4">
        <div className="text-container-4">
          <LottieAnimation />
          <h3>Role:</h3>
          <p>Full Time Permanently Employed</p>
          <h3>Salary:</h3>
          <p> £40,000 - £50,000 per year Plus Over time and Bonus</p>
          <p>
            This is an exciting opportunity to join a growing company at the
            forefront of the domestic retrofit market.
          </p>
          <h3>The Role:</h3>

          <ul>
            <li>
              Surveying/Installing new Electric Storage Heaters to domestic
              properties
            </li>
            <li>
              Wiring and Commissioning of New Central Heating Systems and Air
              Source Heat Pumps
            </li>
            <li>
              Fitting Extractor Fans and Mechanical Ventilation Systems in
              domestic properties
            </li>
            <li>
              Working alongside our insulation installers to extend and relocate
              plug sockets
            </li>
            <li>Wiring and commissioning of solar PV installations</li>
          </ul>

          <h3>Requirements/Skills</h3>

          <ul>
            <li>NVQ Level 3 Electrical</li>
            <li>18th Edition Qualified</li>
            <li>Testing Inspection 2391 or Equivalent</li>
            <li>ECS card and industry training up to date</li>
            <li> Minimum 2 years’ experience</li>
          </ul>

          <h3>Benefits</h3>

          <ul>
            <li>Company vehicle</li>
            <li>Company pension</li>
            <li> Fuel card</li>
            <li>20 days annual leave plus bank</li>
            <li> Generous Overtime rates</li>
          </ul>
          <h3>Schedule</h3>

          <ul>
            <li>Monday to Friday</li>
            <li>Overtime</li>
            <li>Weekend availability</li>
          </ul>
        </div>
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
            <button
              type="button"
              className="button"
              onClick={handleSubmitMessage}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
        <div className="text-container-5">
          <h1>
            Need more <br />
            information? <br />
            Complete the
            <br /> contact form and <br />
            we’ll be in touch.
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Electrician;
