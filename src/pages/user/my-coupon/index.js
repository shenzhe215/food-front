import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { MyCouponWraper } from "./style";
import { Coupon } from "@/components";
import { getCouponListAction } from "../store/actionCreators";

const FDMyCoupon = memo(() => {
  // state
  const { couponList } = useSelector(
    (state) => ({
      couponList: state.getIn(["userState", "couponList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getCouponListAction());
  }, []);

  return (
    <MyCouponWraper>
      {couponList?.map((coupon) => {
        <Coupon key={coupon.id} couponInfo={coupon} />;
      })}
    </MyCouponWraper>
  );
});

export default FDMyCoupon;
