import React, { Component } from "react";
// import { Row, Col, Button, Layout, Sider } from "antd";
import { Layout, Menu, Icon, Row, Col, Avatar } from "antd";
// import Form from "../../components/Form/form";
import DynamicFieldSet from "../../components/Form/dynamic";
import { Form } from "antd";
const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout;

const WrappedDynamicFieldSet = Form.create({ name: "dynamic_form_item" })(
  DynamicFieldSet
);

// ReactDOM.render(, mountNode);

class FlightBook extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    // this.state = {
    //   messageShown: false,
    //   id: -1 // initialize new state property with a value
    // };
  }

  state = { counts: 0 };

  handler(id) {
    this.setState({
      messageShown: true,
      id: id
    });
  }

  handleClick = e => {
    console.log(e);
    this.setState({
      counts: e
    });
  };

  render() {
    return (
      <Layout
        style={{
          background: "#f0f2f5",
          paddingTop: "38px"
        }}
      >
        <Content style={{ padding: "0 50px" }}>
          <Row style={{ padding: "24px 0", background: "rgb(240, 242, 245)" }}>
            <Col
              sm={14}
              style={{
                padding: "0 24px",
                minHeight: 280,
                maxWidth: "75%"
                // background: "rgb(240, 242, 245)"
              }}
            >
              <div
                style={{ border: " 1px solid #ebedf0", background: "white" }}
              >
                <Row
                  style={{ borderBottom: "1px solid #ebedf0", padding: "10px" }}
                >
                  <Col sm={2}>
                    <div>
                      <Avatar size={64} icon="user" />
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <h1
                      style={{
                        padding: "16px",
                        fontSize: "22px",
                        paddingLeft: "70px"
                      }}
                    >
                      Aaquib Niaz
                    </h1>
                  </Col>
                  {/* <Col>Name of the passenger</Col> */}
                </Row>

                <Row>
                  <Col
                    lg={14}
                    // sm={24}
                    // xs={24}
                    style={{
                      padding: "15px 15px",
                      borderRight: "1px solid #ebedf0"
                    }}
                  >
                    <WrappedDynamicFieldSet onAdd={this.handleClick} />
                  </Col>
                  <Col sm={10} style={{ padding: "15px 15px" }}>
                    <WrappedDynamicFieldSet onAdd={this.handleClick} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={5} style={{ background: "#fff" }}>
              <div>{this.state.counts}</div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>FlyHigh Airways ©2018</Footer>
      </Layout>
    );
  }
}

export default FlightBook;
