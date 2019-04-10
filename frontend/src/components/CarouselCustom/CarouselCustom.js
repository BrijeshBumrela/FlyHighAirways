import React, { Component } from "react";
import { Carousel, Icon } from "antd";

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
          onClick={this.previous}
          style={{ position: "absolute", zIndex: "190", top: "109px" }}
        />
        <Carousel
          ref={node => (this.carousel = node)}
          {...props}
          style={{ position: "absolute" }}
        >
          <div>
            <img
              alt="img"
              src="http://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            />
          </div>
          <div>
            <img
              alt="img"
              src="http://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            />
          </div>
          <div>
            <img
              alt="img"
              src="http://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            />
          </div>
        </Carousel>
        <Icon
          type="right-circle"
          onClick={this.next}
          style={{
            position: "absolute",
            zIndex: "190",
            top: "10px",
            left: "99%"
          }}
        />
      </div>
    );
  }
}
