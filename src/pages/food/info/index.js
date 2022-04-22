import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Image, Tag } from "antd";
import { getFoodById } from "@/service/food";
import { FDFoodInfoWraper } from "./style";

const FDFoodInfo = memo(() => {
  // states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { curFood } = useSelector(
    (state) => ({
      curFood: state.getIn(["foodState", "curFood"]),
    }),
    shallowEqual
  );

  // 自定义state
  const [id, setId] = useState(null);
  const [description, setDescription] = useState("");
  const { cover, price, buyCount, title } = curFood;

  // hooks
  useEffect(() => {
    setId(params.id);
  });

  useEffect(() => {
    getFoodById(curFood.id).then((res) => {
      const newDescription = res.data.item.description;
      setDescription(newDescription);
    });
  }, []);

  return (
    <FDFoodInfoWraper>
      <div>菜品详情</div>
      <div className="foodInfoUp">
        <Image src={cover} className="foodInfoImg"></Image>
      </div>
      <div className="foodInfoMiddle">
        <div className="middleLeftContent">
          <h1>{title}</h1>
          <div className="foodPrice">￥{price}</div>
          <div className="foodTag">
            {/* <Tag color="red">{buyCount} 折</Tag> */}
          </div>
        </div>
        <div className="middleRightContent">right</div>
      </div>
      <div className="foodInfoDown">
        {/* <div className="operation">
            <div onClick={()=>{console.log("click")}}>详情</div>
            <div>operation2</div>
          </div> */}
        <div>
          菜品详情
          <div className="description">{description}</div>
        </div>
      </div>
    </FDFoodInfoWraper>
  );
});

export default FDFoodInfo;
