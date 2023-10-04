import axios from "axios";
import { InternalAxiosRequestConfig } from "axios";
import { wjRequestConfig } from "./config/type";
import { baseURL, timeout, port, option, loading } from "./config/config";
import { useStorge } from "@/hooks/useStorge";
export function request(config: wjRequestConfig) {
  const instance = axios.create({
    baseURL: `${baseURL}:${port}`,
    timeout: timeout,
  });

  const wjLoading = new loading(option);
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log("请求拦截");
      const token = useStorge.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      wjLoading.showloading();
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(
    (config) => {
      console.log(config);

      wjLoading.close();
      if (config.data.message === "token错误") {
        window.location.href = "http://localhost:8080/login";
      }
      if (config.data.message === "内容不能为空") {
        alert("禁止空内容");
      }
      return config;
    },
    (err) => {
      alert(err);
      wjLoading.close();
    }
  );
  return instance(config);
}
