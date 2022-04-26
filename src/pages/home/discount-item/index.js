import React, { memo } from "react";

import { CouponWraper } from "./style";
const Coupon = memo(() => {
  return (
    <CouponWraper>
      <div className="coupon">
        <p className="coupon-title">优惠券</p>
        <span className="coupon-content">5折</span>
        <p>describe</p>
      </div>
    </CouponWraper>
  );
});

export default Coupon;
