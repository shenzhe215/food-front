import React, { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, Avatar, Space } from "antd";
import { FDUserWraper, ContentArea, InfoBottom, Footer } from "./style";
import { logOutAction } from "../login/store";
import { FDTitle } from "@/components";
import EditItem from "./edit-item";
import PasswordItem from "./password-item";
import {
  changeUpdateVisiableAction,
  changePasswordAction,
} from "./store/actionCreators";
// 默认头像
const DEFAULT_AVATAR =
  "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg";

const FDUser = memo(() => {
  const { isLogin, userInfo, updateVisiable, passwordVisiable } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
      updateVisiable: state.getIn(["userState", "updateVisiable"]),
      passwordVisiable: state.getIn(["userState", "passwordVisiable"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 自定义state

  // hooks
  useEffect(() => {}, []);
  // 其他hooks
  const handlePassword = () => {
    dispatch(changePasswordAction(true));
    dispatch(changeUpdateVisiableAction(false));
  };

  const handleUpdate = () => {
    dispatch(changePasswordAction(false));
    dispatch(changeUpdateVisiableAction(true));
  };

  return (
    <FDUserWraper>
      <FDTitle title="个人信息" />
      <ContentArea>
        <div className="row">
          <label>头像：</label>
          <p>
            <Avatar src={userInfo.avatar} size={48} />
          </p>
        </div>
        <div className="row">
          <label>用户名：</label>
          <p>{userInfo.nickname}</p>
        </div>
        <div className="row">
          <label>手机号：</label>
          <p>{userInfo.mobile}</p>
        </div>
        <div className="row">
          <label>用户积分：</label>
          <p>{userInfo.credit}</p>
        </div>
      </ContentArea>
      <InfoBottom>
        <Space>
          <Button type="primary" onClick={handlePassword}>
            修改登录密码
          </Button>
          <Button type="primary" onClick={handleUpdate}>
            修改个人信息
          </Button>
        </Space>
      </InfoBottom>
      <Footer>
        {updateVisiable || <EditItem userInfo={userInfo} />}
        {passwordVisiable && <PasswordItem password={userInfo.password} />}
      </Footer>
    </FDUserWraper>
  );
});

export default FDUser;
