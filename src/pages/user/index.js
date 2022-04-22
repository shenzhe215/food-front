import React, { memo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { recommendUtils, myAssets } from "@/common/local-data";
import { FDUserWraper } from "./style";
import { logOutAction } from "../login/store";
// 默认头像
const DEFAULT_AVATAR =
  "https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg";

const FDUser = memo(() => {
  const { isLogin, userInfo } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 自定义state

  // hooks
  useEffect(() => {
  }, []);
  // 其他hooks
  const handleLogOut = () => {
    console.log("logout");
    dispatch(logOutAction());
  };

  return (
    <FDUserWraper>
      {/* <div>个人中心</div>
      <div>个人中心</div>
      <div>优惠</div> */}
      {/* 个人信息 */}
      <div className="titlePane">
        <img
          className="bg"
          //   src={BASE_URL + "/img/profile/bg.png"}
          alt="背景图"
        />
        <div className="info">
          <div className="myIcon">
            <img
              className="avatar"
              src={userInfo.avatar || DEFAULT_AVATAR}
              alt="icon"
            />
          </div>
          <div className="user">
            <div className="name">{userInfo.nickname || "游客"}</div>
            {/* 登录后展示： */}
            {isLogin ? (
              <>
                <div className="auth">
                  <span onClick={handleLogOut}>退出</span>
                </div>
                <div className="edit">
                  编辑个人资料
                  <span className="arrow">
                    <i className="iconfont icon-arrow" />
                  </span>
                </div>
              </>
            ) : (
              <div className="edit">
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  去登录
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ad">
        <h2>加入我们</h2>
      </div>
    </FDUserWraper>
  );
});

export default FDUser;
