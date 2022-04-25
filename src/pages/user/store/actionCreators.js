import { getAllLocs } from "@/service/location";
import * as actionTypes from "./constants";

// 更改地址列表
export const changeLocationAction = (locationList) => ({
  type: actionTypes.CHANGE_USER_LOCATION,
  locationList: locationList,
});

// 更改当前地址信息
export const changeCurrentLocationAction = (location) => ({
  type: actionTypes.CHANGE_CUR_LOCATION,
  curLocation: location,
});

// 更改更新可见性
export const changeUpdateVisiableAction = (updateVisiable) => ({
  type: actionTypes.CHANGE_UPDATE_VISIABLE,
  updateVisiable,
});

// 更改密码可见性
export const changePasswordAction = (passwordVisiable) => ({
  type: actionTypes.CHANGE_PASSWORD_VISIABLE,
  passwordVisiable,
});

export const getLocationAction = () => {
  return (dispatch, getState) => {
    getAllLocs().then((res) => {
      const locations = res.data.list;
      const newLocation = JSON.parse(JSON.stringify(locations));
      dispatch(changeLocationAction(newLocation));
    });
  };
};
