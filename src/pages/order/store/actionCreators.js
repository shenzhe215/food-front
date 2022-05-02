import {
  getOrderList,
  getOrderByType,
  pageListOrder,
  pageStatusOrder,
} from "@/service/order";
import * as actionTypes from "./constants";
import { message } from "antd";

// 更改订单列表
export const changeOrderListAction = (orderList) => ({
  type: actionTypes.CHANGE_ORDER_LIST,
  orderList,
});

// 更改订单列表总数
export const changeOrderTotalAction = (total) => ({
  type: actionTypes.CHANGE_ORDER_TOTAL,
  total,
});

// 更改订单编号
export const changeOrderNoAction = (orderNo) => ({
  type: actionTypes.CHANGE_ORDER_NO,
  orderNo,
});

// -------------获取订单列表-------------
export const getOrderListAction = () => {
  return (dispatch, getState) => {
    getOrderList().then((res) => {
      if (res.code !== 20000) {
        message.error("订单获取失败");
      } else {
        const newOrderLIst = res.data.list;
        dispatch(changeOrderListAction(newOrderLIst));
      }
    });
  };
};

// -------------根据类型获取订单信息-------------
export const getOrderListByTypeAction = (status) => {
  return (dispatch, getState) => {
    getOrderByType(status).then((res) => {
      if (res.code !== 20000) {
        message.error("订单获取失败");
      } else {
        const newOrderLIst = res.data.list;
        dispatch(changeOrderListAction(newOrderLIst));
      }
    });
  };
};

// -------------分页获取订单列表-------------
export const getPageOrderListAction = (current, limit) => {
  return (dispatch, getState) => {
    pageListOrder(current, limit).then((res) => {
      if (res.code !== 20000) {
        message.error("订单获取失败");
      } else {
        const newOrderLIst = res.data.list;
        const total = res.data.total;
        dispatch(changeOrderTotalAction(total));
        dispatch(changeOrderListAction(newOrderLIst));
      }
    });
  };
};

// -------------根据类型分页获取订单信息-------------
export const getPageOrderByStatusAction = (current, limit, status) => {
  return (dispatch, getState) => {
    pageStatusOrder(current, limit, status).then((res) => {
      if (res.code !== 20000) {
        message.error("订单获取失败");
      } else {
        const newOrderLIst = res.data.list;
        const total = res.data.total;
        dispatch(changeOrderTotalAction(total));
        dispatch(changeOrderListAction(newOrderLIst));
      }
    });
  };
};
