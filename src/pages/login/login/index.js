import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Radio, message, InputNumber } from "antd";

import { getMatchReg } from "@/utils/format-utils";
import { FDLoginWraper, FDInputWraper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegisterCode, getCaptcha, verify } from "@/service/login";
import { getLoginProfileInfo } from "../store/actionCreators";

const FDLogin = memo(() => {
  const [loginMethod, setLoginMethod] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector(
    (state) => ({
      // isLogin: state.getIn(["loginState", "isLogin"]),
      isLogin: state.loginState.get("isLogin"),
    }),
    shallowEqual
  );

  // 登录方式
  // 表单正则: 根据不同登录方式,匹配不同的正则
  const mathchUsername = getMatchReg("username");
  const mathchPhoneReg = getMatchReg("phone");
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/;
  const codeReg = /[0-9a-zA-Z._-]{4,20}/;
  const captchaReg = /[a-zA-Z0-9]{5}/;

  // 自定义state
  const [isSendSatte, setIsSendSatte] = useState(false);
  const [second, setSecond] = useState(60);
  const [phone, setPhone] = useState(null);
  const [captcha, setCaptcha] = useState();
  const [key, setKey] = useState();
  // 注册事件
  const handleRegister = () => {
    navigate("/register");
  };

  const fetchCaptcha = () => {
    getCaptcha().then((res) => {
      if (res.code === 20000) {
        setCaptcha(res.data.image);
        setKey(res.data.key);
      }
    });
  };

  // component handle

  // hooks
  useEffect(() => {
    fetchCaptcha();
  }, []);

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
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
    const { captcha } = values;
    var verifyVo = {
      code: captcha,
      key: key,
    };
    verify(verifyVo).then((res) => {
      if (res.code === 20000) {
        dispatch(getLoginProfileInfo(values));
      } else {
        message.error("验证码错误");
      }
    });
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

  const formItemLayout = {
    labelCol: { span: 5, offset: 2 },
    wrapperCol: { span: 16 },
  };

  const formTailLayout = {
    wrapperCol: { span: 16, offset: 7 },
  };

  return (
    <FDLoginWraper>
      <div className="login-pane">
        <div className="loginTitle">
          <span className="loginSpan">
            <h6 className="welcome">Welcome</h6>
            <h6 className="to-login">欢迎登录湘情土菜馆</h6>
          </span>
        </div>
        <FDInputWraper>
          <Form
            {...formItemLayout}
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
            <Form.Item
              label="验证码"
              name="captcha"
              rules={[
                {
                  pattern: captchaReg,
                  message: `请输入验证码`,
                },
                { required: true, message: "请输入验证码" },
              ]}
            >
              <Input
                placeholder="请输入验证码"
                addonAfter={
                  <img
                    onClick={fetchCaptcha}
                    src={captcha}
                    width="130px"
                    height="38px"
                  />
                }
              />
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <Button type="primary" htmlType="submit" className="submitBtn">
                登录
              </Button>
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <div className="registerRow">
                {/* <span>找回密码</span> */}
                <span></span>
                <a onClick={handleRegister}>快速注册</a>
              </div>
            </Form.Item>
          </Form>
        </FDInputWraper>
      </div>
    </FDLoginWraper>
  );
});

export default FDLogin;
