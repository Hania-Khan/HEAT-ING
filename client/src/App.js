import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import Careers from "./Screens/Careers";
import Contact from "./Screens/Contact";
import Solar from "./Screens/Solar";
import FAQs from "./Screens/FAQs";
import Glasgow from "./Screens/Glasgow";
import Leeds from "./Screens/Leeds";
import Edinburgh from "./Screens/Edinburgh";
import Durham from "./Screens/Durham";
import Grants from "./Screens/Grants";
import Loft from  "./Screens/loft-insulation";
import CavityWall from  "./Screens/cavity-wall-insulation";
import Boiler from  "./Screens/boiler-installations";
import SmartHeating from  "./Screens/smart-heating-controls";
import Electrician from "./Screens/Electrician";
import GasEngineer from "./Screens/GasEngineer";
import RetrofitAssessor from "./Screens/RetrofitAssessor";
import RetrofitCoordinator from "./Screens/RetrofitCoordinator";
import Underfloor from "./Screens/Underfloor";
import AirSource from "./Screens/AirSource";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/glasgow" element={<Glasgow />} />
          <Route path="/leeds" element={<Leeds />} />
          <Route path="/edinburgh" element={<Edinburgh />} />
          <Route path="/durham" element={<Durham />} />
          <Route path="/cavity-wall-insulation" element={<CavityWall />} />
          <Route path="/loft-insulation" element={<Loft />} />
          <Route path="/boiler-installations" element={<Boiler />} />
          <Route path="/smart-heating-controls" element={<SmartHeating />} />
          <Route path="/apply-for-grants-or-funding" element={<Grants />}/>
          <Route path="/underfloor-insulation" element={<Underfloor />}/>
          <Route path="/air-source-pumps" element={<AirSource />}/>
          <Route path="/domestic-electrician-vacancy" element={<Electrician />}/>
          <Route path="/domestic-gas-engineer-vacancy" element={<GasEngineer />}/>
          <Route path="/retrofit-assessor-vacancy" element={<RetrofitAssessor />}/>
          <Route path="/retrofit-coordinator-vacancy" element={<RetrofitCoordinator />}/>
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
