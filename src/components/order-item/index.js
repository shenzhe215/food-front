import React, { memo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { OrderItemWraper, Header, Content } from "./style";
import { Button, Divider, Image, Input, message, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteOrderById } from "@/service/order";
import { getOrderListAction } from "@/pages/order/store/actionCreators";
import { addFoodComment } from "@/service/food";
import { finishOrder } from "@/service/order";
const FDOrderItem = memo((props) => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderInfo } = props;
  const {
    id,
    gmtCreate,
    status,
    totalFee,
    rateFee,
    location,
    orderNo,
    foodList,
  } = orderInfo;

  // other states
  const [visiable, setVisiable] = useState(false);
  const [foodItem, setFoodItem] = useState({});
  const [value, setValue] = useState("");
  // other hooks
  // 评论按钮
  const addComment = (item) => {
    setVisiable(true);
    setFoodItem(item);
    setValue("");
  };
  // 添加评论hooks
  const handleAddComment = () => {
    if (value.length > 0) {
      var foodComment = {};
      foodComment.content = value;
      foodComment.foodId = foodItem.foodId;
      addFoodComment(foodComment).then((res) => {
        if (res.code === 20000) {
          message.success("添加评论成功", 1);
          setVisiable(false);
        } else {
          message.error(res.message, 1);
        }
      });
    }
  };

  // 删除订单hooks
  const handleDelete = () => {
    deleteOrderById(id).then((res) => {
      if (res.code === 20000) {
        message.success("订单删除成功", 1);
        dispatch(getOrderListAction());
      } else {
        message.error("删除失败", 1);
      }
    });
  };
  const showfoodItem = (item) => {
    const { cover, title, price, buyNum, ratePrice, foodId } = item;
    return (
      <>
        <div className="foodInfo">
          <Image src={cover} width={80} height={60} />
          <div className="foodTitle">{title}</div>
        </div>
        <div className="price">￥{ratePrice === null ? price : ratePrice}</div>
        {/* <div className="price">￥{price}</div> */}
        <div className="count">{buyNum}</div>
        {(status === 3 && (
          <span className="comment" onClick={addComment.bind(null, item)}>
            评论
          </span>
        )) || (
          <span
            className="noComment"
            onClick={() => {
              message.info("收货后方可评价!", 1);
            }}
          >
            评论
          </span>
        )}
      </>
    );
  };

  // 确认收货
  const handleRecive = () => {
    finishOrder(id).then((res) => {
      if (res.code === 20000) {
        message.success("确认收货成功", 1);
        dispatch(getOrderListAction());
      } else {
        message.error("确认收货失败", 1);
      }
    });
  };

  const getStatus = () => {
    switch (status) {
      case 0:
        return (
          <>
            <p>未支付</p>
            <Link to={`/order/pay/${orderNo}`}>去支付</Link>
          </>
        );
      case 1:
        return (
          <>
            <p>已支付，待发货</p>
          </>
        );
      case 2:
        return (
          <>
            <p>已发货，待收货</p>
            <span onClick={() => handleRecive()}>确认收货</span>
          </>
        );
      case 3:
        return "订单完成";
      default:
        return "订单状态";
    }
  };

  return (
    <OrderItemWraper>
      <Header>
        <div className="headerLeft">
          <span> {gmtCreate}</span>
          <span>订单号：{orderNo}</span>
        </div>
        <div className="headerRight">
          <DeleteOutlined onClick={handleDelete} />
        </div>
      </Header>
      <Content>
        <div className="foodArea">
          {foodList.map((foodInfo) => {
            return (
              <div className="contentLeft">
                {showfoodItem(foodInfo)}
              </div>
            );
          })}
        </div>

        <div className="location">{location}</div>
        <div className="status">{getStatus()}</div>
        <div className="fee">
          <div className={rateFee ? "feebox" : "ratefeebox"}>
            总费用：<span>{totalFee}￥</span>
          </div>
          {rateFee > 0 && (
            <div className="ratefeebox">
              折扣价：<span>{rateFee}￥</span>
            </div>
          )}
        </div>
      </Content>
      <Modal
        title={"正在评论 " + foodItem.title}
        visible={visiable}
        onOk={handleAddComment}
        onCancel={() => {
          setVisiable(false);
        }}
        okText="提交"
        cancelText="取消"
      >
        <Image src={foodItem.cover} width={100} />
        <Divider />
        <Input.TextArea
          rows={4}
          allowClear
          placeholder="请输入您的宝贵意见"
          showCount
          maxLength={500}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Modal>
    </OrderItemWraper>
  );
});

export default FDOrderItem;
