import React, { memo } from "react";
import { NavBar, Toast } from "antd-mobile";

import { FDAppNavWraper } from "./style";

const FDAppNavBar = memo((props) => {
  const right = <div style={{ fontSize: 24 }}></div>;

  const back = () =>
    Toast.show({
      content: "点击了返回区域",
      duration: 1000,
    });
  return (
    <FDAppNavWraper>
      <NavBar right={right} onBack={back}>
        标题
      </NavBar>
    </FDAppNavWraper>
  );
});

export default FDAppNavBar;
