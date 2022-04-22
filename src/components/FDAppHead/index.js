import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { FDHeadWraper } from "./style";

const { Header } = Layout;
const { SubMenu } = Menu;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const FDAppHeader = memo(() => {
  return (
    <FDHeadWraper className="header">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="菜品管理">
            <Menu.Item key="3">
              <Link to="/food">查询菜品</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/food">新增菜品</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </FDHeadWraper>
  );
});

export default FDAppHeader;
