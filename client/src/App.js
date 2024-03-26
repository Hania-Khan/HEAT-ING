import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import Careers from "./Screens/Careers";
import Contact from "./Screens/Contact";
import Solar from "./Screens/Solar";
import FAQs from "./Screens/FAQs";
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
          <Route path="/faqs" element={<FAQs/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
