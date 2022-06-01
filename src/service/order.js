import request from "./request";

// 创建订单
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

// 分页查询所有订单信息
export function pageListOrder(current, limit) {
  return request({
    url: `/orderservice/orderfront/pageOrder/${current}/${limit}`,
    method: "get",
  });
}

// 分页状态查询所有订单信息
export function pageStatusOrder(current, limit, status) {
  return request({
    url: `/orderservice/orderfront/pageStatusOrder/${current}/${limit}/${status}`,
    method: "get",
  });
}

// 根据订单id查询订单信息
export function getOrderInfo(orderId) {
  return request({
    url: `/orderservice/order/getOrderInfo/${orderId}`,
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
    url: `/orderservice/orderfront/getOrderByType/${status}`,
    method: "get",
  });
}

// 获取订单支付码
export function getUrl(orderId) {
  return request({
    url: `/orderservice/api/payOrder/${orderId}`,
    method: "get",
  });
}

// 确认收货
export function finishOrder(orderId) {
  return request({
    url: `/orderservice/orderfront/finishOrder/${orderId}`,
    method: "get",
  });
}

// 获取ip
export function getIpAddr() {
  return request({
    url: `/orderservice/api/ip`,
    method: "get",
  });
}

// 支付
export function alipay(orderId) {
  return request({
    url: `/orderservice/alipay/trade/page/pay/${orderId}`,
    method: "post",
  });
}
