import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
function Contact() {
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
          <h1>
            Contact our <br />
            experienced insulation
            <br /> specialists today
          </h1>

          <p>
            recruiting talented individuals. Working with homes and businesses
            across the UK, North East Insulation <br />
            Services can help you save money on your energy bill. Fill in our
            grant <br />
            application form or contact our team directly.
          </p>
          <div className="buttons-container-2">
            <a href="/about-us" className="button-2">
              ABOUT US
            </a>
          </div>
        </div>
      </div>

      <div className="content-2">
        <div className="text-container-2">
          <h1>
            Our insulation <br />
            specialists can
            <br /> help with:
          </h1>
          <ul>
            <li>Cavity wall insulation</li>
            <li>Loft insulation</li>
            <li>Smart heating controls</li>
            <li>Underfloor insulation</li>
            <li>Air source heat pumps</li>
            <li>Boilers and central heating systems</li>
          </ul>
          <div className="buttons-container-2">
            <a href="/faqs" className="button-2">
              FAQs
            </a>
          </div>
        </div>
        <div className="form-container-2">
          <form>
            <>
              <h1>Our contact details</h1>
              <label>Phone:</label>
              <h2>01916 804575</h2>
              <label>Email</label>
              <a href="mailto:enquires@northeastinsulationservices.co.uk">
                enquires@northeastinsulationservices.co.uk
              </a>
              <label>Address:</label>
              <p>1 Charles Street, Sunderland, SR6 0AN</p>
              <label>Business hours:</label>
              <p>
                Monday – Friday: 9am – 5pm
                <br />
                Saturday and Sunday: closed
              </p>
              <label>Payment methods accepted:</label>
              <p>
                BACS <br />
                Cheque
                <br /> Cash
              </p>
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
            Prefer to email? <br />
            Send us a message <br />
            via the form and
            <br /> we'll respond as
            <br /> soon as we can.
          </h1>

          {/* <div className="buttons-container-5">
            <a href="/" className="button-5">
              APPLY FOR A GRANT
            </a>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
