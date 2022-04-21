import React, { memo, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FDDockWraper } from "./style";
import { ShopbagOutline } from "antd-mobile-icons";
import { Badge } from "antd-mobile";

import { changePopupVisableAction } from "@/pages/food/store";

const FDDock = memo(() => {
  // state
  const { orderMoney, foodCount, popupVisiable } = useSelector(
    (state) => ({
      orderMoney: state.getIn(["foodState", "orderMoney"]),
      foodCount: state.getIn(["foodState", "foodCount"]),
      popupVisiable: state.getIn(["foodState", "popupVisiable"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // hooks
  const handleClick = () => {
    dispatch(changePopupVisableAction(!popupVisiable));
  };

  // other hooks
  const handleOrder = () => {
    navigate("/submitorder");
  };
  return (
    <FDDockWraper>
      <div className="dockLeft" onClick={handleClick}>
        <Badge content={foodCount}>
          <ShopbagOutline className="shopIcon" />
        </Badge>
      </div>
      <div className="dockMiddle" onClick={handleClick}>
        <div className="dockMoney">{orderMoney} ￥</div>
        <div className="sendMoney">预估另需配送费￥{0.3}</div>
      </div>
      <div className="dockRight" onClick={handleOrder}>
        {/* 差￥{5}起送 */}
        去结算
      </div>
    </FDDockWraper>
  );
});

export default FDDock;
