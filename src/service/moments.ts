import { request } from "./request";
import { request as momentRequestConfig } from "./config/type";
export function momentRequest(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
  });
}
export function publishMoment(config: momentRequestConfig) {
  return request({
    url: config.url,
    method: config.method,
    data: config.data,
  });
}
