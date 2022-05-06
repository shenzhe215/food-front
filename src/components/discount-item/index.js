import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CouponWraper } from "./style";
import { getCoupon } from "@/service/coupon";
import { message } from "antd";
const Coupon = memo((props) => {
  // state
  const { couponInfo, isUser } = props;
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
    if (isUser) {
      return;
    }
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
    <CouponWraper>
      <div className="left">
        <div className="left-box">
          <span className="unit">{type === 1 ? "元" : "折"}</span>
          <span className="type">{type === 1 ? "满减券" : "打折券"}</span>
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="right">
        <span className="condition">{"满" + requirement + "元可用"}</span>
        {isUser ? (
          <span
            className="action"
            onClick={() => {
              navigate("/food");
            }}
          >
            {" 使用>"}
          </span>
        ) : (
          <span className="action" onClick={handleCoupon}>
            {" 领取>"}
          </span>
        )}
      </div>
      {/* </div> */}
    </CouponWraper>
  );
});

export default Coupon;
