import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Steps, Select, Table, Image, Button, message } from "antd";

import { getLatestLocation } from "@/service/location";
import { FDSubmitOrderWraper } from "./style";
import { locationToString } from "@/utils/location";
import { FDTitle, FDOperationBox } from "@/components";
import { createOrder } from "@/service/order";
import FDPay from "../pay/style";
import { changeOrderNoAction } from "../store/actionCreators";
import {
  changeFoodOrderCoutnAction,
  changeOrderList,
  changeOrderMoney,
} from "../../food/store/actionCreators";
const { Step } = Steps;
const { Option } = Select;

const FDFoodSubmitOrder = memo(() => {
  // states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { foodList, orderList, orderMoney, locationList, foodOrderCount } =
    useSelector(
      (state) => ({
        foodList: state.getIn(["foodState", "foodList"]),
        orderList: state.getIn(["foodState", "orderList"]),
        orderMoney: state.getIn(["foodState", "orderMoney"]),
        locationList: state.getIn(["userState", "locationList"]),
        foodOrderCount: state.getIn(["foodState", "foodOrderCount"]),
      }),
      shallowEqual
    );

  // other states
  const [latestLocs, setLatestLocs] = useState([]);
  const [location, setLocation] = useState(null);
  // hooks
  useEffect(() => {
    getLatestLocation().then((res) => {
      if (res.code === 20000) {
        setLatestLocs(res.data.list);
      } else {
        setLatestLocs(null);
      }
    });
  }, []);

  // other hooks
  const handleLocation = () => {
    navigate("/location");
  };

  const handleProvinceChange = (value) => {
    setLocation(value);
  };

  const handleSubmit = () => {
    if (location == null) {
      message.info("请选择地址");
      return;
    } else if (orderList.length == 0) {
      message.info("请先选择菜品");
      return;
    } else {
      var orderInfo = {};
      var foods = "";
      for (var i in foodOrderCount) {
        foods = foods + i + ":" + foodOrderCount[i] + "-";
      }
      orderInfo.foods = foods.substring(0, foods.length - 1);
      orderInfo.total = orderMoney;
      createOrder(location, orderInfo).then((res) => {
        if (res.code === 20000) {
          // 改变订单编号
          dispatch(changeOrderNoAction(res.data.orderId));
          dispatch(changeFoodOrderCoutnAction({}));
    const newOrderList = JSON.parse(JSON.stringify([]));
    dispatch(changeOrderList(newOrderList))
          dispatch(changeOrderMoney(0))
          navigate("/pay");
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
      title: "菜品分类",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "菜品封面",
      // dataIndex: "cover",
      key: "cover",
      render: (text, record) => <Image src={record.cover} width="50px" />,
    },
    {
      title: "菜品单价(元)",
      dataIndex: "price",
      key: "price",
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
          {foodOrderCount[record.id] * record.price}
        </span>
      ),
    },
  ];
  return (
    <FDSubmitOrderWraper>
      <FDTitle title="提交订单" />
      <div className="step">
        <Steps current={0} labelPlacement="vertical">
          <Step title="1.确认订单信息" />
          <Step title="2.付款" />
          <Step title="3.确认收货" />
        </Steps>
      </div>
      <div className="location">
        <div className="littleTitle">
          <span>确认取餐信息</span>
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
      <div className="prices">
        <span className="title">菜品总价：</span>
        <span className="money">￥{orderMoney}</span>
      </div>

      <div className="submitBtn">
        <Button type="primary" onClick={handleSubmit}>
          提交订单
        </Button>
      </div>
    </FDSubmitOrderWraper>
  );
});

export default FDFoodSubmitOrder;
