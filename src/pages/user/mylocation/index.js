import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FDLocationWraper } from "./style";
import { getLocationAction } from "../store/actionCreators";
import {
  removeLocation,
  updateLocation,
  addLocation,
} from "@/service/location";
import {
  Table,
  Space,
  Button,
  message,
  Modal,
  Form,
  Cascader,
  Input,
  Checkbox,
} from "antd";
import { changeCurrentLocationAction } from "@/pages/user/store/actionCreators";
import FDLocationInfo from "./info";
import { getMatchReg } from "@/utils/format-utils";
import { cities } from "@/assets/cityData";
const FDUserLocation = memo(() => {
  // state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mathchPhoneReg = getMatchReg("phone");
  const mathchUsername = getMatchReg("username");

  const { isLogin, locationList, curLocation } = useSelector(
    (state) => ({
      locationList: state.getIn(["userState", "locationList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
      curLocation: state.getIn(["userState", "curLocation"]),
    }),
    shallowEqual
  );

  // other states
  const [visiable, setVisiable] = useState(false);
  const [update, setUpdate] = useState(false);
  const [form] = Form.useForm();
  const [id, setId] = useState(null);
  const [checked, setChecked] = useState(false);

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    dispatch(getLocationAction());
  }, [locationList]);

  // other hooks
  const handleClick = () => {
    // navigate("info");
    setUpdate(false);
    form.resetFields();
    setVisiable(true);
  };

  const handleEdit = (locationInfo) => {
    dispatch(changeCurrentLocationAction(locationInfo));
    setUpdate(true);
    const { id, location, username, mobile, area, isDefault } = locationInfo;
    form.setFieldsValue({
      location: location,
      username: username,
      mobile: mobile,
      area: area.split(" "),
    });
    setId(id);
    setChecked(isDefault == 1);
    // navigate(`info/${locationInfo.id}`);
    setVisiable(true);
  };

  // 删除
  const handleRemove = (locationInfo) => {
    removeLocation(locationInfo.id).then((res) => {
      if (res.code === 20000) {
        message.success("删除成功", 1);
        dispatch(getLocationAction());
        // navigate("/location");
      } else {
        message.error(res.data.message, 1);
      }
    });
  };

  // 表单提交
  const onFinish = (values) => {
    const { area } = values;
    let newArea;
    newArea = area.toString().replaceAll(",", " ");
    values.area = newArea;
    values.isDefault = checked ^ 0;
    if (!update) {
      addLocation(values).then((res) => {
        if (res.code === 20000) {
          message.success("添加成功", 1);
        } else {
          message.error(res.data.message, 1);
        }
      });
    } else {
      values.id = id;
      updateLocation(values).then((res) => {
        if (res.code === 20000) {
          message.success("更新成功", 1);
        } else {
          message.error(res.data.message, 1);
        }
      });
    }
    dispatch(getLocationAction());
    setVisiable(false);
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
        <Space size="middle">
          {(record.isDefault && <div className="defaultLoc">默认地址</div>) || (
            <a onClick={handleDefault.bind(null, record)}>设为默认</a>
          )}
        </Space>
      ),
    },
  ];

  // 表单样式
  const formItemLayout = {
    labelCol: { span: 4, offset: 4 },
    wrapperCol: { span: 12 },
  };

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12, offset: 8 },
  };

  return (
    <FDLocationWraper>
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
        rowKey={(record) => {
          return record.id;
        }}
      />
      <Modal
        visible={visiable}
        footer={[
          <Button onClick={() => setVisiable(false)} key={"cancel"}>
            取消
          </Button>,
        ]}
        title={(update && "更新地址信息") || "添加新地址"}
      >
        <div className="form">
          <Form
            layout="horizontal"
            onFinish={onFinish}
            form={form}
            {...formItemLayout}
          >
            <Form.Item
              label="地址信息"
              name="area"
              rules={[{ required: true, message: "请输入你的地址信息" }]}
            >
              <Cascader
                options={cities}
                placeholder={"请选择当前地区"}
              ></Cascader>
            </Form.Item>
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
              <Input placeholder="请输入收获地址" />
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
              <Input placeholder="请输入用户名" />
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
              <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <Checkbox
                defaultChecked={checked}
                value={checked}
                onChange={(e) => {
                  setChecked(!e.target.value);
                }}
                checked={checked}
              >
                设为默认信息
              </Checkbox>
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <div className="operationBox">
                <Button block type="primary" size="middle" htmlType="submit">
                  {(update && "更新") || "保存"}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </FDLocationWraper>
  );
});

export default FDUserLocation;
