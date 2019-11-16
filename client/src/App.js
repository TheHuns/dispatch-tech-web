import React from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import MainDisplay from "./components/MainDisplay";
import ticketReducer from "./store/reducers/tickets";

const rootReducer = combineReducers({
  tickets: ticketReducer
});

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="outer-container">
          <Navbar />
          <MainDisplay />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
