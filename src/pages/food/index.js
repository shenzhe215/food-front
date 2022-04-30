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
        typeList: state.getIn(["foodState", "typeList"]),
        foodList: state.getIn(["foodState", "foodList"]),
        orderList: state.getIn(["foodState", "orderList"]),
        isLogin: state.getIn(["loginState", "isLogin"]),
        foodCount: state.getIn(["foodState", "foodCount"]),
        total: state.getIn(["foodState", "total"]),
      }),
      shallowEqual
    );

  // other state
  const [curIndex, setCurIndex] = useState(-1);
  const [curTypeId, setCurTypeId] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 18,
  });

  // hooks
  useEffect(() => {
    // if (!isLogin) {
    //   navigate("/login");
    // }
    dispatch(getTypeList());
    // dispatch(getAllFoodList());
    const foodQuery = {};
    dispatch(getFoodPageConditionAction(1, 18, foodQuery));
  }, []);

  // other hooks
  const handleChange = (typeId) => {
    const foodQuery = {};
    if (typeId !== "-1") {
      foodQuery.typeId = typeId;
      setCurTypeId(typeId);
    }
    setPagination({ ...pagination, current: 1 });
    const { pageSize } = pagination;
    dispatch(getFoodPageConditionAction(1, pageSize, foodQuery));
  };


  // 页面改变
  const paginationChange = (current, pageSize) => {
    setPagination({ ...pagination, current, pageSize });
    const foodQuery = { typeId: curTypeId };
    dispatch(getFoodPageConditionAction(current, pageSize, foodQuery));
  };

  const paginationObj = {
    ...pagination,
    total: `${total}`,
    showQuickJumper: true,
    // 显示每页多少条数据
    showSizeChanger: true,
    hideOnSinglePage: false,
    pageSizeOptions: ["18", "36", "50", "100"],
    onChange: paginationChange,
    onShowSizeChange: paginationChange,
    // 总数
    showTotal: function () {
      return `总共有 ${total} 条菜品`;
    },
  };

  return (
    <FDFoodWraper className="FDFood">
      <FDFoodHeaderWraper>
        <div>点餐界面</div>
      </FDFoodHeaderWraper>
      <FoodHeader>
        <div className="headItem">
          <span className="nav-tab">
            <span
              className={-1 === curIndex ? "activeTitle" : "navTitle"}
              onClick={() => {
                setCurIndex(-1);
                handleChange("-1");
              }}
            >
              所有菜品
            </span>
          </span>
          {typeList?.map((type, index) => (
            <span className="nav-tab" key={index}>
              <span
                className={index === curIndex ? "activeTitle" : "navTitle"}
                onClick={() => {
                  setCurIndex(index);
                  handleChange(type.id);
                }}
              >
                {type.title}
              </span>
              <span className="navCount"></span>
            </span>
          ))}
        </div>
        <div
          className="headBottom"
          onClick={() => {
            navigate("/order/submitorder");
          }}
        >
          我的购物车
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
