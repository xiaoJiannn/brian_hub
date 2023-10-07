import { request } from "./request";
import { request as requestConfig } from "./config/type";
export function uploadAvatar(config: requestConfig) {
  return request({
    url: config.url,
    method: config.method,
    data: config.data,
    headers:config.headers
  });
}
