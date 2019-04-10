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
        <div className={classes.logo}>
          <a href="">LOGO</a>
        </div>

        <div className={classes.menuCon}>
          <div className={classes.leftMenu}>
            <Menu
              theme="light"
              mode="horizontal"
              overflowedIndicator={<Icon type="bars" />}
              style={{ lineHeight: "66px", borderBottom: "0" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>

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
          <div className={classes.rightMenu}>
            <Menu
              theme="light"
              mode="horizontal"
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
          >
            <span className={classes.barsBtn} />
          </Button>
          <Drawer
            title="side bar"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Menu>
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
      </nav>
    );
  }
}
export default Navbar;
