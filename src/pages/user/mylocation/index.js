import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FDLocationWraper } from "./style";
import { getLocationAction } from "../store/actionCreators";

import { removeLocation, updateLocation } from "@/service/location";

import { Table, Space, Button, message } from "antd";
import { FDTitle } from "@/components";
import { changeCurrentLocationAction } from "@/pages/user/store/actionCreators";

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

  const handleEdit = (locationInfo) => {
    dispatch(changeCurrentLocationAction(locationInfo));
    navigate(`info/${locationInfo.id}`);
  };

  // 删除
  const handleRemove = (locationInfo) => {
    removeLocation(locationInfo.id).then((res) => {
      if (res.code === 20000) {
        message.success("删除成功");
        dispatch(getLocationAction());
        navigate("/location");
      } else {
        message.error(res.data.message);
      }
    });
  };

  // 设为默认
  const handleDefault = (record) => {
    record.isDefault = 1;
    updateLocation(record).then((res) => {
      if (res.code === 20000) {
        message.success("更新成功");
        dispatch(getLocationAction());
      } else {
        message.error(res.data.message);
      }
    });
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
          <a onClick={handleEdit.bind(null, record)}>修改</a>
          <a onClick={handleRemove.bind(null, record)}>删除</a>
        </Space>
      ),
    },
    {
      title: "",
      key: "isDefault",
      dataIndex: "isDefault",
      render: (text, record) => (
        (
          <Space size="middle">
            {(record.isDefault && (
              <div className="defaultLoc">默认地址</div>
            )) || <a onClick={handleDefault.bind(null, record)}>设为默认</a>}
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
