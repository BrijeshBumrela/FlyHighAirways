import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { authCheckStatus } from "./store/actions/index";

import FlightSearch from "./containers/FlightSearch/FlightSearch";
import Auth from "./containers/Auth/Auth";
// import Home from "./containers/Homepage/LandingPage";
import "antd/dist/antd.css";

// import reducer from "./store/reducers/reducer";
import FlightBook from "./containers/FlightBook/FlightBook";
import CheckIn from "./containers/CheckIn/CheckIn";
import HomePage from "./containers/Homepage/Hompage";

class App extends Component {
  componentDidMount() {
    this.props.autoSignUpHandler();
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/home" exact component={Home} /> */}
        <Route path="/flights" component={FlightSearch} />
        <Route path="/book-flight" component={FlightBook} />
        <Route path="/checkin" component={CheckIn} />

        <Route path="/authenticate" component={Auth} />
      </Switch>
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
