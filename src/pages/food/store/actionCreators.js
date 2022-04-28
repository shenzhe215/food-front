import {
  getAllType,
  getFoodByType,
  getAllFood,
  getFoodPageCondition,
} from "@/service/food";
import * as actionTypes from "./constants";
import { message } from "antd";

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

// 更改当前菜品信息
export const changeCurrentFoodAction = (foodInfo) => ({
  type: actionTypes.CHANGE_CUR_FOOD,
  curFood: foodInfo,
});

// 更改当前钱数信息
export const changeOrderMoneyAction = (orderMoney) => ({
  type: actionTypes.CHANGE_ORDER_MONEY,
  orderMoney: orderMoney,
});

// 更改当前订单数信息
export const changeOrderCoutnAction = (orderCount) => ({
  type: actionTypes.CHANGE_ORDER_COUNT,
  foodCount: orderCount,
});

// 更改当前订单中菜品数信息
export const changeFoodOrderCoutnAction = (foodOrderCount) => ({
  type: actionTypes.CHANGE_FOOD_ORDER_COUNT,
  foodOrderCount,
});

// 更改当前订单列表数信息
export const changeOrderListAction = (orderList) => ({
  type: actionTypes.CHANGE_ORDER_LIST,
  orderList: orderList,
});

// 更改当前订单列表数信息
export const changeFoodListTotalAction = (total) => ({
  type: actionTypes.CHANGE_FOOD_LIST_TOTAL,
  total,
});

// 获得菜品分类列表
export const getTypeList = () => {
  return (dispatch) => {
    getAllType().then((res) => {
      if (res.code === 20000) {
        dispatch(changeTypeListAction(res.data.list));
      } else {
        message.error("请求错误");
      }
    });
  };
};

// -------------获取全部菜品列表信息-------------
export const getAllFoodList = () => {
  return (dispatch) => {
    getAllFood().then((res) => {
      if (res.code === 20000) {
        dispatch(changeFoodListAction(res.data.list));
      } else {
        message.error("请求错误");
      }
    });
  };
};

// -------------获取全部菜品列表信息-------------
export const getFoodPageConditionAction = (current, limit, foodQuery) => {
  return (dispatch) => {
    getFoodPageCondition(current, limit, foodQuery).then((res) => {
      if (res.code === 20000) {
        dispatch(changeFoodListAction(res.data.list));
        dispatch(changeFoodListTotalAction(res.data.total));
      } else {
        message.error("请求错误");
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
        message.error("请求错误");
      }
    });
  };
};

// -------------修改订单钱数信息-------------
export const changeOrderMoney = (foodInfo, money, isAdd) => {
  return (dispatch, getState) => {
    const curMoney = getState().getIn(["foodState", "orderMoney"]);
    const { id } = foodInfo;
    if (isAdd) {
      const orderMoney = curMoney + money;
      dispatch(changeOrderMoneyAction(orderMoney));
    } else {
      const orderMoney = curMoney - money;
      dispatch(changeOrderMoneyAction(orderMoney));
    }
    // 修改订单数量
    dispatch(changeOrderCount(foodInfo, isAdd));
  };
};

// -------------修改订单数量信息-------------
export const changeOrderCount = (foodInfo, isAdd) => {
  return (dispatch, getState) => {
    const { id } = foodInfo;
    const curCount = getState().getIn(["foodState", "foodCount"]);
    const newFoodOrderCount = getState().getIn(["foodState", "foodOrderCount"]);
    const foodOrderCount = JSON.parse(JSON.stringify(newFoodOrderCount));
    if (isAdd) {
      const orderCount = curCount + 1;
      if (id in foodOrderCount) {
        foodOrderCount[id] += 1;
      } else {
        foodOrderCount[id] = 1;
        // 改变现有orderlist     食品信息   添加
        dispatch(changeOrderList(foodInfo, true));
      }
      dispatch(changeFoodOrderCoutnAction(foodOrderCount));
      dispatch(changeOrderCoutnAction(orderCount));
    } else {
      const orderCount = curCount - 1;
      if (foodOrderCount[id] === 1) {
        delete foodOrderCount[id];
        // 改变现有orderlist     食品信息   删除
        dispatch(changeOrderList(foodInfo, false));
      } else {
        foodOrderCount[id] -= 1;
      }
      dispatch(changeFoodOrderCoutnAction(foodOrderCount));
      dispatch(changeOrderCoutnAction(orderCount));
    }
  };
};

// -------------修改订单列表信息-------------
export const changeOrderList = (foodInfo, addOrDelete) => {
  return (dispatch, getState) => {
    const orderList = getState().getIn(["foodState", "orderList"]);
    const newOrderList = JSON.parse(JSON.stringify(orderList));
    if (addOrDelete) {
      newOrderList.push(foodInfo);
    } else {
      // 删除行为
      newOrderList.forEach(function (item, index, array) {
        if (foodInfo.id === item.id) {
          newOrderList.splice(index, 1);
        }
      });
    }
    dispatch(changeOrderListAction(newOrderList));
  };
};

// -------------修改订单列表信息-------------
// export const changeOrderList = (foodInfo, isAdd) => {
//   return (dispatch, getState) => {
//     const orderList = getState().getIn(["foodState", "orderList"]);
//     const newOrderList = JSON.parse(JSON.stringify(orderList));
//     console.log(newOrderList);

//     if (isAdd) {
//       let foodInList = false;
//       newOrderList.forEach(function (item, index, array) {
//         // 菜品在里边，修改数量
//         if (foodInfo.id === item.id) {
//           item.count = foodInfo.count;
//           foodInList = true;
//         }
//       });
//       // 该菜品不在list内，插入
//       if (!foodInList) {
//         newOrderList.push(foodInfo);
//       }
//     } else {
//       // 减法行为
//       newOrderList.forEach(function (item, index, array) {
//         // 菜品在里边，修改数量
//         if (foodInfo.id === item.id) {
//           if (item.count === 0) {
//             // 删除
//             newOrderList.splice(index, 1);
//           } else {
//             item.count = foodInfo.count;
//           }
//         }
//       });
//     }
//     dispatch(changeOrderListAction(newOrderList));
//   };
// };
