import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Image, Button } from "antd";
import { LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { getFoodById } from "@/service/food";
import { FDFoodInfoWraper } from "./style";
import { FDOperationBox } from "@/components";
const FDFoodInfo = memo(() => {
  // states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { curFood, foodOrderCount } = useSelector(
    (state) => ({
      curFood: state.getIn(["foodState", "curFood"]),
      foodOrderCount: state.getIn(["foodState", "foodOrderCount"]),
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
    <FDFoodInfoWraper className="foodinfowraper">
      <div className="title">菜品详情</div>

      <div className="foodContent">
        {/* <div className="foodInfoUp"> */}
        <Image
          src={cover}
          className="foodInfoImg"
          width={400}
          height={300}
        ></Image>

        {/* </div> */}

        <div className="foodInfo">
          <div className="back">
            <Button
              onClick={() => {
                window.history.go(-1);
              }}
              icon={<LeftOutlined />}
            >
              返回
            </Button>
          </div>
          <span className="firstLine">
            <h1>{title}</h1>
          </span>
          <div className="secondLine">
            <span>
              价格
              <h1>￥{price}</h1>
            </span>
          </div>
          <div className="thirdLine">
            <span>数量</span>
            <FDOperationBox foodInfo={curFood} />
          </div>
          <div className="fourthLine">
            <Button>立即购买</Button>
            <span className="space"></span>
            <Button icon={<ShoppingCartOutlined />}>加入购物车</Button>
          </div>
        </div>
      </div>

      <div className="foodInfoDown">
        <span
          onClick={() => {
            console.log("click");
          }}
        >
          详情
        </span>
        <span>评价</span>
      </div>
      <div>
        <div className="description">{description}</div>
      </div>
    </FDFoodInfoWraper>
  );
});

export default FDFoodInfo;
