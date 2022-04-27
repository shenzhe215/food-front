import { getCouponFrontList, getCoupon, getCouponList } from "@/service/coupon";
import * as actionTypes from "./constants";
import { message } from "antd";

// 更改优惠券列表
export const changeCouponListAction = (couponList) => ({
  type: actionTypes.CHANGE_COUPON_LIST,
  couponList: couponList,
});

// 更改用户优惠券列表
export const changeUserCouponListAction = (userCouponList) => ({
  type: actionTypes.CHANGE_USER_COUPON,
  userCouponList,
});

// 更改轮播图列表
export const changeBannerListAction = (banner) => ({
  type: actionTypes.CHANGE_BANNER_LIST,
  banner,
});

// -------------首页初始化-------------
export const initHomeAction = () => {
  return (dispatch, getState) => {
    dispatch(getCouponListAction());
    dispatch(getUserCouponListAction());
    dispatch(getBannerListAction());
  };
};

// -------------获取优惠券信息-------------
export const getCouponListAction = () => {
  return (dispatch, getState) => {
    // 获取优惠券信息
    getCouponList().then((res) => {
      if (res.code !== 20000) {
        message.error("获取优惠券列表失败");
      } else {
        dispatch(changeCouponListAction(res.data.list));
      }
    });
  };
};

// -------------获取用户优惠券信息-------------
export const getUserCouponListAction = () => {
  return (dispatch, getState) => {
    // 获取优惠券信息
    getCouponFrontList().then((res) => {
      if (res.code !== 20000) {
        message.error("获取用户优惠券列表失败");
      } else {
        dispatch(changeUserCouponListAction(res.data.list));
      }
    });
  };
};

// -------------获取轮播图信息-------------
export const getBannerListAction = () => {
  return (dispatch, getState) => {
    // 获取轮播图信息
    getCouponFrontList().then((res) => {
      if (res.code !== 20000) {
        message.error("获取用户优惠券列表失败");
      } else {
        dispatch(changeUserCouponListAction(res.data.list));
      }
    });
  };
};
