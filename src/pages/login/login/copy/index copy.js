import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Radio, Space, Toast } from "antd-mobile";
import { getMatchReg } from "@/utils/format-utils";
import { FDLoginWraper, FDInputWraper, FDBtnWraper } from "../style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegisterCode, sendRegister } from "@/service/login";
import { getLoginProfileInfo } from "../../store/actionCreators";
import { is } from "immutable";

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
          if (res.code === 20000)
            Toast.show({
              icon: "success",
              content: "发送成功",
              duration: 2000,
            });
          else
            Toast.show({
              icon: "fail",
              content: "发送失败, 请60秒后发送验证码",
              duration: 2000,
            });
        });
    }
    setIsSendSatte(true);
  };

  // 表单提交
  const onFinish = (values) => {
    dispatch(getLoginProfileInfo(values));
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLogin]);

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
            {/* <Form.Item
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
              <Input clearable placeholder="请输入用户名" />
            </Form.Item> */}

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { pattern: pwdReg, message: "密码最短6位" },
                { required: true, message: "请输入密码!" },
              ]}
            >
              <Input clearable type="password" placeholder="请输入密码" />
            </Form.Item>
          </>
        );
    }
  };
  return (
    <FDLoginWraper>
      <div className="loginTitle">
        <span>登录</span>
        <span>欢迎再次回来</span>
      </div>
      <FDInputWraper>
        <Form layout="horizontal" mode="card" onFinish={onFinish}>
          <Form.Header>请登录</Form.Header>
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
              clearable
              placeholder="请输入手机号"
              onChange={(value) => {
                setPhone(value);
              }}
            />
          </Form.Item>
          {loginForm()}
          <Form.Item>
            <Button
              block
              type="submit"
              color="primary"
              size="middle"
              className="submitBtn"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </FDInputWraper>

      <Form.Item
        name="loginMethod"
        label="请选择登录方式："
        className="loginWay"
      >
        <br />
        <div className="radioGroup">
          <Radio.Group onChange={(value) => setLoginMethod(value)}>
            <Space>
              <Radio value="mobile">验证码登录</Radio>
              <Radio value="password">密码登录</Radio>
            </Space>
          </Radio.Group>
        </div>
      </Form.Item>
      <FDBtnWraper>
        <span className="space">
          <h4>没有账户：去注册 </h4>
        </span>
        <Button
          block
          color="default"
          size="middle"
          className="submitBtn"
          onClick={handleRegister}
        >
          注册
        </Button>
      </FDBtnWraper>
    </FDLoginWraper>
  );
});

export default FDLogin;
