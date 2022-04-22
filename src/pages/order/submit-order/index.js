import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Steps } from "antd";

import { FDSubmitOrderWraper } from "./style";
import FDFoodItem from "@/components/food-item";

const { Step } = Steps;

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
      <div className="title">提交订单</div>
      <div className="step">
        <Steps current={0} labelPlacement="vertical">
          <Step title="1.确认订单信息" />
          <Step title="2.付款" />
          <Step title="3.确认收货" />
        </Steps>
      </div>
      <div className="location">
        <div className="title">
          <span>确认收获信息</span>
          <span>管理收获地址</span>
        </div>
        <div className="orderLocation">
          
        </div>
        <div className="orderInfo">
          <span>{"username"} </span>
          <span>{"mobile"}</span>
        </div>
      </div>

      <div className="orderInfo">
        {orderList.map((food) => (
          <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
        ))}
      </div>

      <div className="submitOrderMiddle">
        <div>支付方式</div>
        <div>极速支付</div>
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
    </FDSubmitOrderWraper>
  );
});

export default FDFoodSubmitOrder;
