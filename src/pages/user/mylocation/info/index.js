import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Cascader, Checkbox } from "antd";
import { getMatchReg } from "@/utils/format-utils";
import {
  addLocation,
  removeLocation,
  updateLocation,
} from "@/service/location";
import { getLocationAction } from "../../store/actionCreators";

import { FDLocationInfoWraper } from "./style";
import { message } from "antd";
import { FDTitle } from "@/components";
import { cities } from "@/assets/cityData";

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
  const [checked, setChecked] = useState(false);

  // hooks
  useEffect(() => {
    // const { id } = params;
    if ("id" in params) {
      setUpdate(true);
      setId(params.id);
      const { location, username, mobile, area, isDefault } = curLocation;
      form.setFieldsValue({
        location: location,
        username: username,
        mobile: mobile,
        area: area.split(" "),
      });
      setChecked(isDefault == 1);
    } else {
      setUpdate(false);
    }
  }, []);
  // other hooks
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
          message.success("添加成功");
        } else {
          message.error(res.data.message);
        }
      });
    } else {
      values.id = id;
      updateLocation(values).then((res) => {
        if (res.code === 20000) {
          message.success("更新成功");
        } else {
          message.error(res.data.message);
        }
      });
    }
    dispatch(getLocationAction());
    navigate("/location");
  };

  // 删除地址操作
  const handleDelete = () => {
    removeLocation(id).then((res) => {
      if (res.code === 20000) {
        message.success("删除成功");
      } else {
        message.error(res.data.message);
      }
    });
    dispatch(getLocationAction());
    navigate("/location");
  };

  // 表单样式
  const formItemLayout = {
    labelCol: { span: 4, offset: 4 },
    wrapperCol: { span: 8 },
  };

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 8 },
  };

  return (
    <FDLocationInfoWraper>
      <FDTitle title={(update && "更改地址") || "新增地址"} />
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
    </FDLocationInfoWraper>
  );
});

export default FDLocationInfo;
