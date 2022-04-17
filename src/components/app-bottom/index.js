import React, { memo } from "react";

import { tabs } from "@/common/local-data";

import { AppBottomWrapper } from "./style";
import { NavBar, TabBar } from "antd-mobile";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

const FDAppBottom = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isVisible } = useSelector(
    (state) => ({
      isVisible: state.getIn(["bottomState", "isVisible"]),
    }),
    shallowEqual
  );

  const { pathname } = location;
  const setRouteActive = (value) => {
    navigate(value);
  };

  return (
    <AppBottomWrapper>
      {isVisible && (
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      )}
    </AppBottomWrapper>
  );
});

export default FDAppBottom;
