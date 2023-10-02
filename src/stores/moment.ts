import { defineStore } from "pinia";
import { momentRequest } from "@/service/moments";
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
  },
});
