import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styling/Edinburgh.css";
import React, { useState } from "react";
function Edinburgh() {




  return (
    <div>
      <Header />
      <div className="content-1">
        <div className="text-container">
          <h1>
            Insulation experts <br /> in Edinburgh
          </h1>

          <p>
            With over 10 years’ industry experience, North East Insulation
            Services aims <br /> to be your first choice when you're looking for
            a company to help you save <br /> on your energy costs
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
            Making your home <br />
            more energy efficient
          </h1>
          <p>
            If you’re looking for insulation experts in Glasgow, talk to North
            East Insulation Services. Our <br />
            team can help you apply for funding as well as taking care of all
            insulation work. We can install:
          </p>
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
            <a href="/air-source-pumpps" className="button-2">
              Air Source Pumps
            </a>
            <p>
              Air source heat pumps are a new, efficient way to heat your home.
            </p>
          </div>
        </div>
      </div>

      <div className="content-5">
        <div className="form-container-5">
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
        <div className="text-container-5">
          <h1>
            Funding is available <br />
            now for a range of <br />
            energy efficiency
            <br /> measures. Fill in our <br />
            form now to see what’s <br />
            available to you
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

export default Edinburgh;
