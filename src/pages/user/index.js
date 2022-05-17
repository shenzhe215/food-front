import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import { FDUserWraper, FDUserContentWraper } from "./style";
import { FDTitle } from "@/components";
import EditItem from "./edit-item";
import PasswordItem from "./password-item";
import FDUserTab from "./userTab";
import FDUserinfoItem from "./userinfo-item";
import FDMyCoupon from "./my-coupon";
import FDUserLocation from "./mylocation";

// 默认头像

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
  const params = useParams();

  // 自定义state
  const [type, setType] = useState();
  // hooks
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setType(params.type);
  }, [params]);

  // other hooks
  const getUserContent = () => {
    switch (type) {
      case "password":
        return <PasswordItem />;
      case "edit":
        return <EditItem />;
      case "coupon":
        return <FDMyCoupon />;
      case "location":
        return <FDUserLocation />;
      default:
        return <FDUserinfoItem />;
    }
  };
  return (
    <FDUserWraper>
      {/* <FDTitle title="个人信息" /> */}
      <div className="fd-content">
        <div className="user-tab">
          <FDUserTab />
        </div>
        <FDUserContentWraper>{getUserContent()}</FDUserContentWraper>
      </div>
    </FDUserWraper>
  );
});

export default FDUser;
