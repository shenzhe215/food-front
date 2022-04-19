import React, { memo, useState, useEffect } from "react";
import { SideBar, Popup } from "antd-mobile";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeBottomStateAction } from "@/components/app-bottom/store/actionCreators";
import {
  getTypeList,
  getFoodList,
  changePopupVisableAction,
} from "./store/actionCreators";
import FDFoodItem from "@/components/food-item";
import FDDock from "@/components/shopping-dock";
import { FDFoodHeaderWraper, FDFoodContentWraper, FDFoodWraper } from "./style";

const FDFood = memo(() => {
  // state
  const dispatch = useDispatch();
  const { typeList, foodList, popupVisiable, orderList } = useSelector(
    (state) => ({
      typeList: state.getIn(["foodState", "typeList"]),
      foodList: state.getIn(["foodState", "foodList"]),
      popupVisiable: state.getIn(["foodState", "popupVisiable"]),
      orderList: state.getIn(["foodState", "orderList"]),
    }),
    shallowEqual
  );

  // other state

  // hooks
  useEffect(() => {
    dispatch(changeBottomStateAction(false));
    dispatch(changePopupVisableAction(false));
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
              <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
            ))}
            {/* {foodList.map((food) => (
              <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
            ))} */}
          </div>
        </div>
      </FDFoodContentWraper>
      <FDDock />
      <Popup
        visible={popupVisiable}
        // onMaskClick={() => {
        //   dispatch(changePopupVisableAction(false));
        // }}
        mask={false}
        className={"popUp"}
        stopPropagation={["click", "wheel"]}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "40vh",
        }}
        style={{
          "--z-index": "1",
        }}
      >
        {/* {orderList.map((food) => (
          <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
        ))} */}
        {orderList.map((food) => (
          <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
        ))}
      </Popup>
    </FDFoodWraper>
  );
});

export default FDFood;
