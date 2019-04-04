import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux';



import { authCheckStatus } from "./store/actions/index";

// import FlightBook from "./containers/FlightBook/FlightBook";
import FlightSearch from "./containers/FlightSearch/FlightSearch";
import HomePage from "./containers/Homepage/Hompage";
import Auth from "./containers/Auth/Auth";


class App extends Component {

    componentDidMount() {
        this.props.autoSignUpHandler();
    }
  
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/flights" component={FlightSearch} />
                {/* <Route path="/book-flight" component={FlightBook} /> */}
                {/* <Route path="/book-flight" /> */}
                <Route path="/authenticate" component={Auth} />
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        autoSignUpHandler: () => dispatch(authCheckStatus())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
