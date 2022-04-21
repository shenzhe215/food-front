import React, { memo, useState, useEffect } from "react";
import { SideBar, Popup, NavBar } from "antd-mobile";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { isLogin, typeList, foodList, popupVisiable, orderList } = useSelector(
    (state) => ({
      typeList: state.getIn(["foodState", "typeList"]),
      foodList: state.getIn(["foodState", "foodList"]),
      popupVisiable: state.getIn(["foodState", "popupVisiable"]),
      orderList: state.getIn(["foodState", "orderList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  // other state

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }

    dispatch(changeBottomStateAction(false));
    dispatch(changePopupVisableAction(false));
    dispatch(getTypeList());
  }, []);

  // other hooks
  const handleChange = (key) => {
    dispatch(getFoodList(key));
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <FDFoodWraper className="FDFood">
      <FDFoodHeaderWraper>
        <NavBar onBack={handleBack} className="foodNavBar">
          点餐界面
        </NavBar>
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
        mask={false}
        stopPropagation={["click", "wheel"]}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          bottom: "7em",
          minHeight: "40vh",
          maxHeight: "40vh",
          padding: "1em 1em 1em 1em",
          backgroundColor: "#f1f1f1",
          overflow: "scroll",
        }}
        style={{
          "--z-index": "1",
        }}
      >
        {orderList.map((food) => (
          <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
        ))}
      </Popup>
    </FDFoodWraper>
  );
});

export default FDFood;
