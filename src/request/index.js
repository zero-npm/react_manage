import axios from "axios";

import { Modal, message, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { getToken } from "@/utils/auth";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.REACT_APP_BASE_API,
  // 超时
  timeout: 10000,
});
console.log(process.env.REACT_APP_BASE_API);
// request拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    if (code === 401) {
      Modal.config({
        title: "系统提示",
        icon: <ExclamationCircleOutlined />,
        content: "登录过期，是否重新登录？",
        okText: "确认",
        cancelText: "取消",
        onOk: () => {
          console.log("重新登录");
        },
      });
      // MessageBox.confirm(
      //   '登录状态已过期，您可以继续留在该页面，或者重新登录',
      // '系统提示', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }
      // ).then(() => {
      //   store.dispatch('LogOut').then(() => {
      //     location.reload() // 为了重新实例化vue-router对象 避免bug
      //   })
      // })
    } else if (code === 600) {
      window.location.href = res.data.msg;
    } else if (code !== 200) {
      notification.error({
        message: "错误提示",
        description: res.data.msg,
      });
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    console.log("err" + error);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
