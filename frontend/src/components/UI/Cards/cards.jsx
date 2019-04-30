import React, { Component } from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import classes from "./Cards.module.css";
class Cards extends Component {
  state = {};
  render() {
    const { Meta } = Card;

    return (
      <div className={classes.card1}>
        <h1 style={{ textAlign: "left", fontFamily: "Sans" }}>
          Travel with our Airlines
        </h1>
        <Row gutter={16}>
          <Col span={6}>
            <Card
              hoverable="true"
              bordered="true"
              style={{ with: 240 }}
              cover={
                <div className={[classes.container, classes.zoom].join(" ")}>
                  <img
                    src="https://scoutmytrip.com/blog/wp-content/uploads/2018/04/Places-to-visit-in-Darjeeling-Featured.jpg"
                    alt="Avatar"
                    className={classes.image}
                  />
                  <div className={classes.overlay} />
                </div>
              }
            >
              <Meta title="Darjeeling" style={{ fontFamily: "sans" }} />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable="true"
              bordered="true"
              style={{ with: 240 }}
              cover={
                <div className={classes.container}>
                  <img
                    src="https://i.pinimg.com/originals/71/41/ff/7141fff9e2dfc82f159c9496dac3747b.jpg"
                    alt="Avatar"
                    className={classes.image}
                  />
                  <div className={classes.overlay} />
                </div>
              }
            >
              <Meta title="Jaipur" style={{ fontFamily: "sans" }} />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable="true"
              bordered="true"
              style={{ with: 240 }}
              cover={
                <div className={classes.container}>
                  <img
                    src="https://scoutmytrip.com/blog/wp-content/uploads/2018/05/Hill-stations-in-India-Featured.jpg"
                    alt="Avatar"
                    className={classes.image}
                  />
                  <div className={classes.overlay} />
                </div>
              }
            >
              <Meta title="Shillong" style={{ fontFamily: "sans" }} />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable="true"
              bordered="true"
              style={{ with: 240 }}
              cover={
                <div className={classes.container}>
                  <img
                    src="http://alldatmatterz.com/img/article/764/%E0%A4%95%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20%E0%A4%AE%E0%A4%A8%E0%A4%BE%E0%A4%B2%E0%A5%80.jpg"
                    alt="Avatar"
                    className={classes.image}
                  />
                  <div className={classes.overlay} />
                </div>
              }
            >
              <Meta title="Manali" style={{ fontFamily: "sans" }} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
