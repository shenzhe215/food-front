import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeBottomStateAction } from "@/components/app-bottom/store";

import { getFoodById } from "@/service/food";
import { FDFoodInfoWraper } from "./style";
import { Image, Tag, Tabs, NavBar } from "antd-mobile";

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
    dispatch(changeBottomStateAction(true));
  });

  useEffect(() => {
    getFoodById(curFood.id).then((res) => {
      const newDescription = res.data.item.description;
      setDescription(newDescription);
    });
  }, []);

  return (
    <FDFoodInfoWraper>
      <NavBar
        onBack={() => {
          navigate("/food");
        }}
      >
        菜品详情
      </NavBar>
      <div className="foodInfoUp">
        <Image src={cover} fit="cover" className="foodInfoImg"></Image>
      </div>
      <div className="foodInfoMiddle">
        <div className="middleLeftContent">
          <h1>{title}</h1>
          <div className="foodPrice">￥{price}</div>
          <div className="foodTag">
            <Tag
              color="danger"
              fill="outline"
              style={{ "--border-color": "var(--adm-color-weak)" }}
            >
              {buyCount} 折
            </Tag>
          </div>
        </div>
        <div className="middleRightContent">right</div>
      </div>
      <div className="foodInfoDown">
        {/* <div className="operation">
          <div onClick={()=>{console.log("click")}}>详情</div>
          <div>operation2</div>
        </div> */}
        <Tabs className="operation">
          <Tabs.Tab title="详情" key="description">
            <div className="description">{description}</div>
          </Tabs.Tab>
          <Tabs.Tab title="" key="vegetables">
            {/* 评价 */}
          </Tabs.Tab>
        </Tabs>
      </div>
    </FDFoodInfoWraper>
  );
});

export default FDFoodInfo;
