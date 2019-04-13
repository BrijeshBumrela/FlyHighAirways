import React, { Component } from "react";

import "font-awesome/css/font-awesome.css";
import CarouselComponent from "../../components/CarouselCustom/CarouselCustom";
import MenuBar from "../../components/HorizontalScrollBar/ScrollBar";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/UI/Cards/cards";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "50px"
};
class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <CarouselComponent />
        <div style={styles}>
          <MenuBar />
          <Cards />
        </div>

        {/* <Carousal /> */}
        {/* <Carousal /> */}
        {/* <FlightForm /> */}

        <Footer />
      </div>
    );
  }
}

export default HomePage;
