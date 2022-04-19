import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NavBar } from "antd-mobile";
import { FDSubmitOrderWraper } from "./style";
import FDFoodItem from "@/components/food-item";
import FDPayDock from "@/components/order-pay-dock";
const FDFoodSubmitOrder = memo(() => {
  // states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { foodList, popupVisiable, orderList, orderMoney, locationList } =
    useSelector(
      (state) => ({
        foodList: state.getIn(["foodState", "foodList"]),
        popupVisiable: state.getIn(["foodState", "popupVisiable"]),
        orderList: state.getIn(["foodState", "orderList"]),
        orderMoney: state.getIn(["foodState", "orderMoney"]),
        locationList: state.getIn(["userState", "locationList"]),
      }),
      shallowEqual
    );

  // other states
  //   const [location, username, mobile] = locationList[0] || {
  //     location: "",
  //     username: "",
  //     mobile: "",
  //   };
  return (
    <FDSubmitOrderWraper>
      <NavBar
        onBack={() => {
          navigate("/food");
        }}
      >
        提交订单
      </NavBar>
      <div className="submitOrderUp">
        <div className="orderLocation">{"location"}</div>
        <div className="orderInfo">
          <span>{"username"} </span>
          <span>{"mobile"}</span>
        </div>
      </div>
      <div className="submitOrderMiddle">
        <div>支付方式</div>
        <div>极速支付</div>
      </div>

      <div className="submitOrderFood">
        {orderList.map((food) => (
          <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
        ))}
      </div>

      <div className="submitOrderPrice">
        <div className="allMoney">
          <span>总价格：</span>
          <span>{orderMoney}￥</span>
        </div>
        <div className="disCount">
          <span>优惠：</span>
          <span>{orderMoney}￥</span>
        </div>
      </div>
      <FDPayDock />
    </FDSubmitOrderWraper>
  );
});

export default FDFoodSubmitOrder;
