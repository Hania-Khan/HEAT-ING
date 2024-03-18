import React from "react";
import Header from "./Header"; // adjust the path as needed
import "../Styling/Home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="content">
          <div className="left-content">
            <h2>
              Funded solutions to improve your home's energy efficiency - get
              your FREE boiler today
            </h2>
            <p>
              Under the boiler replacement scheme, many homeowners now have the
              opportunity to receive a brand new boiler under the government’s
              free boiler replacement scheme. This scheme is 100% government
              backed as detailed on the official GOV.UK website.
            </p>
            <p>
              Sunderland based North East Insulation Services Ltd can help with
              the application process, working with homeowners locally and
              nationally. Our experienced team can also help with the
              installation of your new boiler, it’s all part of the service. If
              you are interested in finding out more, just get in touch.
            </p>
          </div>
          <div className="right-content">
            <form>{/* Your form elements */}</form>
          </div>
        </div>
      </div>
      {/* Add other divs here */}
    </div>
  );
};

export default Home;
