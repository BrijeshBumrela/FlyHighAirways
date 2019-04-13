import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import { Card } from "antd";

import "./customstyle.css";
const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class MenuBar extends React.Component {
  render() {
    return (
      <Card className="menu-bar" style={{ lineHeight: "1.5" }}>
        <div>
          <ComponentSlider
            renderLeftArrow={renderLeftArrow}
            renderRightArrow={renderRightArrow}
          >
            <div className="menu-item">
              <Card.Grid
                style={{
                  width: "300px",
                  display: "inline-block"
                  // padding: "15px 10px"
                }}
              >
                Web check in{" "}
              </Card.Grid>
            </div>
            <div className="menu-item">
              <Card.Grid className="menu-item">Book a Flight </Card.Grid>
            </div>
            <div className="menu-item">
              <Card.Grid className="menu-item">Edit a Booking</Card.Grid>
            </div>
            <div className="menu-item">
              <Card.Grid className="menu-item">Group Booking </Card.Grid>
            </div>
            <div className="menu-item">
              <Card.Grid className="menu-item">Plan B </Card.Grid>
            </div>
            <div className="menu-item">
              <Card.Grid className="menu-item">Flight Status </Card.Grid>
            </div>

            {/* <Card.Grid className="menu-item">Book a Flight </Card.Grid>
            <Card.Grid className="menu-item">Edit a booking </Card.Grid>
            <Card.Grid className="menu-item">Web check in </Card.Grid>
            <Card.Grid className="menu-item">Web check in </Card.Grid> */}

            {/* <div className="menu-item">Book a Flight</div>
            <div className="menu-item">Edit a booking</div>

            <div className="menu-item">Group Booking</div>
            <div className="menu-item">Plan B</div>
            <div className="menu-item">Flight Status</div> */}
          </ComponentSlider>
        </div>
      </Card>
    );
  }
}

export default MenuBar;
