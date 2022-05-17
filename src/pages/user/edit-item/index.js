import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Form, Input, Button, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import { getMatchReg } from "@/utils/format-utils";
import { sendRegisterCode, updateUserInfo } from "@/service/login";
import { getLatestInfoAction } from "../../login/store";
import { EditWraper } from "./style";
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传 JPG/PNG 格式文件!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("文件大小必须小于 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const EditItem = memo((props) => {
  const dispatch = useDispatch();
  const mathchPhoneReg = getMatchReg("phone");
  const mathchUsername = getMatchReg("username");

  const { isLogin, userInfo } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );

  // 自定义state
  // const { userInfo } = props;
  const [update, setUpdate] = useState(false);
  const [form] = Form.useForm();
  const [isSendSatte, setIsSendSatte] = useState(false);
  const [second, setSecond] = useState(60);
  const [phone, setPhone] = useState(userInfo.mobile);
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/;
  const codeReg = /[0-9a-zA-Z._-]{4,20}/;
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState("");

  // hooks
  useEffect(() => {
    const { avatar, nickname, mobile } = userInfo;
    setAvatar(avatar);
    form.setFieldsValue({
      nickname: nickname,
      mobile: mobile,
    });
  }, []);

  // other hooks
  // 表单提交
  const onFinish = (values) => {
    values.avatar = avatar;
    updateUserInfo(values).then((res) => {
      if (res.code === 20000) {
        message.success("用户信息更新成功", 1);
        dispatch(getLatestInfoAction());
      } else {
        message.error(res.message);
      }
    });
  };

  // 验证码处理
  const handleSendCode = () => {
    // 60秒延迟定时器
    if (!isSendSatte) {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setSecond(second - i);
        if (i >= 60) {
          clearInterval(timer);
          setIsSendSatte(false);
          setSecond(60);
        }
      }, 1000);
      // 发送验证码
      !isSendSatte &&
        sendRegisterCode(phone).then((res) => {
          if (res.code === 20000) message.success("发送成功");
          else message.error("发送失败, 请60秒后发送验证码");
        });
    }
    setIsSendSatte(true);
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

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setAvatar(info.file.response.data.url);
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <EditWraper>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        form={form}
        {...formItemLayout}
      >
        <Form.Item
          label="头像"
          name="avatar"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount="1"
            listType="picture-card"
            action="http://127.0.0.1:9001/foodoss/fileoss"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {avatar ? (
              <img src={avatar} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label="用户名"
          name="nickname"
          rules={[
            {
              pattern: mathchUsername,
              message: `请输入正确的用户名`,
            },
            { required: true, message: "请输入正确的用户名" },
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
          <Input
            placeholder="请输入手机号"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="短信验证码"
          name="code"
          rules={[
            { pattern: codeReg, message: "验证码最短4位" },
            { required: true, message: "请输入验证码" },
          ]}
        >
          <Input
            placeholder="请输入验证码"
            addonAfter={
              <a onClick={handleSendCode}>
                {isSendSatte ? second + "s" : "发送验证码"}
              </a>
            }
          />
        </Form.Item>

        <Form.Item {...formTailLayout}>
          <div className="operationBox">
            <Button block type="primary" size="middle" htmlType="submit">
              更新
            </Button>
          </div>
        </Form.Item>
      </Form>
    </EditWraper>
  );
});

export default EditItem;
