import React, { memo, useState, useEffect } from "react";
import { FDFoodHeaderWraper, FDFoodContentWraper, FDFoodWraper } from "./style";
import { SideBar } from "antd-mobile";
import FDFoodItem from "@/components/food-item";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeBottomStateAction } from "@/components/app-bottom/store/actionCreators";
import { getTypeList, getFoodList } from "./store/actionCreators";
const FDFood = memo(() => {
  // state
  const dispatch = useDispatch();
  const { typeList, foodList } = useSelector(
    (state) => ({
      typeList: state.getIn(["foodState", "typeList"]),
      foodList: state.getIn(["foodState", "foodList"]),
    }),
    shallowEqual
  );

  // hooks
  useEffect(() => {
    dispatch(changeBottomStateAction(false));
    dispatch(getTypeList());
  }, []);

  // other hooks
  const handleChange = (key) => {
    dispatch(getFoodList(key));
  };

  return (
    <FDFoodWraper className="FDFood">
      <FDFoodHeaderWraper>
        <h1>FDHeader</h1>
        <div>title</div>
        <div>menu</div>
      </FDFoodHeaderWraper>
      <FDFoodContentWraper>
        <div className={"container"}>
          <div className={"side"}>
            <SideBar
              style={{ "--width": "100%", "--height": "70%" }}
              onChange={(key) => handleChange(key)}
            >
              {typeList.map((item) => (
                <SideBar.Item key={item.id} title={item.title} />
              ))}
            </SideBar>
          </div>
          <div className="main">
              {foodList.map((food) => (
                  <FDFoodItem foodInfo = {food} key={food.id}></FDFoodItem>
              ))}
          </div>
        </div>
      </FDFoodContentWraper>
    </FDFoodWraper>
  );
});

export default FDFood;
