import React, { memo, useState } from "react";
import { Space, Image, Tag } from "antd-mobile";
import { AddCircleOutline, MinusCircleOutline } from "antd-mobile-icons";

import { FDFoodItemWraper } from "./style";
const FDFoodItem = memo((props) => {
  // state
  const { title, price, cover, buyCount } = props.foodInfo;

  // other state
  const [count, setCount] = useState(0);

  // other hooks
  const handleClick = () => {
    console.log("click");
  };

  const handleMinus = () => {
    console.log("minus");
    setCount(count - 1);
  };

  const handleAdd = () => {
    console.log("add");
    setCount(count + 1);
  };

  return (
    <FDFoodItemWraper>
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
            5.8折
          </Tag>
        </h2>
        <span className="operationBox">
          {count !== 0 && (
            <MinusCircleOutline
              color="#2fb06a"
              className="minusOperationIcon"
              onClick={() => {
                handleMinus();
              }}
            />
          ) || <div  className="minusOperationIcon"></div>}
          {/* <span className="countOperation">{count !== 0 && count}</span> */}
          {count !== 0 && <span className="setSpace">{count}</span> || <span className="setSpace"></span>}
          <AddCircleOutline
            color="#2fb06a"
            className="addOperationIcon"
            onClick={() => {
              handleAdd();
            }}
          />
        </span>
      </div>
    </FDFoodItemWraper>
  );
});

export default FDFoodItem;
