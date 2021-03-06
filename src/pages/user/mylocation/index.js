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
      // locationList: state.getIn(["userState", "locationList"]),
      // isLogin: state.getIn(["loginState", "isLogin"]),
      // curLocation: state.getIn(["userState", "curLocation"]),

      locationList: state.userState.get("locationList"),
      isLogin: state.loginState.get("isLogin"),
      curLocation: state.userState.get("curLocation"),
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
  }, []);

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

  // ??????
  const handleRemove = (locationInfo) => {
    removeLocation(locationInfo.id).then((res) => {
      if (res.code === 20000) {
        message.success("????????????", 1);
        dispatch(getLocationAction());
        // navigate("/location");
      } else {
        message.error(res.data.message, 1);
      }
    });
    dispatch(getLocationAction());
  };

  // ????????????
  const onFinish = (values) => {
    const { area } = values;
    let newArea;
    newArea = area.toString().replaceAll(",", " ");
    values.area = newArea;
    values.isDefault = checked ^ 0;
    if (!update) {
      addLocation(values).then((res) => {
        if (res.code === 20000) {
          message.success("????????????", 1);
        } else {
          message.error(res.data.message, 1);
        }
      });
    } else {
      values.id = id;
      updateLocation(values).then((res) => {
        if (res.code === 20000) {
          message.success("????????????", 1);
        } else {
          message.error(res.data.message, 1);
        }
      });
    }
    dispatch(getLocationAction());
    setVisiable(false);
  };

  // ????????????
  const handleDefault = (record) => {
    record.isDefault = 1;
    updateLocation(record).then((res) => {
      if (res.code === 20000) {
        message.success("????????????");
        dispatch(getLocationAction());
      } else {
        message.error(res.data.message);
      }
    });
    dispatch(getLocationAction());
  };
  
  const columns = [
    {
      title: "?????????",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "????????????",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "????????????",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "?????????",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "??????",
      key: "operation",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={handleEdit.bind(null, record)}>??????</a>
          <a onClick={handleRemove.bind(null, record)}>??????</a>
        </Space>
      ),
    },
    {
      title: "",
      key: "isDefault",
      dataIndex: "isDefault",
      render: (text, record) => (
        <Space size="middle">
          {(record.isDefault && <div className="defaultLoc">????????????</div>) || (
            <a onClick={handleDefault.bind(null, record)}>????????????</a>
          )}
        </Space>
      ),
    },
  ];

  // ????????????
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
          ????????????
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
            ??????
          </Button>,
        ]}
        title={(update && "??????????????????") || "???????????????"}
      >
        <div className="form">
          <Form
            layout="horizontal"
            onFinish={onFinish}
            form={form}
            {...formItemLayout}
          >
            <Form.Item
              label="????????????"
              name="area"
              rules={[{ required: true, message: "???????????????????????????" }]}
            >
              <Cascader
                options={cities}
                placeholder={"?????????????????????"}
              ></Cascader>
            </Form.Item>
            <Form.Item
              label="????????????"
              name="location"
              rules={[
                {
                  pattern: mathchUsername,
                  message: `??????????????????????????????`,
                },
                { required: true, message: "???????????????????????????" },
              ]}
            >
              <Input placeholder="?????????????????????" />
            </Form.Item>
            <Form.Item
              label="?????????"
              name="username"
              rules={[
                {
                  pattern: mathchUsername,
                  message: `???????????????????????????`,
                },
                { required: true, message: "?????????????????????" },
              ]}
            >
              <Input placeholder="??????????????????" />
            </Form.Item>

            <Form.Item
              label="?????????"
              name="mobile"
              rules={[
                {
                  pattern: mathchPhoneReg,
                  message: `???????????????????????????`,
                },
                { required: true, message: "????????????????????????" },
              ]}
            >
              <Input placeholder="??????????????????" />
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
                ??????????????????
              </Checkbox>
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <div className="operationBox">
                <Button block type="primary" size="middle" htmlType="submit">
                  {(update && "??????") || "??????"}
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
