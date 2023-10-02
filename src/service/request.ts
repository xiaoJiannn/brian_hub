import axios from "axios";
import { InternalAxiosRequestConfig } from "axios";
import { wjRequestConfig } from "./config/type";
import { baseURL, timeout, port, option, loading } from "./config/config";

export function request(config: wjRequestConfig) {
  const instance = axios.create({
    baseURL: `${baseURL}:${port}`,
    timeout: timeout,
  });

  const wjLoading = new loading(option);
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log("请求拦截");
      config.headers.Authorization = "";
      wjLoading.showloading();
      return config;
    },
    (err) => {
      // console.log(err);
    }
  );
  instance.interceptors.response.use(
    (config) => {
      wjLoading.close();
      return config;
    },
    (err) => {
      alert(err);
      wjLoading.close();
    }
  );
  return instance(config);
}
