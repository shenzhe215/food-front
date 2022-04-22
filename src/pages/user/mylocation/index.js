import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FDLocationWraper } from "./style";
import { getLocationAction } from "../store/actionCreators";

import { Table, Space, Button, Modal, Cascader } from "antd";
import { FDTitle } from "@/components";
const FDUserLocation = memo(() => {
  // state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogin, locationList } = useSelector(
    (state) => ({
      locationList: state.getIn(["userState", "locationList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  // other states
  const [isModalVisible, setIsModalVisible] = useState(false);

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    dispatch(getLocationAction());
  }, []);

  // other hooks
  const handleClick = () => {
    navigate("info");
  };


  const columns = [
    {
      title: "收货人",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "所在地区",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "详细地址",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "手机号",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "操作",
      key: "operation",
      render: (text, record) => (
        <Space size="middle">
          <a>修改</a>
          <a>删除</a>
        </Space>
      ),
    },
    {
      title: "设为默认",
      key: "isDefault",
      dataIndex: "isDefault",
      render: (text, record) => (
        console.log(record.isDefault),
        (
          <Space size="middle">
            {(record.isDefault && (
              <div className="defaultLoc">默认地址</div>
            )) || <a>设为默认</a>}
          </Space>
        )
      ),
    },
  ];

  return (
    <FDLocationWraper>
      <FDTitle title={"我的收货地址"}></FDTitle>
      <div className="addLocBtn">
        <Button onClick={handleClick} type="primary">
          新增地址
        </Button>
      </div>
      <Table
        dataSource={locationList}
        columns={columns}
        bordered={true}
        pagination={false}
      />
    </FDLocationWraper>
  );
});

export default FDUserLocation;
