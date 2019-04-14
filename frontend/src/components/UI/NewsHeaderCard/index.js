import React from "react";

import Card from "../Card";
import NewsHeader from "./NewsHeader";
import NewsHeaderBackground from "./NewsHeaderBackground";
import { Row, Col } from "antd";
import "./styles.scss";

class NewsHeaderCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { href, title, author, date, thumbnail, tags } = this.props;
    return (
      <div className="card1">
        <h1
          style={{
            textAlign: "left",
            fontFamily: "Sans",
            fontWeight: "bolder"
          }}
        >
          {this.props.title}
        </h1>
        <Row gutter={16}>
          {this.props.flightList.map((flight, index) => {
            return (
              <Col span={6} key={index}>
                <Card className="news-header-card">
                  <NewsHeaderBackground
                    thumbnail={thumbnail}
                    imgUrl={
                      flight.source == null ? `${flight.img}` : `${flight.img1}`
                    }
                  />

                  <NewsHeader
                    title={
                      flight.source == null
                        ? `${flight.destination}`
                        : `${flight.source} - ${flight.destination}`
                    }
                    author={author}
                    date={date}
                    tags={tags}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NewsHeaderCard;
