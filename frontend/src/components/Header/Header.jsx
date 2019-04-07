import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Drawer } from "antd";
import classes from "./Header.module.css";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
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
    return (
      <nav className={classes.menuBar}>
        {/* <Header style={{ background: "#fff" }}> */}
        <div className={classes.logo}>
          <a href="">LOGO</a>
        </div>

        <div className={classes.menuCon}>
          <div className={classes.leftMenu}>
            <Menu
              theme="light"
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              overflowedIndicator={<Icon type="bars" />}
              style={{ lineHeight: "66px", borderBottom: "0" }}
            >
              {/* <Menu.Item key="0" disbled>
              <img
                alt="logo"
                src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
                height="64px"
                style={{ display: "inline" }}
              />
            </Menu.Item> */}

              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>

              <Menu.Item key="mail">
                <a href="">Home</a>
              </Menu.Item>
              <SubMenu title={<span>Blogs</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="#">Contact Us</a>
              </Menu.Item>
            </Menu>
          </div>
          <div
            className={classes.rightMenu}
            // style={{ display: "inline-block", float: "right" }}
          >
            <Menu
              theme="light"
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              overflowedIndicator={<Icon type="bars" />}
              style={{ lineHeight: "66px", borderBottom: "0" }}
            >
              <SubMenu
                style={{ float: "right" }}
                title={
                  <span>
                    <Icon type="setting" />
                    Navigation Three - Submenu
                  </span>
                }
              >
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </div>
          <Button
            className={classes.barsMenu}
            type="primary"
            onClick={this.showDrawer}
            // style={{
            //   float: "right",
            //   display: "none",
            //   background: "none"
            // }}
          >
            <span className={classes.barsBtn} />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Menu
            // theme="light"
            // mode="horizontal"
            // // defaultSelectedKeys={["2"]}
            // overflowedIndicator={<Icon type="bars" />}
            // style={{ lineHeight: "64px" }}
            >
              {/* <Menu.Item key="0" disbled>
              <img
                alt="logo"
                src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
                height="64px"
                style={{ display: "inline" }}
              />
            </Menu.Item> */}

              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>

              <Menu.Item key="mail">
                <a href="">Home</a>
              </Menu.Item>
              <SubMenu title={<span>Blogs</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="#">Contact Us</a>
              </Menu.Item>
              {/* </Menu>
          </div>
          <div style={{ display: "inline-block", float: "right" }}>
            <Menu
              theme="light"
              mode="hori0 50pxzontal"
              // defaultSelectedKeys={["2"]}
              overflowedIndicator={<Icon type="bars" />}
              style={{ lineHeight: "64px" }}
            > */}
              <SubMenu
                style={{ float: "right" }}
                title={
                  <span>
                    <Icon type="setting" />
                    Navigation Three - Submenu
                  </span>
                }
              >
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Drawer>
        </div>
        {/* </Header> */}
      </nav>
    );
  }
}
export default Navbar;
