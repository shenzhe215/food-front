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


export const getLocationAction = () => {
  return (dispatch, getState) => {
    getAllLocs().then((res) => {
      const locations = res.data.list;
      dispatch(changeLocationAction(locations));
    });
  };
};
