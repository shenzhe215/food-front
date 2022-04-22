import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image, Tag } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { changeCurrentFoodAction } from "@/pages/food/store";
import { changeOrderMoney } from "@/pages/food/store";
import { changeOrderList } from "@/pages/food/store";

import { FDFoodItemWraper } from "./style";
const FDFoodItem = memo((props) => {
  // state
  const foodInfo = props.foodInfo;
  const { id, title, price, cover, buyCount } = foodInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // other state
  const [count, setCount] = useState(0);

  // other hooks
  const handleClick = () => {
    dispatch(changeCurrentFoodAction(props.foodInfo));
    navigate("info/:id");
  };

  const handleMinus = (e) => {
    e.stopPropagation();
    setCount(count - 1);
    dispatch(changeOrderMoney(price, false));
    // TODO: 将订单列表处理
    foodInfo.count = count - 1;
    dispatch(changeOrderList(foodInfo, false));
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setCount(count + 1);
    dispatch(changeOrderMoney(price, true));
    // TODO: 将订单列表处理
    foodInfo.count = count + 1;
    dispatch(changeOrderList(foodInfo, true));
  };

  return (
    <FDFoodItemWraper
      onClick={() => {
        handleClick();
      }}
    >
      <Image src={cover} width={64} className="foodImg" />
      <div className="foodContentBox">
        <h2 className="foodContentTitle">{title}</h2>
        <h2 className="foodContentPrice">{price}￥</h2>
      </div>
      <div className="foodOperationBox">
        <h2 className="operationMessage">
          <Tag color="red">{buyCount} 折</Tag>
        </h2>
        <span className="operationBox">
          {(count !== 0 && (
            <MinusOutlined
              color="#2fb06a"
              className="minusOperationIcon"
              onClick={handleMinus}
            />
          )) || <div className="minusOperationIcon"></div>}
          {/* <span className="countOperation">{count !== 0 && count}</span> */}
          {(count !== 0 && <span className="setSpace">{count}</span>) || (
            <span className="setSpace"></span>
          )}
          <PlusOutlined
            color="#2fb06a"
            className="addOperationIcon"
            onClick={handleAdd}
          />
        </span>
      </div>
    </FDFoodItemWraper>
  );
});

export default FDFoodItem;
