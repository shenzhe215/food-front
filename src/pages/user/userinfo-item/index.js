import React, { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Avatar } from "antd";
import { ContentArea } from "./style";

const FDUser = memo(() => {
  const { isLogin, userInfo } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );
  const navigate = useNavigate();

  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return (
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
  );
});

export default FDUser;
