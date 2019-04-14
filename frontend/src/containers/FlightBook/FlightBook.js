import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col, Avatar } from "antd";
import DynamicFieldSet from "../../components/Form/dynamic";
import { Form, Modal, Button } from "antd";
import Paypal from "../../components/Paypal/Paypal";

import classes from './FlightBook.module.css';

const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout;

const WrappedDynamicFieldSet = Form.create({ name: "dynamic_form_item" })(
  DynamicFieldSet
);

// ReactDOM.render(, mountNode);

class FlightBook extends  Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    // this.state = {
    //   messageShown: false,
    //   id: -1 // initialize new state property with a value
    // };
  }

  state = { 
    counts: 0,
    baseFare: 4500,
    luggage: 500,
    gst: 18,
    visible: false
  };

  totalPriceCalculate = () => {
      let sum = 0;
      sum += this.state.counts * this.state.baseFare;
      sum += this.state.luggage;
      const sumWithoutGST = sum * this.state.gst / 100;
      sum += sum * this.state.gst/100;
      return [sum, sumWithoutGST];
  }

  transactionSuccess = (payment) => {

  }

  handler(id) {
    this.setState({
      messageShown: true,
      id: id
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
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

        {/* Modal */}
        <div>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >

            <h1>Your Total Amount is {this.totalPriceCalculate()[0]}</h1>
            <Paypal
                toPay={this.totalPriceCalculate()[0]}
                transactionError={err => this.transactionError(err)}
                transactionCancelled={data => this.transactionCancelled(data)}
                transactionSuccess={payment => this.transactionSuccess(payment)}
            />
          </Modal>
        </div>


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
                      <WrappedDynamicFieldSet 
                        onAdd={this.handleClick} 
                        onSubmit={this.showModal}
                        isFlightSelected={[this.props.selectedFlight, this.state.counts]}  
                      />
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
                    There is limit of 25 kg luggage
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
                  <div className={classes.location}>
                    <h1>{this.props.selectedFlight ? this.props.selectedFlight.source : 'Select'}</h1>
                    <h1>{this.props.selectedFlight ? 'TO' : 'The'}</h1>
                    <h1>{this.props.selectedFlight ? this.props.selectedFlight.destination : 'Locations'}</h1>
                  </div>
                  
                  { this.props.selectedFlight ? (
                    <div className={classes.pricebox}>
                      Base Fare = Rs <span>
                          {this.state.counts === 0 ? 0 : this.state.counts * this.state.baseFare}
                      </span>
                      <br />
                      Luggage Charge = Rs {this.state.luggage}
                      <br />
                      GST = Rs {this.totalPriceCalculate()[1]}
                      <div className={classes.hr}>&nbsp;</div>
                      Total Fare= Rs {this.totalPriceCalculate()[0]}
                    </div>
                  ) : (null)}

                  
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
