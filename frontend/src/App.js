import React, { Component } from "react";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import { authCheckStatus } from "./store/actions/index";

import FlightSearch from "./containers/FlightSearch/FlightSearch";
import Auth from "./containers/Auth/Auth";
// import Home from "./containers/Homepage/LandingPage";
import "antd/dist/antd.css";

// import reducer from "./store/reducers/reducer";
import FlightBook from "./containers/FlightBook/FlightBook";
import NavBar from "./components/UI/Navbar/navbar";

import CheckIn from "./containers/CheckIn/CheckIn";
import HomePage from "./containers/Homepage/Hompage";

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
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/flights" component={FlightSearch} />
              <Route path="/book-flight" component={FlightBook} />
              {/* <Route path="/book-flight" /> */}
              <Route path="/authenticate" component={Auth} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <Switch>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/home" exact component={Home} />
//             <Route path="/flights" component={FlightSearch} />
//             <Route path="/book-flight" component={FlightBook} />
//             <Route path="/checkin" component={CheckIn} />

//             {/* <Route path="/book-flight" /> */}
//             <Route path="/authenticate" component={Auth} />
//           </Switch>
//         </BrowserRouter>
//       </Provider>
//     );
//   }

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
