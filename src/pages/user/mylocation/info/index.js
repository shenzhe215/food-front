import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, NavBar, Toast, Space } from "antd-mobile";
import { getMatchReg } from "@/utils/format-utils";
import {
  addLocation,
  removeLocation,
  updateLocation,
} from "@/service/location";
import { getLocationAction } from "../../store/actionCreators";

import { FDLocationInfoWraper } from "./style";

const FDLocationInfo = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mathchPhoneReg = getMatchReg("phone");
  const mathchUsername = getMatchReg("username");
  const params = useParams();
  const { curLocation } = useSelector(
    (state) => ({
      curLocation: state.getIn(["userState", "curLocation"]),
    }),
    shallowEqual
  );

  // 自定义state
  const [update, setUpdate] = useState(false);
  const [form] = Form.useForm();
  const [id, setId] = useState(null);

  // hooks
  useEffect(() => {
    // const { id } = params;
    if ("id" in params) {
      setUpdate(true);
      setId(params.id);
      const { location, username, mobile } = curLocation;
      form.setFieldsValue({
        location: location,
        username: username,
        mobile: mobile,
      });
    } else {
      setUpdate(false);
    }
  }, []);
  // other hooks
  // 表单提交
  const onFinish = (values) => {
    if (!update) {
      addLocation(values).then((res) => {
        if (res.code === 20000) {
          Toast.show({
            icon: "success",
            content: "添加成功",
            duration: 2000,
          });
        } else {
          Toast.show({
            icon: "fail",
            content: res.data.message,
            duration: 2000,
          });
        }
      });
    } else {
      values.id = id;
      updateLocation(values).then((res) => {
        if (res.code === 20000) {
          Toast.show({
            icon: "success",
            content: "更新成功",
            duration: 2000,
          });
        } else {
          Toast.show({
            icon: "fail",
            content: res.data.message,
            duration: 2000,
          });
        }
      });
    }
    dispatch(getLocationAction());
    navigate("/location");
  };

  // 删除地址操作
  const handleDelete = () => {
    console.log(id);
    removeLocation(id).then((res) => {
      if (res.code === 20000) {
        Toast.show({
          icon: "success",
          content: "删除成功",
          duration: 2000,
        });
      } else {
        Toast.show({
          icon: "fail",
          content: res.data.message,
          duration: 2000,
        });
      }
    });
    dispatch(getLocationAction());
    navigate("/location");
  };
  return (
    <FDLocationInfoWraper>
      <NavBar
        onBack={() => {
          navigate("/location");
        }}
      >
        {(update && "更改地址") || "新增地址"}
      </NavBar>
      <Form layout="horizontal" mode="card" onFinish={onFinish} form={form}>
        <Form.Item
          label="收货地址"
          name="location"
          rules={[
            {
              pattern: mathchUsername,
              message: `请输入正确的收货地址`,
            },
            { required: true, message: "请输入你的收货地址" },
          ]}
        >
          <Input clearable placeholder="请输入收获地址" />
        </Form.Item>
        <Form.Item
          label="收货人"
          name="username"
          rules={[
            {
              pattern: mathchUsername,
              message: `请输入正确的收货人`,
            },
            { required: true, message: "请输入你的账户" },
          ]}
        >
          <Input clearable placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="mobile"
          rules={[
            {
              pattern: mathchPhoneReg,
              message: `请输入正确的手机号`,
            },
            { required: true, message: "请输入你的手机号" },
          ]}
        >
          <Input clearable placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item>
          <div className="operationBox">
            {update && (
              <Button block color="danger" size="middle" onClick={handleDelete}>
                删除
              </Button>
            )}
            {update && <span />}
            <Button block type="submit" color="primary" size="middle">
              {(update && "更新") || "保存"}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </FDLocationInfoWraper>
  );
});

export default FDLocationInfo;
