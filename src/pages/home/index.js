import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Carousel } from "antd";
import { HomeWraper, DiscountWraper, HotFood } from "./styled";
import { getCouponListAction } from "./store/actionCreators";
import { Coupon } from "@/components";

const FDHome = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { couponList, isLogin } = useSelector(
    (state) => ({
      couponList: state.getIn(["homeState", "couponList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }

    dispatch(getCouponListAction());
  }, []);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <HomeWraper>
      <div className="carousel">
        <Carousel afterChange={onChange} autoplay={true}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <DiscountWraper>
        <div className="couponTitle">点餐前请先领取优惠券</div>
        <div className="coupons">
          {couponList?.map((coupon) => (
            <Coupon couponInfo={coupon} key={coupon.id} isUser={false} />
          ))}
        </div>
      </DiscountWraper>
      <HotFood></HotFood>
    </HomeWraper>
  );
});

export default FDHome;
