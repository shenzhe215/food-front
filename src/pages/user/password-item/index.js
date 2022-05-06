import React, { memo, useState } from "react";
import { Form, Input, Button, message } from "antd";

import { updatePassword } from "@/service/login";
const PasswordItem = memo(() => {
  // 自定义state
  const [update, setUpdate] = useState(false);
  const [form] = Form.useForm();
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/;
  // other hooks
  // 表单提交
  const onFinish = (values) => {
    updatePassword(values).then((res) => {
      if (res.code === 20000) {
        message.success("修改密码成功");
        // navigate("/login");
      } else {
        message.error(res.message);
      }
    });
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
    <div>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        form={form}
        {...formItemLayout}
      >
        <Form.Item
          label="旧密码"
          name="oldPassword"
          rules={[
            { pattern: pwdReg, message: "密码最短6位" },
            { required: true, message: "请输入你的旧密码" },
          ]}
        >
          <Input.Password placeholder="请输入旧密码" />
        </Form.Item>

        <Form.Item
          label="新密码"
          name="password"
          rules={[
            { pattern: pwdReg, message: "密码最短6位" },
            { required: true, message: "请输入你的新密码" },
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <div className="operationBox">
            <Button block type="primary" size="middle" htmlType="submit">
              更新
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
});

export default PasswordItem;
