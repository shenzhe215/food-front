import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Space, Image, Tag } from "antd-mobile";
import { AddCircleOutline, MinusCircleOutline } from "antd-mobile-icons";

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
      <Image
        src={cover}
        width={64}
        height={64}
        fit="cover"
        style={{ borderRadius: 8 }}
        className="foodImg"
      />
      <div className="foodContentBox">
        <h2 className="foodContentTitle">{title}</h2>
        <h2 className="foodContentPrice">{price}￥</h2>
      </div>
      <div className="foodOperationBox">
        <h2 className="operationMessage">
          <Tag
            color="danger"
            fill="outline"
            style={{ "--border-color": "var(--adm-color-weak)" }}
          >
            {buyCount} 折
          </Tag>
        </h2>
        <span className="operationBox">
          {(count !== 0 && (
            <MinusCircleOutline
              color="#2fb06a"
              className="minusOperationIcon"
              onClick={handleMinus}
            />
          )) || <div className="minusOperationIcon"></div>}
          {/* <span className="countOperation">{count !== 0 && count}</span> */}
          {(count !== 0 && <span className="setSpace">{count}</span>) || (
            <span className="setSpace"></span>
          )}
          <AddCircleOutline
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
