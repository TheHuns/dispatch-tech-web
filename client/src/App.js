import React from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainDisplay from "./components/MainDisplay";
import { TicketContextProvider } from "./Context";

function App() {
  return (
    <TicketContextProvider>
    <Router>
      <div className="outer-container">
        <Navbar />
        <MainDisplay />
      </div>
    </Router>

    </TicketContextProvider>
  );
}

export default App;
