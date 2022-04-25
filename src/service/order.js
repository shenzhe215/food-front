import request from "./request";

export function createOrder(locationId, orderInfo) {
  return request({
    url: `/orderservice/order/createOrder/${locationId}`,
    method: "post",
    data: orderInfo,
  });
}

// 查询所有订单信息
export function getOrderList() {
  return request({
    url: `/orderservice/orderfront/getOrderList`,
    method: "get",
  });
}

// 根据订单id删除订单
export function deleteOrderById(orderId) {
  return request({
    url: `/orderservice/orderfront/deleteOrder/${orderId}`,
    method: "delete",
  });
}

// 根据订单类型获取订单
export function getOrderByType(status) {
  return request({
    url: `/orderservice/orderfront/deleteOrder/${status}`,
    method: "get",
  });
}
