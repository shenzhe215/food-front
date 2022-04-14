import React, { memo, Suspense } from "react";

import routes from "@/router";
import {
  Link,
  Navigate,
  Route,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./style.css";
import {
  ContentWrapper,
  SiderMenuWrapper,
  ContentInsideWrapper,
} from "./style";
function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

const FDAppContent = memo(() => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  return (
    <ContentWrapper>
      <SiderMenuWrapper className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="客户管理">
            <Menu.Item key="1">
              <Link to="/memberservice/list">查询客户</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/memberservice/member">新增客户</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="菜品管理">
            <Menu.Item key="3">
              <Link to="/foodservice/list">查询菜品</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/foodservice/food">新增菜品</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="test" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">
              <Link to="/test/table">test</Link>
            </Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </SiderMenuWrapper>
      <ContentInsideWrapper>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<div>page loading</div>}>
              <RouteElement />
            </Suspense>
          </Content>
        </Layout>
      </ContentInsideWrapper>
    </ContentWrapper>
  );
});

export default FDAppContent;
