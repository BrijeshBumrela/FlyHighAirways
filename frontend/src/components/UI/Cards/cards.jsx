import React, { Component } from "react";
import { Card } from "antd";
class Cards extends Component {
  state = {};
  render() {
    const gridStyle = {
      width: "25%",
      textAlign: "center"
    };

    return (
      <Card>
        <h1 style={{ textAlign: "left", padding: "20px" }}>Plan Your Travel</h1>

        <Card.Grid style={gridStyle}>Content</Card.Grid>

        <Card.Grid style={gridStyle}>Content</Card.Grid>

        <Card.Grid style={gridStyle}>Content</Card.Grid>

        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    );
  }
}

export default Cards;
