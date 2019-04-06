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
      <div>
        <Icon type="left-circle" onClick={this.previous} />
        <Carousel ref={node => (this.carousel = node)} {...props}>
          <div>
            <img src="http://wowslider.com/sliders/demo-93/data1/images/lake.jpg" />
          </div>
          <div>
            <img src="http://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" />
          </div>
          <div>
            <img src="http://wowslider.com/sliders/demo-93/data1/images/lake.jpg" />
          </div>
        </Carousel>
        <Icon type="right-circle" onClick={this.next} />
      </div>
    );
  }
}
