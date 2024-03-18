import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>{/* your routes */}</Routes>
        {/* rest of your code */}
      </div>
    </BrowserRouter>
  );
}

export default App;
