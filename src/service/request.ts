import axios from "axios";
import { InternalAxiosRequestConfig } from "axios";
import { request } from "./config/type";
import { baseURL, timeout, port, option, loading } from "./config/config";
import { useStorge } from "@/hooks/useStorge";
export function request(config: request) {
  const instance = axios.create({
    baseURL: `${baseURL}:${port}`,
    timeout: timeout,
  });

  const wjLoading = new loading(option);
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
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
      wjLoading.close();
      switch (config.data.message) {
        case "token错误":
          window.location.href = "http://localhost:8080/login";
          break;
        case "内容不能为空":
          alert("禁止空内容");
          break;
        default:
          break;
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
