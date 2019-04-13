import React from "react";
import { Row, Col } from "antd";
import Card from "../Card";
import CardContent from "./CardContent";
import CardOverlay from "./CardOverlay";
import "./styles.scss";

class TaggedContentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { href, thumbnail, title, description, tags } = this.props;
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
            <Card className="tagged-content-card">
              <CardOverlay thumbnail={thumbnail} />
              <CardContent
                thumbnail={thumbnail}
                title={title}
                description={description}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="tagged-content-card">
              <CardOverlay thumbnail={thumbnail} />
              <CardContent
                thumbnail={thumbnail}
                title={title}
                description={description}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="tagged-content-card">
              <CardOverlay thumbnail={thumbnail} />
              <CardContent
                thumbnail={thumbnail}
                title={title}
                description={description}
                tags={tags}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="tagged-content-card">
              <CardOverlay thumbnail={thumbnail} />
              <CardContent
                thumbnail={thumbnail}
                title={title}
                description={description}
                tags={tags}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TaggedContentCard;
