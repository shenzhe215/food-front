import {
  getAllFood,
  getAllType,
  getFoodById,
  getFoodListPage,
  addFoodInfo,
  deleteFoodId,
  updateFoodInfo,
} from "@/service/food";

import * as actionTypes from "./constants";

const changeFoodListAction = (foodList) => ({
  type: actionTypes.GET_FOOD_LIST,
  foodList,
});

const changeTypeListAction = (typeList) => ({
  type: actionTypes.GET_TYPE_LIST,
  typeList,
});

export const changeFoodInfoAction = (foodInfo) => ({
  type: actionTypes.CHANGE_FOOD_INFO,
  foodInfo,
});

export const getFoodListAction = () => {
  return (dispatch, getState) => {
    getAllFood().then((res) => {
      const newFoodList = res.data.list;
      dispatch(changeFoodListAction(newFoodList));
    });
  };
};

export const getTypeListAction = () => {
  return (dispatch, getState) => {
    getAllType().then((res) => {
      const newTypeList = res.data.list;
      dispatch(changeTypeListAction(newTypeList));
    });
  };
};

export const addFoodInfoAction = () => {
  return (dispatch, getState) => {
    addFoodInfo(getState.foodInfo);
  };
};

export const removeFoodAction = (foodId) => {
  return (dispatch, getState) => {
    deleteFoodId(foodId);
  };
};

export const getFoodInfoByIdAction = (foodId)=> {
  return (dispatch, getState) => {
    getFoodById(foodId).then((res) => {
      const newFoodInfo = res.data.item;
      dispatch(changeFoodInfoAction(newFoodInfo));
    });
  }
}
