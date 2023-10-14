import { defineStore } from "pinia";
import { momentRequest, publishMoment } from "@/service/moments";
import { ref } from "vue";
export const useMoment = defineStore("moment", {
  state: () => ({
    moments: [] as any[],
    isShow: ref(false),
  }),
  getters: {},
  actions: {
    async getRecommendaData() {
      const result = await momentRequest({
        url: "/moment/recommend",
        method: "GET",
      });
      const moment = result.data.data;
      if (this.moments.length !== 0) {
        this.moments = [];
      }
      for (const item of moment) {
        this.moments.push(item);
      }
    },

    async publishMoment(data: object) {
      console.log(data);

      const result = await publishMoment({
        url: "/moment/publish",
        method: "POST",
        data: data,
      });
    },
  },
});
