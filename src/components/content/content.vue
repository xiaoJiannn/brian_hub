<template>
  <div class="main">
    <userMoment></userMoment>
    <recommendMoments></recommendMoments>

    <recommendUser></recommendUser>
  </div>
  <div class="rotate-90" ref="loading" v-if="!momentStore.isAll"></div>
</template>
<script setup lang="ts">
import userMoment from "./chidCom/userMoment.vue";
import recommendMoments from "./chidCom/recommendMoments.vue";
import recommendUser from "./chidCom/recommendUser.vue";
import { onMounted, onBeforeMount, ref, watch, nextTick } from "vue";

import { useMoment } from "@/stores/moment";
import { loadMore } from "@/hooks/useObserver";
const momentStore = useMoment();
const loading = ref<HTMLElement>();
onBeforeMount(() => {
  momentStore.isAll = false;
});
onMounted(async () => {
  await nextTick();

  if (!momentStore.isAll) {
    loadMore(loading.value!);
  }
  momentStore.momentOffset = 0;
  momentStore.momentSize = 5;
  momentStore.getRecommendData();
});
</script>
<style scoped>
.main {
  display: flex;
  /* padding-top: 20px; */
  background-color: #f6f8fa;
}

.rotate-90 {
  width: 10px;
  height: 10px;
  margin: 10px auto;
  background-color: rgba(0, 85, 255, 0.776);
  animation: rotate-90 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;
}
@keyframes rotate-90 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-90deg);
  }
}
</style>
