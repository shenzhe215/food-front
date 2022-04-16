import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { Toast, Modal } from "antd-mobile";
import cookie from "js-cookie";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    if (cookie.get("food_token")) {
      config.headers["token"] = cookie.get("food_token");
    }
    // 3.params/data序列化的操作

    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 28004) {
      console.log("response.data.resultCode是28004");
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
      //debugger
      window.location.href = "/login";
      return;
    } else if (res.code !== 20000) {
      //25000：订单支付中，不做任何提示
      if (response.data.code !== 25000) {
        Toast.show({
          icon: "fail",
          content: res.message || "Error",
          duration: 3000,
        });
      }
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   Modal.confirm(
      //     {
      //       title:"警告",
      //       content:  "您已退出，您可以选择取消停留在此界面，也可以重新登录",
      //       okText: "重新登录",
      //       cancelText: "取消",
      //       type: "warning",
      //     }
      //   ).then(() => {
      //     store.dispatch("user/resetToken").then(() => {
      //       location.reload();
      //     });
      //   });
      // }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Toast.show({
      icon: "fail",
      content: error.message,
      duration: 3000,
    });
    return Promise.reject(error);
  }
);

export default instance;
