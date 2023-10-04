import { defineStore } from "pinia";
import { momentRequest, publishMoment } from "@/service/moments";
export const useMoment = defineStore("moment", {
  state: () => ({
    moments: [] as any[],
  }),
  actions: {
    async getRecommendaData() {
      const result = await momentRequest({
        url: "/moment/recommend",
        method: "GET",
      });
      const moment = result.data.data;
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
