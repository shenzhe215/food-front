import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Carousel, message, Image } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { HomeWraper, DiscountWraper, HotFood } from "./styled";
import { getCouponListAction } from "./store/actionCreators";
import { Coupon } from "@/components";
import { getAllBanner } from "@/service/banner";
import { pageFoodGoodPrice } from "@/service/food";
import { pageCouponList } from "@/service/coupon";
import { MyIcon } from "@/common/local-data";
import { FDAppFooter } from "../../components";
const FDHome = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector(
    (state) => ({
      // couponList: state.getIn(["homeState", "couponList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  // othenr states
  const [bannerList, setBannerList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [couponList, setCouponList] = useState([]);
  const [pageCoupon, setPageCoupon] = useState({
    current: 1,
    limit: 4,
    total: 0,
  });
  const [pageFood, setPageFood] = useState({
    current: 1,
    limit: 4,
    total: 0,
  });

  const fetchFoodGoodList = () => {
    pageFoodGoodPrice(pageFood.current, pageFood.limit).then((res) => {
      if (res.code === 20000) {
        setFoodList(res.data.list);
        setPageFood({ ...pageFood, total: res.data.total });
      } else {
        message.error("获取菜品信息失败", 1);
      }
    });
  };

  const fetchCouponList = () => {
    pageCouponList(pageCoupon.current, pageCoupon.limit).then((res) => {
      if (res.code === 20000) {
        setCouponList(res.data.list);
        setPageCoupon({ ...pageCoupon, total: res.data.total });
      } else {
        message.error("获取优惠券信息失败", 1);
      }
    });
  };

  // hooks
  useEffect(() => {
    if (!isLogin) {
      // navigate("/login");
    }
    getAllBanner().then((res) => {
      if (res.code === 20000) {
        setBannerList(res.data.item);
      } else {
        message.error("获取banner失败", 1);
      }
    });

    fetchFoodGoodList();
    fetchCouponList();
    dispatch(getCouponListAction());
  }, []);

  // other hooks
  const handleClick = () => {
    console.log("click");
  };

  const handlePageFoodLeft = () => {
    const { current } = pageFood;
    if (current > 1) {
      pageFood.current -= 1;
      setPageFood(pageFood);
      fetchFoodGoodList();
    }
  };

  const handlePageFoodRight = () => {
    const { current, total } = pageFood;
    if (current < total / 4) {
      pageFood.current += 1;
      setPageFood(pageFood);
      fetchFoodGoodList();
    }
  };

  const handlePageCouponLeft = () => {
    const { current } = pageCoupon;
    if (current > 1) {
      pageCoupon.current -= 1;
      setPageCoupon(pageCoupon);
      fetchCouponList();
    }
  };

  const handlePageCouponRight = () => {
    const { current, total } = pageCoupon;
    if (current < total / 4) {
      pageCoupon.current += 1;
      setPageCoupon(pageCoupon);
      fetchCouponList();
    }
  };

  const handleFoodClick = (food) => {
    const { id } = food;
    navigate(`/food/info/${id}`);
  };

  const getFoodItem = (food) => {
    return (
      <div
        className="food-item"
        key={food.id}
        onClick={() => {
          handleFoodClick(food);
        }}
      >
        <div className="food-item-up">
          <img src={food.cover} width={140} className="food-img" />
        </div>
        <h6 className="food-item-mid">{food.title}</h6>
        <div className="food-item-down">{food.discountPrice + "￥"}</div>
      </div>
    );
  };
  return (
    <HomeWraper>
      <div className="carousel">
        <Carousel autoplay={true}>
          {bannerList?.map((banner) => (
            <img
              src={banner.imageUrl}
              key={banner.id}
              className={"banner-img"}
              onClick={() => {
                handleClick();
              }}
            ></img>
          ))}
        </Carousel>
      </div>
      <HotFood>
        <div className="ht-left">
          <div className="title">
            <span className="title-name">今日特价</span>
          </div>
          <MyIcon type="icon-shandian" className="icon" />
        </div>
        <div className="ht-right">
          <div className="page-left" onClick={() => handlePageFoodLeft()}>
            <span className="icon">
              <LeftOutlined />
            </span>
          </div>
          {foodList?.map((food, index) => getFoodItem(food))}
          <div className="page-right" onClick={() => handlePageFoodRight()}>
            <span className="icon">
              <RightOutlined />
            </span>
          </div>
        </div>
      </HotFood>
      <DiscountWraper>
        <div className="coupon-top">
          <span className="couponTitle">领券中心</span>
          <span
            onClick={() => {
              navigate("/coupon");
            }}
            className="coupon-more"
          >
            更多好券
            <RightOutlined />
          </span>
        </div>

        <div className="coupons">
          <div className="page-left" onClick={() => handlePageCouponLeft()}>
            <span className="icon">
              <LeftOutlined />
            </span>
          </div>
          {couponList?.map((coupon, index) =>
            index < 4 ? (
              <div className="coupon-item" key={coupon.id}>
                <Coupon couponInfo={coupon} key={coupon.id} isUser={false} />
              </div>
            ) : (
              ""
            )
          )}
          <div className="page-right" onClick={() => handlePageCouponRight()}>
            <span className="icon">
              <RightOutlined />
            </span>
          </div>
        </div>
      </DiscountWraper>
      <FDAppFooter />
    </HomeWraper>
  );
});

export default FDHome;
