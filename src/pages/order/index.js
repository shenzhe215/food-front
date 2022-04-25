import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FDOrderWraper, Header, ContentTitle, Content } from "./style";
import { FDTitle, FDOrderItem } from "@/components";
import {
  getOrderListAction,
  getOrderListByTypeAction,
} from "./store/actionCreators";
const FDOrder = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderList } = useSelector(
    (state) => ({
      orderList: state.getIn(["orderState", "orderList"]),
    }),
    shallowEqual
  );
  // other state

  // hookes
  useEffect(() => {
    dispatch(getOrderListAction());
  }, []);
  // other hooks

  return (
    <FDOrderWraper>
      <FDTitle title="订单表"></FDTitle>
      <Header>所有订单</Header>
      <ContentTitle>
        <div className="contentLeft">菜品</div>
        <div className="price">单价</div>
        <div className="count">数量</div>
        <div className="comment">操作</div>
        <div className="location">送餐地址</div>
        <div className="status">交易状态</div>
        <div className="fee">总费用</div>
      </ContentTitle>
      <Content>
        {orderList.map((order) => (
          <FDOrderItem orderInfo={order} key={order.id} />
        ))}
      </Content>
    </FDOrderWraper>
  );
});

export default FDOrder;
