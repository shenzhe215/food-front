import { getAllLocs } from "@/service/location";
import { getCouponFrontList } from "@/service/coupon";
import * as actionTypes from "./constants";

// 更改地址列表
export const changeLocationAction = (locationList) => ({
  type: actionTypes.CHANGE_USER_LOCATION,
  locationList: locationList,
});

// 更改优惠券列表
export const changeCouponListAction = (couponList) => ({
  type: actionTypes.CHANGE_COUPON_LIST,
  couponList,
});

// 更改当前地址信息
export const changeCurrentLocationAction = (location) => ({
  type: actionTypes.CHANGE_CUR_LOCATION,
  curLocation: location,
});

// 获取优惠券信息
export const getCouponListAction = () => {
  return (dispatch, getState) => {
    getCouponFrontList().then((res) => {
      if (res.code === 20000) {
        const couponList = res.data.list;
        dispatch(changeCouponListAction(couponList));
      }
    });
  };
};

// 获取地址信息
export const getLocationAction = () => {
  return (dispatch, getState) => {
    getAllLocs().then((res) => {
      const locations = res.data.list;
      const newLocation = JSON.parse(JSON.stringify(locations));
      dispatch(changeLocationAction(newLocation));
    });
  };
};
