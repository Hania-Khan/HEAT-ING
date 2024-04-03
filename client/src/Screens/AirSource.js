import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
import LottieAnimation from "./lottie";
import appLogo from "../img/app-logo.png";
import boiler1 from "../img/boiler1.jpg";
import boiler from "../img/boiler.png";
import { Link } from "react-router-dom";
function AirSource() {

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
        
            <h1>Free cavity wall<br />  insulation and <br /> installation
            </h1>
        
          <p>
            North East Insulation Services specialises in the ECO4 scheme. Based in Sunderland, we provide insulation services nationwide.
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
            Cavity wall insulation<br /> for homeowners and <br />landlords
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
            <a href="/apply-for-grants-or-funding" className="button-2">
              Apply for Grant
            </a>
          </div>
        </div>

        <div className="image-container-2">
          <img src={boiler1} alt="App Logo" className="image-2" />
        </div>
      </div>

      <div className="content-3">
        <div className="text-container-3">
          <h1>Are your walls suitable for insulation?</h1>
          <p>
          A cavity wall, as the name suggests, is one that has an empty space between the inner and outer walls. You can usually spot a cavity wall if the brickwork has an even pattern and bricks that are laid lengthways.
          </p>
          <p>The majority of homes built after the 1930s have cavity walls. If you’re not sure, get in touch and we can take a look. If your walls are solid then solid wall-specific insulation is also available.</p>
        </div>
       </div>
       <div className="content-2">
        <div className="text-container-2">
          <h1>
            
Why insulate your walls?
          </h1>
          <p>
          Cavity wall insulation can reduce the amount of heat loss giving you a warmer home and increased energy efficiency. It can also result in less sound penetration, making your home, or a specific area of your home much more soundproof! In addition to cavity wall insulation, underfloor insulation and loft insulation.
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


        <div className="content-4">
          <div className="text-container-4">
            <h1>We also offer:</h1>
            <div className="buttons-container-2">
            <a href="/cavity-wall-insulation" className="button-2">
              Cavity Wall Insulation
            </a>
            <p>Save on your heating bills with our cavity wall insulation.</p>
          </div>
          <div className="buttons-container-2">
            <a href="/loft-insulation" className="button-2">
              Loft Insulation
            </a>
            <p>Our loft insulation stops heat escaping out of your loft.</p>
          </div>
          <div className="buttons-container-2">
            <a href="/smart-heating-controls" className="button-2">
              Smart Heating Controls
            </a>
            <p>
              Control your heating temperature and schedule with just a few taps
              on an app.
            </p>
          </div>
          <div className="buttons-container-2">
            <a href="/underfloor-insulation" className="button-2">
              Underfloor Insulation
            </a>
            <p>
              Control your heating temperature and schedule with just a few taps
              on an app.
            </p>
          </div>
          <div className="buttons-container-2">
            <a href="/air-source-pumps" className="button-2">
              Air Source Pumps
            </a>
            <p>
              Air source heat pumps are a new, efficient way to heat your home.
            </p>
          </div>
          
            
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
Considering cavity <br /> wall insulation for <br />your home? Fill in <br />North East Insulation <br />Services’ funding <br />form to see what help <br />is available.
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

export default AirSource;
