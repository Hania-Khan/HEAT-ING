import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/AboutUs.css";
import React, { useState } from "react";
function Careers() {
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
                <a href="/domestic-electrician-vacancy" className="button-2">
                  DOMESTIC ELECTRICIAN
                </a>
              </div>
              <div className="buttons-container-2-2">
                <a href="/domestic-gas-engineer-vacancy" className="button-2">
                  DOMESTIC GAS ENGINEER
                </a>
              </div>
              <div className="buttons-container-2-3">
                <a href="/retrofit-assessor-vacancy" className="button-2">
                  RETROFIT ASSESSOR
                </a>
              </div>
              <div className="buttons-container-2-4">
                <a href="/retrofit-coordinator-vacancy" className="button-2">
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
            Need more
            <br /> information?
            <br /> Complete the <br />
            contact form and <br />
            we’ll be in touch.
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

export default Careers;
