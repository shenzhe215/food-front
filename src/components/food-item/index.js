import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image, Tag } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { changeCurrentFoodAction } from "@/pages/food/store";
import { changeOrderMoney } from "@/pages/food/store";

import { FDFoodItemWraper } from "./style";
const FDFoodItem = memo((props) => {
  // state
  const { foodOrderCount } = useSelector(
    (state) => ({
      foodOrderCount: state.getIn(["foodState", "foodOrderCount"]),
    }),
    shallowEqual
  );

  const foodInfo = props.foodInfo;
  const { id, title, price, cover, buyCount } = foodInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // other state

  // hooks
  useEffect(() => {
    console.log("effect");
  }, []);

  // other hooks
  const handleClick = () => {
    dispatch(changeCurrentFoodAction(props.foodInfo));
    navigate(`info/${id}`);
  };

  const handleMinus = (e) => {
    e.stopPropagation();
    dispatch(changeOrderMoney(foodInfo, price, false));
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(changeOrderMoney(foodInfo, price, true));
  };

  return (
    <FDFoodItemWraper>
      <Image
        src={cover}
        width={150}
        height={100}
        className="foodImg"
        onClick={() => {
          handleClick();
        }}
        preview={false}
      />
      <div className="foodContentBox">
        <h2 className="foodContentTitle">{title}</h2>
      </div>
      <div className="foodOperationBox">
        <h2 className="foodContentPrice">{price}￥</h2>
        <span className="operationBox">
          <div className={!foodOrderCount[id] && "hasBorder"}>
            {foodOrderCount[id] && (
              <MinusOutlined className="operationIcon" onClick={handleMinus} />
            )}
          </div>
          <div className={!foodOrderCount[id] && "hasBorder"}>
            {(foodOrderCount[id] && (
              <span className="setSpace">{foodOrderCount[id]}</span>
            )) || <span className="setSpace"></span>}
          </div>
          <div>
            <PlusOutlined className="operationIcon" onClick={handleAdd} />
          </div>
        </span>
      </div>
    </FDFoodItemWraper>
  );
});

export default FDFoodItem;
