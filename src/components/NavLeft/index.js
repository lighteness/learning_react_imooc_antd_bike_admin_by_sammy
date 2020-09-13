import React from "react";
import { Row, Col } from "antd";
import { Menu, Icon } from "antd";

import { NavLink } from "react-router-dom";
import MenuConfig from "./../../config/menuConfig";
import "./index.less";
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
  constructor(props) {
    super(props);

    this.setState({
      currentKey: "",
      menuTreeNode: null,
    });
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode,
    });
  }

  // 菜单渲染;
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
          {item.title}
        </Menu.Item>
      );
    });
  };

  render() {
    //console.log(this.state.menuTreeNode)
    return (
      <Menu onClick={handleClick} mode="vertical">
        {this.state.menuTreeNode}
      </Menu>
    );
  }
}

function handleClick(e) {
  console.log("click", e);
}

export default NavLeft;
