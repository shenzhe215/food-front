import { submitLoginUser, getLoginUserInfo } from "@/service/login";
import * as actionTypes from "./constants";
import loginInfo from "@/config/token";
import { getLoginInfo, setLoginInfo } from "@/utils/secret-key";
// import md5 from 'js-md5'
import { Toast } from "antd-mobile";
import cookie from "js-cookie";

// 更改登录用户信息
export const changeUserProfileAction = (profileInfo) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile: profileInfo,
});

// 更改登录状态
export const changeUserLoginStateAction = (loginState) => ({
  type: actionTypes.CHANGE_USER_LOGIN_STATE,
  isLogin: loginState,
});

// 更改登录状态(token)
export const changeUserLoginTokenAction = (token) => ({
  type: actionTypes.CHANGE_PROFILE_TOKEN,
  token,
});

// 更改登录状态(cookie)
export const changeUserLoginCookieAction = (cookie) => ({
  type: actionTypes.CHANGE_PROFILE_COOKIE,
  cookie,
});

// -------------获取登录信息-------------
export const getLoginProfileInfo = (values) => {
  return (dispatch, getState) => {
    submitLoginUser(values).then((res) => {
      if (res.code !== 20000) {
        Toast.show({
          icon: "fail",
          content: "账号或密码错误",
          duration: 2000,
        });
      } else {
        Toast.show({
          icon: "success",
          content: "登录成功",
          duration: 2000,
        });
        // console.log(res)
        // 登录成功
        cookie.set("food_token", res.data.token, { domain: "localhost" });

        // 获取用户信息
        getLoginUserInfo().then((res) => {
          const userInfo = res.data.userInfo;
          cookie.set("food_ucenter", JSON.stringify(userInfo), {
            domain: "localhost",
          });

          // 更改登录状态
          loginInfo.nickname = userInfo.nickname;
          loginInfo.password = userInfo.password;
          loginInfo.state = true;
          let newLoginInfo = Object.assign(
            getLoginInfo("loginInfo"),
            loginInfo
          );
          setLoginInfo("loginInfo", newLoginInfo);
        });
        // document.cookie = res.cookie;
        // 保存登录信息
        // console.log(cookie.get("food_ucenter"));

        // 更改登录状态
        dispatch(changeUserLoginStateAction(true));
        dispatch(changeUserLoginTokenAction(cookie.get("food_token")));
        // dispatch(changeUserLoginCookie(cookie.get("food_token")));
        // 保存用户信息
        dispatch(changeUserProfileAction(JSON.parse(cookie.get("food_ucenter"))));
      }
    });
  };
};
