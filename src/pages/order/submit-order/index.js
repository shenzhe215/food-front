import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Steps, Select, Table, Image, Button, message } from "antd";

import { getLatestLocation } from "@/service/location";
import { FDSubmitOrderWraper } from "./style";
import { locationToString } from "@/utils/location";
import { FDTitle, FDOperationBox } from "@/components";
import { createOrder } from "@/service/order";
import { changeOrderNoAction } from "../store/actionCreators";
import { getCouponListAction } from "../../user/store/actionCreators";
import { couponformat } from "@/utils/coupon-format";
const { Step } = Steps;
const { Option } = Select;

const FDFoodSubmitOrder = memo(() => {
  // states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    foodList,
    orderList,
    orderMoney,
    locationList,
    foodOrderCount,
    couponList,
  } = useSelector(
    (state) => ({
      // foodList: state.getIn(["foodState", "foodList"]),
      // orderList: state.getIn(["foodState", "orderList"]),
      // orderMoney: state.getIn(["foodState", "orderMoney"]),
      // locationList: state.getIn(["userState", "locationList"]),
      // foodOrderCount: state.getIn(["foodState", "foodOrderCount"]),
      // couponList: state.getIn(["userState", "couponList"]),

      foodList: state.foodState.get("foodList"),
      orderList: state.foodState.get("orderList"),
      orderMoney: state.foodState.get("orderMoney"),
      locationList: state.userState.get("locationList"),
      foodOrderCount: state.foodState.get("foodOrderCount"),
      couponList: state.userState.get("couponList"),
    }),
    shallowEqual
  );

  // other states
  const [latestLocs, setLatestLocs] = useState([]);
  const [location, setLocation] = useState(null);
  const [couponInfo, setCouponInfo] = useState({ title: 0 });
  const [discount, setDiscount] = useState(false);
  // hooks
  useEffect(() => {
    getLatestLocation().then((res) => {
      if (res.code === 20000) {
        setLatestLocs(res.data.list);
      } else {
        setLatestLocs(null);
      }
    });
    dispatch(getCouponListAction());
  }, []);

  // other hooks
  const handleLocation = () => {
    navigate("/user/location");
  };

  const handleProvinceChange = (value) => {
    setLocation(value);
  };

  const handleCouponChange = (value) => {
    couponList?.map((coupon) => coupon.id === value && setCouponInfo(coupon)) &&
      setDiscount(true);
  };

  const handleSubmit = () => {
    if (location == null) {
      message.info("请选择地址", 1);
      return;
    } else if (orderList.length == 0) {
      message.info("请先选择菜品", 1);
      return;
    } else {
      var orderInfo = {};
      var foods = "";
      for (var i in foodOrderCount) {
        foods = foods + i + ":" + foodOrderCount[i] + "-";
      }
      orderInfo.foods = foods.substring(0, foods.length - 1);
      orderInfo.total = orderMoney;
      orderInfo.couponId = couponInfo.id;
      createOrder(location, orderInfo).then((res) => {
        if (res.code === 20000) {
          // 改变订单编号
          dispatch(changeOrderNoAction(res.data.orderId));

          navigate(`/order/pay/${res.data.orderId}`);
        }
      });
    }
  };

  const columns = [
    {
      title: "菜品名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "菜品封面",
      key: "cover",
      render: (text, record) => (
        <Image src={record.cover} width={80} height={60} />
      ),
    },
    {
      title: "菜品单价(元)",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <div className="tablePrice">
          <span
            className={
              (record.discountPrice && "hasdiscount") || "foodContentPrice"
            }
          >
            {record.price}￥
          </span>
          {record.discountPrice && (
            <span className="foodContentPrice">{record.discountPrice}￥</span>
          )}
          {/* {record.discountPrice === null ? record.price : record.discountPrice} */}
        </div>
      ),
    },
    {
      title: "数量",
      key: "count",
      render: (text, record) => <FDOperationBox foodInfo={record} />,
    },
    {
      title: "小计(元)",
      key: "operation",
      render: (text, record) => (
        <span style={{ color: "red" }}>
          {foodOrderCount[record.id] *
            (record.discountPrice === null
              ? record.price
              : record.discountPrice)}
          ￥
        </span>
      ),
    },
  ];

  return (
    <FDSubmitOrderWraper>
      <FDTitle title="提交订单" />
      <div className="order-body">
        <div className="step">
          <Steps current={0} labelPlacement="vertical">
            <Step title="1.确认订单信息" />
            <Step title="2.付款" />
            <Step title="3.确认收货" />
          </Steps>
        </div>
        <div className="location">
          <div className="littleTitle">
            <span>确认取餐地址</span>
            <span onClick={handleLocation}>管理取餐地址</span>
          </div>
          <div className="orderLocation">
            <Select
              defaultActiveFirstOption
              defaultValue={latestLocs[0]}
              style={{ width: 600 }}
              onChange={handleProvinceChange}
              placeholder={"请选择送餐地址!"}
              bordered={false}
              // defaultOpen={true}
              dropdownStyle={{ textAlign: "center" }}
              showArrow={false}
            >
              {latestLocs.map((location) => (
                <Option key={location.id}>{locationToString(location)}</Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="secondTitle">确认订单信息</div>
        <div>
          <Table
            dataSource={orderList}
            columns={columns}
            bordered={true}
            pagination={false}
            rowKey={(record) => record.id}
          />
        </div>
        <div className="coupon">
          <Select
            style={{ width: 300 }}
            onChange={handleCouponChange}
            placeholder={"请选择优惠券!"}
            bordered={false}
            dropdownStyle={{ textAlign: "center" }}
            showArrow={false}
            allowClear={false}
          >
            {couponList?.map(
              (coupon) =>
                coupon.requirement <= orderMoney && (
                  <Option key={coupon.id}>{couponformat(coupon)}</Option>
                )
            )}
          </Select>
        </div>
        <div className={(discount && "hasdiscount") || "prices"}>
          <span className="title">菜品总价：</span>
          <span className="money">￥{orderMoney}</span>
        </div>
        {discount && (
          <div className="prices">
            <span className="title">优惠价：</span>
            <span className="money">
              ￥
              {(couponInfo.type === 1 && orderMoney - couponInfo.title) ||
                (orderMoney * couponInfo.title) / 10}
            </span>
          </div>
        )}
        <div className="submitBtn">
          <Button type="primary" onClick={handleSubmit}>
            提交订单
          </Button>
        </div>
      </div>
    </FDSubmitOrderWraper>
  );
});

export default FDFoodSubmitOrder;
