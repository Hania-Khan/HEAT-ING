import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import Careers from "./Screens/Careers";
import Contact from "./Screens/Contact";
import Solar from "./Screens/Solar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <AboutUs />
        <Careers />
        <Contact />
        <Solar />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
