import React, { Component } from "react";

import FlightForm from "../../components/FlightForm/FlightForm";
import Carousal from "../../components/UI/Carousal/carousal";
import "font-awesome/css/font-awesome.css";
import CarouselComponent from "../../components/CarouselCustom/CarouselCustom";
import { Layout, Menu, Icon } from "antd";
import Navbar from "../../components/Header/Header";
import MenuBar from "../../components/HorizontalScrollBar/ScrollBar";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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
      </div>
    );
  }
}

export default HomePage;
