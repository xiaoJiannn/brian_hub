import { request } from "./request";
import { request as userRequest } from "./config/type";
export function getUserInfo(config: userRequest) {
  return request({
    method: "GET",
    url: "/user",
  });
}

export function registerUser(config: userRequest) {
  return request({
    method: config.method,
    url: config.url,
    data: config.data,
  });
}

export function login(config: userRequest) {
  return request({
    method: config.method,
    url: config.url,
    data: config.data,
  });
}

export function getUserProfile(config: userRequest) {
  return request({
    url: config.url,
    method: config.method,
  });
}

export function getHomeAvatar(config: userRequest) {
  return request({
    url: config.url,
    method: config.method,
  });
}
