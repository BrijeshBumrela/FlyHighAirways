import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Avatar } from "antd";
import { Drawer, List, Divider, Col, Row } from "antd";
import Cards from "./../../components/UI/Cards/cards";
import Cards1 from "./../../components/UI/Cards1/cards";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);
class DashBoard extends Component {
  state = { visible: false, placement: "left" };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const pastFlights = [
      {
        source: "CHENNAI",
        destination: "MUMBAI",
        Date: "20th March, 2017",
        departureTime: "13:50 IST"
      },
      {
        source: "DELHI",
        destination: "KOLKATA",
        Date: "28th June, 2018",
        departureTime: "13:50 IST"
      }
    ];
    const bookedFlights = [
      {
        source: "Lucknow",
        destination: "Patna",
        Date: "20th July, 2019",
        departureTime: "13:50 IST"
      },
      {
        source: "CHENNAI1",
        destination: "MUMBAI",
        Date: "30th August, 2019",
        departureTime: "13:50 IST"
      },
      {
        source: "DELHI1",
        destination: "KOLKATA",
        Date: "30th August, 2019",
        departureTime: "13:50 IST"
      },
      {
        source: "DELHIdad1",
        destination: "KOLKATA",
        Date: "30th August, 2019",
        departureTime: "13:50 IST"
      }
    ];
    return (
      <Layout style={{ marginTop: "75px" }}>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
                key="sub2"
              >
                <Menu.Item key="5">option5</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "10px 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <div>
                <List
                  dataSource={[
                    {
                      name: "Wilson"
                    }
                  ]}
                  bordered
                  renderItem={item => (
                    <List.Item
                      key={item.id}
                      actions={[<a onClick={this.showDrawer}>View Profile</a>]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                        }
                        title={
                          <a
                            href="https://ant.design/index-cn"
                            style={{ fontSize: "25px" }}
                          >
                            {item.name}
                          </a>
                        }
                      />
                    </List.Item>
                  )}
                />
                <Drawer
                  width={500}
                  placement="left"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                  <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                  <p style={pStyle}>Personal</p>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem
                        title="Full Name"
                        content="wilson Patro"
                      />{" "}
                    </Col>
                    <Col span={12}>
                      <DescriptionItem
                        title="Account"
                        content="ronytowilson3097@gmail.com.com"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem title="City" content="Nagpur" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem
                        title="Birthday"
                        content="July 30,1997"
                      />
                    </Col>
                  </Row>

                  <Divider />

                  <p style={pStyle}>Contacts</p>
                  <Row>
                    <Col span={12}>
                      <DescriptionItem
                        title="Email"
                        content="ronytowilson3097@gmail.com"
                      />
                    </Col>
                    <Col span={12}>
                      <DescriptionItem
                        title="Phone Number"
                        content="+91 9123146208"
                      />
                    </Col>
                  </Row>
                </Drawer>
              </div>
              <Divider />
              <div>
                <h1 style={{ fontSize: "25px" }}>Past Bookings</h1>
                <Divider />
                <Cards flightList={pastFlights} />
              </div>
              <Divider />
              <div>
                <h1 style={{ fontSize: "25px" }}>Booked Flights</h1>
                <Divider />
                <Cards1 flightList={bookedFlights} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoard;
