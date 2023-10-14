<template>
  <div class="navItem">
    <span class="item" @click="techClick">技术概览</span>
    <span class="item" @click="updateClcik">更新说明</span>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const techClick = () => {
  router.push("/techSupport");
};

const updateClcik = () => {
  router.push("/updateLog");
};
</script>

<style scoped>
.item {
  height: 100%;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
}
</style>
