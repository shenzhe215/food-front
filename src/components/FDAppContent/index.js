import React, { memo, useState, Suspense } from "react";
import routes from "@/router";
import { useRoutes, Link } from "react-router-dom";

import { menus } from "@/common/local-data";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { FDContentWrapper } from "./style";
const { Content, Sider } = Layout;

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

const { SubMenu } = Menu;

const FDAppContent = memo(() => {
  // other states

  // other hooks

  return (
    <FDContentWrapper>
      {/* <Layout> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 10,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Suspense fallback={<div>page loading</div>}>
            <RouteElement />
          </Suspense>
        </Content>
      {/* </Layout> */}
    </FDContentWrapper>
  );
});

export default FDAppContent;
