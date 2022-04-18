import { getAllType, getFoodByType } from "@/service/food";
import * as actionTypes from "./constants";
import { Toast } from "antd-mobile";

// 更改菜品列表
export const changeFoodListAction = (foodList) => ({
  type: actionTypes.CHANGE_FOOD_LIST,
  foodList,
});

// 更改菜品类型列表
export const changeTypeListAction = (typeList) => ({
  type: actionTypes.CHANGE_TYPE_LIST,
  typeList: typeList,
});

// 更改当前菜品类型
export const changeCurTypeAction = (curType) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: curType,
});

// 获得菜品分类列表
export const getTypeList = () => {
  return (dispatch) => {
    getAllType().then((res) => {
      if (res.code === 20000) {
        dispatch(changeTypeListAction(res.data.list));
      } else {
        Toast.show({
          icon: "fail",
          content: "请求错误",
          duration: 2000,
        });
      }
    });
  };
};

// -------------获取菜品列表信息-------------
export const getFoodList = (typeId) => {
  return (dispatch) => {
    getFoodByType(typeId).then((res) => {
      if (res.code === 20000) {
        dispatch(changeFoodListAction(res.data.list));
      } else {
        Toast.show({
          icon: "fail",
          content: "请求错误",
          duration: 2000,
        });
      }
    });
  };
};
