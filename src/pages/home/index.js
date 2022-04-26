import React, { memo, useState, useEffect } from "react";

import { Carousel } from "antd";
import { HomeWraper, DiscountWraper, HotFood } from "./styled";
import Coupon from "./discount-item";
const FDHome = memo(() => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

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
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
        
        </div>
      </DiscountWraper>
      <HotFood></HotFood>
    </HomeWraper>
  );
});

export default FDHome;
