export function loadMore(el: HTMLElement) {
  const ob = new IntersectionObserver(
    (entires) => {
      if (!entires[0].isIntersecting) return;
      console.log(entires[0]);
    },
    {
      threshold: 0,
    }
  );
  ob.observe(el);
}
