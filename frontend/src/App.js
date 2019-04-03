import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import FlightSearch from "./containers/FlightSearch/FlightSearch";
import HomePage from "./containers/Homepage/Hompage";
import Auth from "./containers/Auth/Auth";

import "antd/dist/antd.css";

import reducer from "./store/reducers/reducer";
// import FlightBook from "./containers/FlightBook/FlightBook";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/flights" component={FlightSearch} />
            {/* <Route path="/book-flight" component={FlightBook} /> */}
            {/* <Route path="/book-flight" /> */}
            <Route path="/authenticate" component={Auth} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
