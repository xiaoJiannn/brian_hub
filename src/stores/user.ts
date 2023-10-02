import { defineStore } from "pinia";
import { getUserInfo } from "@/service/user";
export const useClient = defineStore("user", {
  state: () => ({
    userInfo: [] as any[],
  }),
  actions: {
    async getUserData() {
      const result = await getUserInfo({ url: "/user", method: "GET" });
      const userData = result.data.data;
      for (const item of userData) {
        this.userInfo.push(item);
      }
    },
  },
});
