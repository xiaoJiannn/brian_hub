import { defineStore } from "pinia";
import {
  getHomeAvatar,
  getUserInfo,
  getUserProfile,
  updateProfile,
} from "@/service/user";
import { uploadAvatar } from "@/service/uploads";
import { registerUser } from "@/service/user";
import { useStorge } from "@/hooks/useStorge";
import { request as requestConfig } from "@/service/config/type";
export const useClient = defineStore("user", {
  state: () => ({
    userInfo: [] as any[],
    profile: [] as any[],
    homeProfile: [] as any[],
    loginStatus: "",
  }),
  actions: {
    async getUserData() {
      const result = await getUserInfo({ url: "/user", method: "GET" });
      const userData = result.data.data;
      for (const item of userData) {
        this.userInfo.push(item);
      }
    },
    async registerWithLoginUser(data: object, url: string, router: any) {
      const result = await registerUser({
        url: url,
        data: data,
        method: "POST",
      });
      this.loginStatus = result.data.message;
      if (this.loginStatus === "请求成功") {
        router.push("/home");
        const token = result.data.data.token;
        useStorge.setItem("token", token);
      } else if (this.loginStatus === "用户名或密码错误") {
        alert("密码或用户名错误");
        return;
      }
    },

    async getProfile(id: any) {
      const profileResult = await getUserProfile({
        url: `/user/profile/${id}`,
        method: "GET",
      });
      const result = profileResult.data.data;
      if (this.profile.length !== 0) {
        this.profile.splice(0, 1);
      }
      this.profile.push(result[0]);
    },
    async getHomeAvatar() {
      const profileResult = await getHomeAvatar({
        url: "/user/homeAvatar",
        method: "GET",
      });
      const result = profileResult.data.data;
      console.log(profileResult);

      if (this.homeProfile.length !== 0) {
        this.homeProfile.splice(0, 1);
      }
      this.homeProfile.push(result);
    },
    async uploadAvatar(config: requestConfig) {
      const result = await uploadAvatar(config);
    },
    async updateProfile(name: string, id: any) {
      console.log(name, id);

      const result = await updateProfile({
        url: `/user/updateProfile/${id}`,
        method: "POST",
        data: {
          name,
          pwd: "123456",
        },
      });
      if ((result.data.message = "请求成功")) {
        location.reload();
      }
    },
  },
});
