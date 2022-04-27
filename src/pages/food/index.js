import React, { memo, useEffect, useState } from "react";
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
import { List } from "immutable";
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
  const [curIndex, setCurIndex] = useState(-1);
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
          {typeList?.map((type, index) => (
            <span className="nav-tab" key={index}>
              <span
                className={index === curIndex ? "activeTitle" : "navTitle"}
                onClick={() => {
                  setCurIndex(index);
                  handleChange(type.id);
                }}
              >
                {type.title}
              </span>
              <span className="navCount"></span>
            </span>
          ))}
        </div>
        <div
          className="headBottom"
          onClick={() => {
            navigate("/order/submitorder");
          }}
        >
          我的购物车
          <Badge count={foodCount}>
            <ShoppingCartOutlined className="shopCar" />
          </Badge>
        </div>
      </FoodHeader>
      <FDFoodContentWraper>
        <div className="main">
          {foodList?.map((food) => (
            <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
          ))}
        </div>
        {/* </div> */}
      </FDFoodContentWraper>
    </FDFoodWraper>
  );
});

export default FDFood;
