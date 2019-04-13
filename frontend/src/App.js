import React, { Component } from "react";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connect } from "react-redux";

import { authCheckStatus } from "./store/actions/index";

import FlightSearch from "./containers/FlightSearch/FlightSearch";
import Auth from "./containers/Auth/Auth";
import "antd/dist/antd.css";

import FlightBook from "./containers/FlightBook/FlightBook";
import HomePage from "./containers/Homepage/Hompage";
import Navbar from "./components/UI/Navbar/navbar";;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  composeEnhancers,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  componentDidMount() {
    this.props.autoSignUpHandler();
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/flights" component={FlightSearch} />
              <Route path="/book-flight" component={FlightBook} />
              <Route path="/authenticate" component={Auth} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoSignUpHandler: () => dispatch(authCheckStatus())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
