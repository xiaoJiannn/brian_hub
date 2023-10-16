import { request } from "./request";
import { request as momentRequestConfig } from "./config/type";
export function momentRequest(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
    params: config.params,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export function publishMoment(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
    data: config.data,
  });
}
export function showUserMoment(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
    params: config.params,
  });
}
export function momentDetail(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
  });
}
