import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import "./customstyle.css";
const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menu-bar">
        <ComponentSlider
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
          <div className="menu-item">Web check in </div>
          <div className="menu-item">Book a Flight</div>
          <div className="menu-item">Edit a booking</div>

          <div className="menu-item">Group Booking</div>
          <div className="menu-item">Plan B</div>
          <div className="menu-item">Flight Status</div>
        </ComponentSlider>
      </div>
    );
  }
}

export default MenuBar;
