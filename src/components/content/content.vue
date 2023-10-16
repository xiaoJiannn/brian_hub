<template>
  <div class="main">
    <userMoment></userMoment>
    <recommendMoments></recommendMoments>
    <recommendUser></recommendUser>
  </div>
  <div class="load" ref="loading">loading</div>
</template>
<script setup lang="ts">
import userMoment from "./chidCom/userMoment.vue";
import recommendMoments from "./chidCom/recommendMoments.vue";
import recommendUser from "./chidCom/recommendUser.vue";
import { onMounted, ref } from "vue";

import { useMoment } from "@/stores/moment";
import { loadMore } from "@/hooks/useObserver";
const momentStore = useMoment();
const loading = ref<HTMLElement>();

onMounted(() => {
  loadMore(loading.value!);
  momentStore.getRecommendData();
});
</script>
<style scoped>
.main {
  display: flex;
  /* padding-top: 20px; */
  background-color: #f6f8fa;
}
.load {
  text-align: center;
}
</style>
