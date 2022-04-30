import React, { memo, useState } from "react";
import { Form, Input, Button, Radio, message, InputNumber } from "antd";

import { getMatchReg } from "@/utils/format-utils";
import { FDRegisterWraper, FDInputWraper } from "./style";
import { useNavigate } from "react-router-dom";
import { sendRegisterCode, sendRegister } from "@/service/login";

const FDRegister = memo(() => {
  const navigate = useNavigate();

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
  // component handle

  const onFinish = (values) => {
    sendRegister(values).then((res) => {
      if (res.code === 20000) {
        message.success("注册成功");
        navigate("/login");
      } else message.error(res.message);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 登录事件
  const handleLogin = () => {
    navigate("/login");
  };

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

  // 表单样式
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 4 },
  };

  return (
    <FDRegisterWraper>
      <div className="registerTitle">
        <span className="registerSpan">注册,</span>
        <span className="welcomeSpan">欢迎注册~</span>
      </div>
      <FDInputWraper>
        <Form
          {...layout}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
        >
          <Form.Item
            label="用户名"
            name="nickname"
            rules={[
              {
                pattern: mathchUsername,
                message: `请输入正确的用户名`,
              },
              { required: true, message: "请输入你的账户" },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { pattern: pwdReg, message: "密码最短6位" },
              { required: true, message: "请输入密码!" },
            ]}
          >
            <Input.Password placeholder="请输入密码" />
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
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submitBtn">
              注册
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="loginRow">
              <span></span>
              <a onClick={handleLogin}>去登录</a>
            </div>
          </Form.Item>
        </Form>
      </FDInputWraper>
    </FDRegisterWraper>
  );
});

export default FDRegister;
