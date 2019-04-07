import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Navbar extends Component {
  render() {
    return (
      <Header style={{ background: "#fff" }}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
          overflowedIndicator={<Icon type="bars" />}
          style={{ lineHeight: "64px" }}
        >
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
      </Header>
    );
  }
}
export default Navbar;
