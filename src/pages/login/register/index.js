// import React, { memo, useState } from "react";
// import {
//   Toast,
//   Form,
//   Input,
//   Button,
//   Radio,
//   Space,
//   Tag,
//   Divider,
// } from "antd-mobile";
// import { getMatchReg } from "@/utils/format-utils";
// import { FDRegisterWraper, FDInputWraper } from "./style";
// import { useNavigate } from "react-router-dom";
// import { sendRegisterCode, sendRegister } from "@/service/login";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// const FDRegister = memo(() => {
//   const navigate = useNavigate();

//   // 登录方式
//   // 表单正则: 根据不同登录方式,匹配不同的正则
//   const mathchUsername = getMatchReg("username");
//   const mathchPhoneReg = getMatchReg("phone");
//   const pwdReg = /[0-9a-zA-Z._-]{6,20}/;
//   const codeReg = /[0-9a-zA-Z._-]{4,20}/;
//   // 自定义state
//   const [isSendSatte, setIsSendSatte] = useState(false);
//   const [second, setSecond] = useState(60);
//   const [phone, setPhone] = useState(null);
//   // component handle

//   const onFinish = (values) => {
//     sendRegister(values).then((res) => {
//       console.log(res);
//       if (res.code === 20000) {
//         Toast.show({
//           icon: "success",
//           content: "注册成功",
//           duration: 2000,
//         });
//         navigate("/login");
//       } else
//         Toast.show({
//           icon: "fail",
//           content: res.message,
//           duration: 2000,
//         });
//     });
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   // 登录事件
//   const handleLogin = () => {
//     navigate("/login");
//   };

//   // 验证码处理
//   // handle function
//   const handleSendCode = () => {
//     // 60秒延迟定时器
//     if (!isSendSatte) {
//       let i = 0;
//       const timer = setInterval(() => {
//         i++;
//         setSecond(second - i);
//         if (i >= 60) {
//           clearInterval(timer);
//           setIsSendSatte(false);
//           setSecond(60);
//         }
//       }, 1000);
//       // 发送验证码
//       !isSendSatte &&
//         sendRegisterCode(phone).then((res) => {
//           if (res.code === 20000)
//             Toast.show({
//               icon: "success",
//               content: "发送成功",
//               duration: 2000,
//             });
//           else
//             Toast.show({
//               icon: "fail",
//               content: "发送失败, 请60秒后发送验证码",
//               duration: 2000,
//             });
//         });
//     }
//     setIsSendSatte(true);
//   };

//   return (
//     <FDRegisterWraper>
//       <div className="registerTitle">
//         <span className="registerSpan">注册</span>
//         <span className="welcomeSpan">欢迎注册~</span>
//       </div>
//       <FDInputWraper>
//         <Form
//           layout="horizontal"
//           mode="card"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//         >
//           {/* <Form.Header>欢迎注册</Form.Header> */}
//           <Form.Item
//             label="用户名"
//             name="nickname"
//             rules={[
//               {
//                 pattern: mathchUsername,
//                 message: `请输入正确的用户名`,
//               },
//               { required: true, message: "请输入你的账户" },
//             ]}
//           >
//             <Input
//               clearable
//               placeholder="请输入用户名"
//               style={{ "--font-size": "1.2em" }}
//             />
//           </Form.Item>
//           <Form.Item
//             label="密码"
//             name="password"
//             rules={[
//               { pattern: pwdReg, message: "密码最短6位" },
//               { required: true, message: "请输入密码!" },
//             ]}
//           >
//             <Input
//               clearable
//               type="password"
//               placeholder="请输入密码"
//               style={{ "--font-size": "1.2em" }}
//             />
//           </Form.Item>
//           <Form.Item
//             label="手机号"
//             name="mobile"
//             rules={[
//               {
//                 pattern: mathchPhoneReg,
//                 message: `请输入正确的手机号`,
//               },
//               { required: true, message: "请输入你的手机号" },
//             ]}
//           >
//             <Input
//               clearable
//               placeholder="请输入手机号"
//               onChange={(value) => {
//                 setPhone(value);
//               }}
//               style={{ "--font-size": "1.2em" }}
//             />
//           </Form.Item>
//           <Form.Item
//             label="短信验证码"
//             name="code"
//             extra={
//               <a onClick={handleSendCode}>
//                 {isSendSatte ? second + "s" : "发送验证码"}
//               </a>
//             }
//             rules={[
//               { pattern: codeReg, message: "验证码最短4位" },
//               { required: true, message: "请输入验证码" },
//             ]}
//           >
//             <Input
//               clearable
//               placeholder="请输入验证码"
//               style={{ "--font-size": "1.2em" }}
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               block
//               color="primary"
//               size="middle"
//               className="submitBtn"
//               type="submit"
//             >
//               注册
//             </Button>
//           </Form.Item>
//           <Form.Item>
//             <div className="loginRow">
//               <span></span>
//               <span onClick={handleLogin}>去登录</span>
//             </div>
//           </Form.Item>
//         </Form>
//       </FDInputWraper>
//     </FDRegisterWraper>
//   );
// });

// export default FDRegister;
