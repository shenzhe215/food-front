import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Avatar } from "antd";
import { FDHeadWraper, HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { logOutAction } from "@/pages/login/store";
import { MyIcon } from "../../common/local-data";

// 默认头像
const DEFAULT_AVATAR =
  "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg";

const FDAppHeader = memo(() => {
  // states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, userInfo } = useSelector(
    (state) => ({
      // isLogin: state.getIn(["loginState", "isLogin"]),
      // userInfo: state.getIn(["loginState", "profile"]),
      isLogin: state.loginState.get("isLogin"),
      userInfo: state.loginState.get("profile"),
    }),
    shallowEqual
  );

  // other states
  // otherHooks
  const handleLogin = () => {
    if (!isLogin) {
      navigate("/login");
    }
  };

  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 4) {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="appTitle">
          <MyIcon type="icon-xiangcai" className="title-icon" />
          湘情土菜馆
        </div>
        <HeaderLeft>
          <div className="select-list">
            <div className="select-item">
              <NavLink to={"/home"}>{"首页"}</NavLink>
            </div>
            <div className="select-item">
              <NavLink to={"/food"}>{"客户点餐"}</NavLink>
            </div>
            <div className="select-item order">
              {/* <div className="downMenu loginMenu3">
                <Link to={"/order"}>进行中</Link>
                <Link to={"/order"}>已完成</Link>
              </div> */}
              <NavLink to={"/order"}>{"订单管理"}</NavLink>
            </div>
            <div className="select-item person">
              {/* <div className="downMenu loginMenu4">
                <Link to="/user">个人信息</Link>
                <Link to="/location">地址信息</Link>
                <Link to="/user/coupon">优惠信息</Link>
              </div> */}
              <NavLink to={"/user"}>{"个人中心"}</NavLink>
            </div>
          </div>
        </HeaderLeft>
        <HeaderRight>
          {isLogin && (
            <div className="downMenu loginMenu">
              <a onClick={handleLogOut}>登出</a>
            </div>
          )}
          {(isLogin && (
            <Avatar src={userInfo.avatar || DEFAULT_AVATAR}></Avatar>
          )) || (
            <div className="login" onClick={handleLogin}>
              登录
            </div>
          )}
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default FDAppHeader;
