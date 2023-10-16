import { defineStore } from "pinia";
import {
  momentRequest,
  publishMoment,
  showUserMoment,
} from "@/service/moments";
import { useClient } from "./user";
const userStore = useClient();
export const useMoment = defineStore("moment", {
  state: () => ({
    moments: [] as any[],
    userMoment: [] as any[],
    momentDetail: [] as any[],
    momentOffset: 0,
    momentSize: 5,
    isAll: false,
  }),
  getters: {},
  actions: {
    async getRecommendData(isClear: boolean = true) {
      const result = await momentRequest({
        url: "/moment/recommend",
        method: "GET",
        params: {
          offset: this.momentOffset,
          size: this.momentSize,
        },
      });
      this.isAll = result.data.isAll;
      const moment = result.data.data;
      if (this.moments.length !== 0 && isClear === true) {
        this.moments = [];
      }
      for (const item of moment) {
        this.moments.push(item);
      }
    },
    async getUserMoment() {
      const result = await showUserMoment({
        url: "/moment/userMoment",
        method: "GET",
      });
      const data = result.data.data;
      if (this.userMoment.length !== 0) {
        this.userMoment = [];
      }
      for (const item of data) {
        this.userMoment.push(item);
      }
    },

    async publishMoment(data: object) {
      const result = await publishMoment({
        url: "/moment/publish",
        method: "POST",
        data: data,
      });
    },
    async getMomentDetail(id: number) {
      const result = await publishMoment({
        url: `/moment/detail/${id}`,
        method: "GET",
      });
      const data = result.data.data;

      if (this.momentDetail.length !== 0) {
        this.momentDetail = [];
      }
      for (const item of data) {
        this.momentDetail.push(item);
      }
    },
    async publishComment(data: object) {
      try {
        const result = await publishMoment({
          url: `/comment/publish/${userStore.homeProfile[0].id}`,
          method: "POST",
          data: data,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
