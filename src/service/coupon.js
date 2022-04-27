import request from "./request";

// 根据用户id查询未失效优惠券 //list 返回
export function getCouponFrontList() {
  return request({
    url: `/foodservice/usercoupon/getCouponFrontList`,
    method: "get",
  });
}

// 获取优惠券
export function getCoupon(couponId) {
  return request({
    url: `/foodservice/usercoupon/getCoupon/${couponId}`,
    method: "post",
  });
}

// 查询所有优惠券信息
export function getCouponList() {
  return request({
    url: `/foodservice/coupon/getCouponList`,
    method: "get",
  });
}
