import React from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <Router>
      <div className="outer-container">
        <Navbar />
        <MainDisplay />
      </div>
    </Router>
  );
}

export default App;
