import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTypeList,
  getFoodList,
  getAllFoodList,
  getFoodPageConditionAction,
} from "./store/actionCreators";
import { Badge, Pagination } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import FDFoodItem from "@/components/food-item";
import {
  FDFoodHeaderWraper,
  FDFoodContentWraper,
  FDFoodWraper,
  FoodHeader,
  PageBottom,
} from "./style";

const FDFood = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, typeList, foodList, foodCount, orderList, total } =
    useSelector(
      (state) => ({
        // typeList: state.getIn(["foodState", "typeList"]),
        // foodList: state.getIn(["foodState", "foodList"]),
        // orderList: state.getIn(["foodState", "orderList"]),
        // isLogin: state.getIn(["loginState", "isLogin"]),
        // foodCount: state.getIn(["foodState", "foodCount"]),
        // total: state.getIn(["foodState", "total"]),
        typeList: state.foodState.get("typeList"),
        foodList: state.foodState.get("foodList"),
        orderList: state.foodState.get("orderList"),
        isLogin: state.loginState.get("isLogin"),
        foodCount: state.foodState.get("foodCount"),
        total: state.foodState.get("total"),
      }),
      shallowEqual
    );

  // other state
  const [curIndex, setCurIndex] = useState(-1);
  const [curTypeId, setCurTypeId] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 9,
  });

  // hooks
  useEffect(() => {
    // if (!isLogin) {
    //   navigate("/login");
    // }
    dispatch(getTypeList());
    // dispatch(getAllFoodList());
    const foodQuery = {};
    dispatch(getFoodPageConditionAction(1, 9, foodQuery));
  }, []);

  // other hooks
  const handleChange = (typeId) => {
    setCurTypeId(typeId);
    const foodQuery = {};
    if (typeId !== "-1") {
      foodQuery.typeId = typeId;
    }
    setPagination({ ...pagination, current: 1 });
    const { pageSize } = pagination;
    dispatch(getFoodPageConditionAction(1, pageSize, foodQuery));
  };

  // ????????????
  const paginationChange = (current, pageSize) => {
    setPagination({ ...pagination, current, pageSize });
    const foodQuery = {};
    if (curTypeId !== "-1") {
      foodQuery.typeId = curTypeId;
    }
    dispatch(getFoodPageConditionAction(current, pageSize, foodQuery));
  };

  const paginationObj = {
    ...pagination,
    total: `${total}`,
    showQuickJumper: true,
    // ???????????????????????????
    showSizeChanger: true,
    hideOnSinglePage: false,
    pageSizeOptions: ["9", "18", "50", "100"],
    onChange: paginationChange,
    onShowSizeChange: paginationChange,
    // ??????
    showTotal: function () {
      return `????????? ${total} ?????????`;
    },
  };

  return (
    <FDFoodWraper className="FDFood">
      <FoodHeader>
        <div className="headItem">
          <span
            className={-1 === curIndex ? "activeTitle" : "navTitle"}
            onClick={() => {
              setCurIndex(-1);
              handleChange("-1");
            }}
          >
            ????????????
          </span>
          {typeList?.map((type, index) => (
            <span
              className={index === curIndex ? "activeTitle" : "navTitle"}
              key={index}
              onClick={() => {
                setCurIndex(index);
                handleChange(type.id);
              }}
            >
              {type.title}
            </span>
          ))}
        </div>
        <div
          className="headBottom"
          onClick={() => {
            navigate("/order/submitorder");
          }}
        >
          ???????????????
          <Badge count={foodCount}>
            <ShoppingCartOutlined className="shopCar" />
          </Badge>
        </div>
      </FoodHeader>
      <FDFoodContentWraper>
        <div className="main">
          {foodList?.map((food) => (
            <FDFoodItem foodInfo={food} key={food.id}></FDFoodItem>
          ))}
        </div>
      </FDFoodContentWraper>
      <PageBottom>
        <Pagination {...paginationObj} />
      </PageBottom>
    </FDFoodWraper>
  );
});

export default FDFood;
