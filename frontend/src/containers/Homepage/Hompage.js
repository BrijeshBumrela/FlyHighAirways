import React, { Component } from "react";

import FlightForm from "../../components/FlightForm/FlightForm";
import Carousal from "../../components/UI/Carousal/carousal";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Header from "../../components/Header/Header";
import CarouselComponent from "../../components/CarouselCustom/CarouselCustom";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header isMobile={this.state.isMobile} />
        <FlightForm />
        <CarouselComponent />
      </div>
    );
  }
}

export default HomePage;
