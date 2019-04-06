import React from "react";

import { Carousel } from "antd";
import classes from "./Carousal.module.css";
import FlightForm from "../../FlightForm/FlightForm";

const Carousal = () => {
  return (
    <div className={classes.parentDiv}>
      <Carousel effect="fade">
        <div className={[classes.antCarousel, classes.slickSlide].join(" ")}>
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" />
        </div>
        <div className={[classes.antCarousel, classes.slickSlide].join(" ")}>
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg" />
        </div>
        <div className={[classes.antCarousel, classes.slickSlide].join(" ")}>
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" />
        </div>
        <div className={[classes.antCarousel, classes.slickSlide].join(" ")}>
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg" />
        </div>
      </Carousel>

      <h1 className={classes.childDiv}>
        <FlightForm />
      </h1>
    </div>
  );
};

export default Carousal;
