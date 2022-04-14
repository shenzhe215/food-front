import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";
import {message, Modal} from 'antd';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

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
    if (res.code !== 20000) {
      message.error({
        content: res.message || "Error",
        duration: 5,
      });

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
    message.error({
      content: error.message,
      duration: 5,
    });
    return Promise.reject(error);
  }
);

export default instance;
