import React, { Component } from "react";

import "font-awesome/css/font-awesome.css";
import CarouselComponent from "../../components/CarouselCustom/CarouselCustom";
import Navbar from "../../components/Header/Header";
import MenuBar from "../../components/HorizontalScrollBar/ScrollBar";
import Footer from "../../components/Footer/Footer";

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
        <Navbar />
        <CarouselComponent />
        <div style={styles}>
          <MenuBar />
        </div>

        {/* <Carousal /> */}
        {/* <Carousal /> */}
        {/* <FlightForm /> */}
<<<<<<< HEAD
=======
        <CarouselComponent />
        <Footer />
>>>>>>> ef64a0dc2a9b02d81903f45102cad59741a3d352
      </div>
    );
  }
}

export default HomePage;
