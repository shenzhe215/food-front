import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CouponWraper } from "./style";
import { getCoupon } from "@/service/coupon";
import { message } from "antd";

const Coupon = memo((props) => {
  // state
  const { couponInfo } = props;
  const navigate = useNavigate();
  const { id, type, title, requirement, description, num, beginTime, endTime } =
    couponInfo;
  const { isLogin } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  // other hooks
  const handleCoupon = () => {
    if (!isLogin) {
      message.info("请先登录");
      navigate("/login");
      return;
    }
    getCoupon(id).then((res) => {
      if (res.code === 20000) {
        message.success("领取成功");
      } else {
        message.info(res.message);
      }
    });
  };

  return (
    <CouponWraper onClick={handleCoupon}>
      <div className="coupon">
        <p className="coupon-title">{description}</p>
        <span className="coupon-content">
          {type === 1 ? title + "元" : title + "折"}
        </span>
        <p>{"满" + requirement + "元可用"}</p>
      </div>
    </CouponWraper>
  );
});

export default Coupon;
