import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";

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
    console.log("login");
  });
  // useEffect(() => {
  //   if (isLogin) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [isLogin]);
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
            >
              <Input clearable placeholder="请输入验证码" />
            </Form.Item>
          </>
        );
      case "password":
        return (
          <>
            <Form.Item
              //   label="密码"
              name="password"
              rules={[
                { pattern: pwdReg, message: "密码最短6位" },
                { required: true, message: "请输入密码!" },
              ]}
            >
              <Input
                clearable
                type="password"
                placeholder="请输入密码"
                style={{ "--font-size": "1.5em" }}
              />
            </Form.Item>
          </>
        );
    }
  };
  return (
    <FDLoginWraper>
      <h1>登录界面</h1>
    </FDLoginWraper>
  );
});

export default FDLogin;
