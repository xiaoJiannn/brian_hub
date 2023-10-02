import { request } from "./request";
import { request as userRequest } from "./config/type";
export function getUserInfo(config: userRequest) {
  return request({
    method: "GET",
    url: "/user",
  });
}
