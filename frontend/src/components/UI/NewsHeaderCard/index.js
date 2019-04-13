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
          Travel with our Airlines
        </h1>
        <Row gutter={16}>
          <Col span={6}>
            <Card className="news-header-card">
              <NewsHeaderBackground
                thumbnail={thumbnail}
                imgUrl="http://alldatmatterz.com/img/article/764/%E0%A4%95%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20%E0%A4%AE%E0%A4%A8%E0%A4%BE%E0%A4%B2%E0%A5%80.jpg"
              />

              <NewsHeader
                title="Manali"
                author={author}
                date={date}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="news-header-card">
              <NewsHeaderBackground
                thumbnail={thumbnail}
                imgUrl="https://scoutmytrip.com/blog/wp-content/uploads/2018/04/Places-to-visit-in-Darjeeling-Featured.jpg"
              />

              <NewsHeader
                title="Darjeeling"
                author={author}
                date={date}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="news-header-card">
              <NewsHeaderBackground
                thumbnail={thumbnail}
                imgUrl="https://i.pinimg.com/originals/71/41/ff/7141fff9e2dfc82f159c9496dac3747b.jpg"
              />

              <NewsHeader
                title="Rajasthan"
                author={author}
                date={date}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="news-header-card">
              <NewsHeaderBackground
                thumbnail={thumbnail}
                imgUrl="https://scoutmytrip.com/blog/wp-content/uploads/2018/05/Hill-stations-in-India-Featured.jpg"
              />

              <NewsHeader
                title="Shillong"
                author={author}
                date={date}
                tags={tags}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewsHeaderCard;
