import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Radio, message, InputNumber } from "antd";

import { getMatchReg } from "@/utils/format-utils";
import { FDLoginWraper, FDInputWraper, FDBtnWraper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegisterCode, sendRegister } from "@/service/login";
import { getLoginProfileInfo } from "../store/actionCreators";

const FDLogin = memo(() => {
  const [loginMethod, setLoginMethod] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );

  // 登录方式
  // 表单正则: 根据不同登录方式,匹配不同的正则
  const mathchUsername = getMatchReg("username");
  const mathchPhoneReg = getMatchReg("phone");
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/;
  const codeReg = /[0-9a-zA-Z._-]{4,20}/;

  // 自定义state
  const [isSendSatte, setIsSendSatte] = useState(false);
  const [second, setSecond] = useState(60);
  const [phone, setPhone] = useState(null);
  // 注册事件
  const handleRegister = () => {
    navigate("/register");
  };

  // component handle

  // hooks
  useEffect(() => {
    // navigate("/food");
  }, []);

  useEffect(() => {
    if (isLogin) {
      navigate("/food");
    } else {
      navigate("/login");
    }
  }, [isLogin]);

  // 验证码处理
  // handle function
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

  // 表单提交
  const onFinish = (values) => {
    dispatch(getLoginProfileInfo(values));
  };

  const loginForm = () => {
    switch (loginMethod) {
      case "mobile":
        return (
          <>
            <Form.Item
              label="短信验证码"
              name="code"
              extra={
                <a onClick={handleSendCode}>
                  {isSendSatte ? second + "s" : "发送验证码"}
                </a>
              }
              rules={[
                { pattern: codeReg, message: "验证码最短4位" },
                { required: true, message: "请输入验证码" },
              ]}
            ></Form.Item>
          </>
        );
      case "password":
        return (
          <>
            <Form.Item
              // name={["user", "password"]}
              name="password"
              label="密码"
              rules={[
                { pattern: pwdReg, message: "密码最短6位" },
                { required: true, message: "请输入密码!" },
              ]}
            >
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
          </>
        );
    }
  };

  const layout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 4 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <FDLoginWraper>
      <div className="loginTitle">
        <span className="loginSpan">登录</span>
        <span className="welcomeSpan">欢迎再次回来~</span>
      </div>
      <FDInputWraper>
        <Form
          {...layout}
          layout="horizontal"
          onFinish={onFinish}
          // validateMessages={validateMessages}
          labelAlign="right"
          size="large"
        >
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
          {loginForm()}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submitBtn">
              登录
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 1 }}>
            <div className="registerRow">
              <span>找回密码</span>
              <a onClick={handleRegister}>快速注册</a>
            </div>
          </Form.Item>
        </Form>
      </FDInputWraper>
    </FDLoginWraper>
  );
});

export default FDLogin;
