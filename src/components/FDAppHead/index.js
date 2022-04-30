import React, { memo } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Layout, Menu, Breadcrumb, Input, Avatar } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import { FDHeadWraper, HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";
import { logOutAction } from "@/pages/login/store";

const { Header } = Layout;
const { SubMenu } = Menu;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3351915_2ossp9fwedo.js", // 在 iconfont.cn 上生成
});

// 默认头像
const DEFAULT_AVATAR =
  "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg";

const FDAppHeader = memo(() => {
  // states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, userInfo } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
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
        <div className="appTitle">React点餐系统</div>
        <HeaderLeft>
          <div className="select-list">
            <div className="select-item">
              <NavLink to={"/home"}>{"首页"}</NavLink>
            </div>
            <div className="select-item">
              <NavLink to={"/food"}>{"进行点餐"}</NavLink>
            </div>
            <div className="select-item order">
              <div className="downMenu loginMenu3">
                <Link to={"/order"}>进行中</Link>
                <Link to={"/order"}>已完成</Link>
              </div>
              <NavLink to={"/order"}>{"订单管理"}</NavLink>
            </div>
            <div className="select-item person">
              <div className="downMenu loginMenu4">
                <Link to="/user">个人信息</Link>
                <Link to="/location">地址信息</Link>
                <Link to="/user/coupon">优惠信息</Link>
              </div>
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
