import { useMoment } from "@/stores/moment";
const momentStore = useMoment();
export function loadMore(el: HTMLElement) {
  const ob = new IntersectionObserver(
    async (entires) => {
      if (entires[0].isIntersecting) {
        let size = momentStore.momentSize;
        momentStore.momentOffset = size;
        momentStore.momentSize = size + 6;
        await momentStore.getRecommendData(false);
        console.log("enter");
      }
    },
    {
      threshold: 0,
    }
  );
  ob.observe(el);
}
