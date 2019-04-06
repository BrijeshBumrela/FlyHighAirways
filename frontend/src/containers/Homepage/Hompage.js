import React, { Component } from "react";

import FlightForm from "../../components/FlightForm/FlightForm";
import Carousal from "../../components/UI/Carousal/carousal";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Carousal />
        <FlightForm />
      </React.Fragment>
    );
  }
}

export default HomePage;
