import React, { memo, useState, Suspense } from "react";
import routes from "@/router";
import { useRoutes } from "react-router-dom";

import { Layout } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FDContentWrapper } from "./style";
const { Content } = Layout;

function RouteElement() {
  const element = useRoutes(routes);
  // const meta = useRoutes(routes);
  const { props } = useRoutes(routes);
  // window.onunload = () => {
  //   localStorage.clear();
  // };
  // if (!localStorage.getItem("login")) {
  //   window.location.href = "/#/login";
  // }
  return element;
}

const FDAppContent = memo(() => {
  return (
    <FDContentWrapper>
      <Content
        className="site-layout-background"
        style={{
          padding: 10,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Suspense fallback={<LoadingOutlined />}>
          <RouteElement />
        </Suspense>
      </Content>
    </FDContentWrapper>
  );
});

export default FDAppContent;
