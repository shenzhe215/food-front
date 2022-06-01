import React, { memo, useState, useCallback, useEffect } from "react";
import { Result } from "antd";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PaySuccessWraper } from "./style";
import {
  changeFoodOrderCoutnAction,
  changeOrderListAction,
  changeOrderMoneyAction,
  changeOrderCoutnAction,
} from "../../../food/store/actionCreators";
const PayInfo = memo(() => {
  // states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // hooks
  useEffect(() => {
    clearOrderState();
  }, []);

  // 清空redux订单状态
  const clearOrderState = useCallback(() => {
    // 清空订单信息
    dispatch(changeFoodOrderCoutnAction({}));
    dispatch(changeOrderListAction([]));
    dispatch(changeOrderMoneyAction(0));
    dispatch(changeOrderCoutnAction(0));
  });

  setTimeout(() => {
    navigate("/order");
  }, 3000);

  return (
    <PaySuccessWraper>
      <Result
        status="success"
        title="订单支付成功,页面跳转中……"
      />
    </PaySuccessWraper>
  );
});

export default PayInfo;
