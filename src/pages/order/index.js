import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FDOrderWraper,
  Header,
  ContentTitle,
  Content,
  PageBottom,
} from "./style";
import { FDTitle, FDOrderItem } from "@/components";
import { Pagination } from "antd";
import {
  getOrderListAction,
  getOrderListByTypeAction,
  getPageOrderListAction,
  getPageOrderByStatusAction,
} from "./store/actionCreators";
const FDOrder = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderList, total, isLogin } = useSelector(
    (state) => ({
      orderList: state.getIn(["orderState", "orderList"]),
      total: state.getIn(["orderState", "total"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );
  // other state
  const [curIndex, setCurIndex] = useState(0);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [index, setIndex] = useState(0);

  // hookes
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    dispatch(getPageOrderListAction(1, 10));
  }, []);

  // other hooks
  const handleChange = (index) => {
    setIndex(index);
    index === 0
      ? dispatch(getPageOrderListAction(1, pagination.pageSize))
      : dispatch(getPageOrderByStatusAction(1, pagination.pageSize, index - 1));
  };

  // 页面改变
  const paginationChange = (current, pageSize) => {
    setPagination({ ...pagination, current, pageSize });
    index === 0
      ? dispatch(getPageOrderListAction(current, pageSize))
      : dispatch(getPageOrderByStatusAction(current, pageSize, index - 1));
  };

  const paginationObj = {
    ...pagination,
    total: `${total}`,
    showQuickJumper: true,
    // 显示每页多少条数据
    showSizeChanger: true,
    hideOnSinglePage: false,
    pageSizeOptions: ["10", "20", "50", "100"],
    onChange: paginationChange,
    onShowSizeChange: paginationChange,
    // 总数
    showTotal: function () {
      return `总共有 ${total} 条菜品`;
    },
  };

  const orderTabs = ["所有订单", "待支付", "待收货", "已完成"];
  return (
    <FDOrderWraper>
      <FDTitle title="订单表"></FDTitle>
      <Header>
        {orderTabs?.map((order, index) => (
          <span className="nav-tab" key={index}>
            <span
              className={index === curIndex ? "activeTitle" : "navTitle"}
              onClick={() => {
                setCurIndex(index);
                handleChange(index);
              }}
            >
              {order}
            </span>
            <span className="navCount"></span>
          </span>
        ))}
      </Header>
      <ContentTitle>
        <div className="contentLeft">菜品</div>
        <div className="price">单价</div>
        <div className="count">数量</div>
        <div className="comment">操作</div>
        <div className="location">送餐地址</div>
        <div className="status">交易状态</div>
        <div className="fee">总费用</div>
      </ContentTitle>
      <Content>
        {orderList.map((order) => (
          <FDOrderItem orderInfo={order} key={order.id} />
        ))}
      </Content>
      <PageBottom>
        <Pagination {...paginationObj} />
      </PageBottom>
    </FDOrderWraper>
  );
});

export default FDOrder;
