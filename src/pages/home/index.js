import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Carousel, message, Image } from "antd";
import { HomeWraper, DiscountWraper, HotFood } from "./styled";
import { getCouponListAction } from "./store/actionCreators";
import { Coupon } from "@/components";
import { getAllBanner } from "@/service/banner";
import { foodGoodPrice } from "@/service/food";
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

  // othenr states
  const [bannerList, setBannerList] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const fetchFoodGoodList = () => {
    foodGoodPrice().then((res) => {
      if (res.code === 20000) {
        setFoodList(res.data.list);
      } else {
        message.error("获取菜品信息失败", 1);
      }
    });
  };

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    getAllBanner().then((res) => {
      if (res.code === 20000) {
        setBannerList(res.data.item);
      } else {
        message.error("获取banner失败", 1);
      }
    });

    fetchFoodGoodList();
    dispatch(getCouponListAction());
  }, []);

  return (
    <HomeWraper>
      <div className="carousel">
        <Carousel autoplay={true}>
          {bannerList?.map((banner) => (
            <img src={banner.imageUrl} key={banner.id}></img>
          ))}
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
