import React, { Component } from "react";
// import { Row, Col, Button, Layout, Sider } from "antd";
import { Layout, Menu, Icon } from "antd";
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
      <Layout>
        {/* <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header> */}
        <Content style={{ padding: "0 50px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {/* <Form /> */}
              {/* <Form>
                {" "} */}
              {/* <DynamicFieldSet /> */}
              <WrappedDynamicFieldSet onAdd={this.handleClick} />
              {/* <DynamicFieldSet form={Form} /> */}
              {/* </Form> */}
            </Content>
            <Sider width={400} style={{ background: "#fff" }}>
              <div>{this.state.counts}</div>
            </Sider>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>FlyHigh Airways ©2018</Footer>
      </Layout>
    );
  }
}

export default FlightBook;
