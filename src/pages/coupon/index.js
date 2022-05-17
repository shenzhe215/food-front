import React, { memo, useState, useEffect } from "react";
import { message } from "antd";

import { getCouponFrontList, getCouponList } from "@/service/coupon";
import { CouponWraper } from "./style";
import { Coupon } from "../../components";
const FDCouponPage = memo(() => {
  const [couponList, setCouponList] = useState([]);

  const fetchCouponList = () => {
    getCouponList().then((res) => {
      if (res.code !== 20000) {
        message.error("获取优惠券列表失败", 1);
      } else {
        setCouponList(res.data.list);
      }
    });
  };

  // hooks
  useEffect(() => {
    fetchCouponList();
  }, []);

  return (
    <CouponWraper>
      <div className="coupon-title">
        <span className="i1"></span>
        <h3>为你推荐好券</h3>
        <span className="i1"></span>
      </div>
      <div className="coupon-content">
        {couponList?.map((coupon, index) => (
          <Coupon couponInfo={coupon} key={coupon.id} isUser={false} />
        ))}
      </div>
    </CouponWraper>
  );
});

export default FDCouponPage;
