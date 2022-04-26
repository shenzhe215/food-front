import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTypeList,
  getFoodList,
  getAllFoodList,
} from "./store/actionCreators";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import FDFoodItem from "@/components/food-item";
import {
  FDFoodHeaderWraper,
  FDFoodContentWraper,
  FDFoodWraper,
  FoodHeader,
} from "./style";

import { foodTabs } from "../../common/local-data";
const FDFood = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, typeList, foodList, foodCount, orderList } = useSelector(
    (state) => ({
      typeList: state.getIn(["foodState", "typeList"]),
      foodList: state.getIn(["foodState", "foodList"]),
      orderList: state.getIn(["foodState", "orderList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
      foodCount: state.getIn(["foodState", "foodCount"]),
    }),
    shallowEqual
  );

  // other state
  
  // hooks
  useEffect(() => {
    // if (!isLogin) {
    //   navigate("/login");
    // }
    dispatch(getTypeList());
    dispatch(getAllFoodList());
  }, []);

  // other hooks
  const handleChange = (key) => {
    dispatch(getFoodList(key));
  };

  const handleAllFood = () => {
    dispatch(getAllFoodList());
  };

  return (
    <FDFoodWraper className="FDFood">
      <FDFoodHeaderWraper>
        <div>点餐界面</div>
      </FDFoodHeaderWraper>
      <FoodHeader>
        <div className="headItem">
          <span className="nav-tab">
            <span className="navTitle">所有菜品</span>
            <span className="navCount"></span>
          </span>
        </div>
        <div className="headItem">
          <span className="nav-tab">
            <span className="navTitle">所有菜品</span>
            <span className="navCount"></span>
          </span>
        </div>{" "}
        <div className="headItem">
          <span className="nav-tab">
            <span className="navTitle">所有菜品</span>
            <span className="navCount"></span>
          </span>
        </div>{" "}
        <div className="headItem">
          <span className="nav-tab">
            <span className="navTitle">所有菜品</span>
            <span className="navCount"></span>
          </span>
        </div>{" "}
        <div className="headItem">
          <span className="nav-tab">
            <span className="navTitle">所有菜品</span>
            <span className="navCount"></span>
          </span>
        </div>
      </FoodHeader>
      <FDFoodContentWraper>
        {/* <div className={"container"}> */}
        <div className={"side"}>
          <ul>
            菜品分类
            <div
              className="foodSide"
              onClick={() => {
                handleAllFood();
              }}
            >
              不限
            </div>
            {typeList?.map((type) => (
              <div
                key={type.id}
                onClick={() => {
                  handleChange(type.id);
                }}
                className="foodSide"
              >
                {type.title}
              </div>
            ))}
          </ul>
        </div>
        <div className="main">
          {foodList?.map((food) => (
            <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
          ))}
        </div>
        {/* </div> */}
      </FDFoodContentWraper>
      <div className="orderList">
        <Badge count={foodCount}>
          <ShoppingCartOutlined
            className="shopCar"
            onClick={() => {
              navigate("/order/submitorder");
            }}
          />
        </Badge>
      </div>
    </FDFoodWraper>
  );
});

export default FDFood;
