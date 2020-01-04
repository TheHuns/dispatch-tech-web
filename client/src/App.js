import React, {useEffect} from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import MainDisplay from "./components/MainDisplay";
import ticketReducer from "./store/reducers/tickets";

// Create redux store --- could be in separate file if it gets more complex
const rootReducer = combineReducers({
  tickets: ticketReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

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
