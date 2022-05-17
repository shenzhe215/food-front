import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image, Tag } from "antd";

import { changeCurrentFoodAction } from "@/pages/food/store";

import { FDFoodItemWraper } from "./style";
import FDOperationBox from "../FD-Food-Operation";
const FDFoodItem = memo((props) => {
  // state

  const foodInfo = props.foodInfo;
  const { id, title, price, cover, buyCount, discountPrice } = foodInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // other state

  // hooks

  // other hooks
  const handleClick = () => {
    dispatch(changeCurrentFoodAction(props.foodInfo));
    navigate(`info/${id}`);
  };

  return (
    <FDFoodItemWraper>
      <Image
        src={cover}
        width={320}
        height={180}
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
        <div className="food-price">
          <h2 className={discountPrice ? "hasdiscount" : "foodContentPrice"}>
            {price}￥
          </h2>
          {discountPrice && (
            <h2 className="foodContentPrice">{discountPrice}￥</h2>
          )}
        </div>
        <FDOperationBox foodInfo={foodInfo} />
      </div>
    </FDFoodItemWraper>
  );
});

export default FDFoodItem;
