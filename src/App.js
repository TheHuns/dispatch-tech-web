import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <Router>

    <div className="bg-dark container-fluid h-100" style={{height: '100vh'}}>
      <div className='row h-100'>
      <Navbar />
      <MainDisplay />
      </div>
    </div>
    </Router>
  );
}

export default App;
