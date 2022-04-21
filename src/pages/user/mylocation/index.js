import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavBar, Toast } from "antd-mobile";
import { Link, useNavigate } from "react-router-dom";
import { FDLocationWraper } from "./style";
import FDLocationBox from "@/components/location-box";
import { getLocationAction } from "../store/actionCreators";
import { changeBottomStateAction } from "@/components/app-bottom/store/actionCreators";

const FDUserLocation = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin, locationList } = useSelector(
    (state) => ({
      locationList: state.getIn(["userState", "locationList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  const right = (
    <div style={{ fontSize: 15 }}>
      <Link to={"info"} style={{ color: "black" }}>
        新增地址
      </Link>
    </div>
  );

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    dispatch(getLocationAction());
    dispatch(changeBottomStateAction(false));
  }, []);

  const back = () => {
    navigate("/user");
  };

  return (
    <FDLocationWraper>
      <NavBar right={right} onBack={back}>
        收货地址
      </NavBar>
      {locationList.map((info, index) => (
        <FDLocationBox locationInfo={info} key={index}></FDLocationBox>
      ))}
    </FDLocationWraper>
  );
});

export default FDUserLocation;
