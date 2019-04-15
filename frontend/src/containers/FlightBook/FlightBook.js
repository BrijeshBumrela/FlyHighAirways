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
      <React.Fragment>
        <Row
          style={{
            width: "80%",
            margin: "auto",
            paddingTop: "38px"
          }}
        >
          <Content
          // style={{ padding: "0 50px" }}
          >
            <Row
            // style={{ padding: "24px 0", background: "rgb(240, 242, 245)" }}
            >
              <Col
                lg={19}
                sm={14}
                style={{
                  padding: "0 24px",
                  minHeight: 280,
                  maxWidth: "75%",
                  borderRight: "1px solid #ebedf0"

                  // background: "rgb(240, 242, 245)"
                }}
              >
                <div
                // style={{ border: " 1px solid #ebedf0", background: "white" }}
                >
                  <Row
                    style={{
                      borderBottom: "1px solid #ebedf0",
                      padding: "10px"
                    }}
                  >
                    <Col sm={2}>
                      <div>
                        <Avatar size={64} icon="user" />
                      </div>
                    </Col>
                    <Col>
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
                  </Row>

                  <Row
                    style={{
                      borderBottom: "1px solid #ebedf0",
                      padding: "10px"
                    }}
                  >
                    <Col
                      sm={24}
                      lg={20}
                      // sm={24}
                      // xs={24}
                      style={{
                        padding: "15px 85px"
                      }}
                    >
                      <WrappedDynamicFieldSet onAdd={this.handleClick} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h1
                        style={{
                          padding: "16px",
                          fontSize: "22px",
                          paddingLeft: "70px"
                        }}
                      >
                        <Icon type="shopping-cart" />
                        &nbsp;&nbsp;Add Aditional Baggage
                      </h1>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      borderBottom: "1px solid #ebedf0",
                      padding: "10px 85px"
                    }}
                  >
                    There is limit of 25 kg luggage per person
                  </Row>
                </div>
              </Col>
              <Col lg={6} style={{ background: "#fff", padding: "0 24px" }}>
                <div
                  style={{
                    background: "black",
                    color: "white",
                    fontSize: "19px",
                    textAlign: "center"
                  }}
                >
                  Pricing Summary
                </div>
                <div style={{ padding: "10px" }}>
                  <h3 style={{ color: "red" }}>Kolkata to Mumbai</h3>
                  Ticket Cost = Rs 4500
                  <br />
                  Extra charges for Luggage = Rs 500 -/
                  <br />
                  Total Fare ={" "}
                  {this.state.counts === 0 ? 0 : this.state.counts * 4500 + 500}
                </div>
              </Col>
            </Row>
          </Content>
        </Row>
      </React.Fragment>
    );
  }
}

export default FlightBook;
