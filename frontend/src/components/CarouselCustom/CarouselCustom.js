import React, { Component } from "react";
import { Carousel, Icon } from "antd";
import FlightForm from "../FlightForm/FlightForm";
import classes from "./CarouselCustom.module.css";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ position: "relative" }}>
        <Icon
          type="left-circle"
          theme="filled"
          onClick={this.previous}
          style={{
            position: "absolute",
            zIndex: "190",
            top: "280px",
            left: "45%",
            fontSize: "40px"
          }}
        />
        <div className={classes.parentDiv}>
          <Carousel
            ref={node => (this.carousel = node)}
            {...props}
            style={{ position: "absolute", height: "400px" }}
          >
            <div className={classes.antCarousel}>
              <img alt="<temporary>" src="https://reviewkar.com/wp-content/uploads/2018/06/Skardu.jpg" />
            </div>
            <div className={classes.antCarousel}>
              <img alt="<temporary>" src="http://www.liveenhanced.com/wp-content/uploads/2018/03/B-Ocean-Resort-most-beautiful-places-To-visit-In-florida.jpg" />
            </div>
            <div className={classes.antCarousel}>
              <img alt="<temporary>" src="http://www.jetwayz.com/wp-content/uploads/2012/11/Tourist-Attractions-in-Italy.jpg" />
            </div>
          </Carousel>
        </div>
        <h1 className={classes.childDiv}>
          <FlightForm />
        </h1>
        <Icon
          type="right-circle"
          theme="filled"
          onClick={this.next}
          style={{
            position: "absolute",
            zIndex: "190",
            top: "280px",
            left: "96%",
            fontSize: "40px"
          }}
        />
      </div>
    );
  }
}
