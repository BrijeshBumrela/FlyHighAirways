import React, { Component } from "react";

import FlightForm from "../../components/FlightForm/FlightForm";
import Header from "../../components/Header/Header";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header isMobile={this.state.isMobile} />
        <FlightForm />
      </div>
    );
  }
}

export default HomePage;
