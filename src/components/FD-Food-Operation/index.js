import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FDOperationBoxWraper } from "./style";
import { changeOrderMoney } from "@/pages/food/store";

const FDOperationBox = memo((props) => {
  // state
  const { foodOrderCount } = useSelector(
    (state) => ({
      // foodOrderCount: state.getIn(["foodState", "foodOrderCount"]),
      foodOrderCount: state.foodState.get("foodOrderCount"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other states
  const foodInfo = props.foodInfo;
  const { id, price, discountPrice } = foodInfo;

  // other hooks

  const handleMinus = (e) => {
    e.stopPropagation();
    discountPrice !== null
      ? dispatch(changeOrderMoney(foodInfo, discountPrice, false))
      : dispatch(changeOrderMoney(foodInfo, price, false));
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    discountPrice === null
      ? dispatch(changeOrderMoney(foodInfo, price, true))
      : dispatch(changeOrderMoney(foodInfo, discountPrice, true));
  };

  return (
    <FDOperationBoxWraper>
      <div className={!foodOrderCount[id] ? "hasBorder" : ""}>
        {foodOrderCount[id] && (
          <MinusOutlined className="operationIcon" onClick={handleMinus} />
        )}
      </div>
      <div className={!foodOrderCount[id] ? "hasBorder" : ""}>
        {(foodOrderCount[id] && (
          <span className="setSpace">{foodOrderCount[id]}</span>
        )) || <span className="setSpace"></span>}
      </div>
      <div>
        <PlusOutlined className="operationIcon" onClick={handleAdd} />
      </div>
    </FDOperationBoxWraper>
  );
});

export default FDOperationBox;
