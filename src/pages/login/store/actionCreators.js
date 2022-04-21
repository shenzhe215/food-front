import { submitLoginUser, getLoginUserInfo } from "@/service/login";
import * as actionTypes from "./constants";
import loginInfo from "@/config/token";
import {
  getLoginInfo,
  setLoginInfo,
  clearLoginState,
} from "@/utils/secret-key";
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
        // 登录成功
        cookie.set("food_token", res.data.token, { domain: "localhost" });
        // console.log(cookie.get("food_token"));

        document.cookie = res.data.token;
        // 获取用户信息
        getLoginUserInfo().then((res) => {
          const userInfo = res.data.userInfo;
          cookie.set("food_ucenter", JSON.stringify(userInfo), {
            domain: "localhost",
          });

          // 更改登录状态
          // console.log(cookie.get("food_ucenter"));
          // console.log(res);
          dispatch(changeUserProfileAction(userInfo));
        });
       

        // 更改登录状态
        dispatch(changeUserLoginStateAction(true));
        dispatch(changeUserLoginTokenAction(cookie.get("food_token")));
      }
    });
  };
};

// -------------退出信息-------------
export const logOutAction = (values) => {
  return (dispatch, getState) => {
    // 清除
    // cookie.set("food_token", "", { domain: "localhost" });
    // cookie.set("food_ucenter", "", { domain: "localhost" });
    cookie.remove("food_token");
    cookie.remove("food_ucenter");
    // 清除用户信息
    // 更改登录状态
    // clearLoginState();

    // let newLoginInfo = Object.assign(getLoginInfo("loginInfo"), loginInfo);
    // setLoginInfo("loginInfo", newLoginInfo);
    // debugger
    // 更改登录状态
    dispatch(changeUserLoginStateAction(false));
    dispatch(changeUserLoginTokenAction(""));
    // 保存用户信息
    const newUserProfile = {};
    dispatch(changeUserProfileAction(newUserProfile));
  };
};
