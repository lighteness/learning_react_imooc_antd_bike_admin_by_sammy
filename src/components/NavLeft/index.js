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

  renderMenu = (data) => {
    let ret = data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      );
    });
    console.log(ret);
    return ret;
  };
  // 菜单渲染;
  // renderMenu = (data) => {
  //   return data.map((item) => {
  //     if (item.children) {
  //       return (
  //         <SubMenu title={item.title} key={item.key}>
  //           {this.renderMenu(item.children)}
  //         </SubMenu>
  //       );
  //     }
  //     return (
  //       <Menu.Item title={item.title} key={item.key}>
  //         <NavLink to={item.key}>{item.title}</NavLink>
  //         {item.title}
  //       </Menu.Item>
  //     );
  //   });
  // };

  test = () => {
    return (
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="setting" />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    );
  };

  render() {
    //console.log(this.state.menuTreeNode)
    return (
      <Menu onClick={handleClick} style={{ width: "200px" }} mode="vertical">
        {this.state.menuTreeNode}
      </Menu>
    );
  }
  // render() {
  //   return (
  //     <Menu>
  //       <Menu.Item>首页</Menu.Item>
  //       <SubMenu title="UI">
  //         <Menu.Item>按钮</Menu.Item>
  //         <Menu.Item>弹框</Menu.Item>
  //         <Menu.Item>Loading</Menu.Item>
  //         <Menu.Item>通知提醒</Menu.Item>
  //         <Menu.Item>全局Message</Menu.Item>
  //       </SubMenu>
  //     </Menu>
  //   );
  // }
}

function handleClick(e) {
  console.log("click", e);
}

export default NavLeft;
