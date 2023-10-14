<template>
  <navBar></navBar>
  <h2 class="title">updateLOG</h2>
  <div class="log">
    <template v-for="item in update">
      <div class="item">
        <h3>{{ item.title }}</h3>
        <span>{{ item.content }}</span>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import navBar from "@/components/navBar/navBar.vue";
import { update } from "./config";
</script>
<style scoped>
.title {
  margin-top: 20px;
  text-align: center;
}
h3 {
  margin: 20px;
}
.log {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.item {
  padding: 30px;
  box-shadow: 1.5px 2.3px 6.1px -60px rgba(0, 0, 0, 0.057),
    3.5px 5.4px 14.2px -60px rgba(0, 0, 0, 0.076),
    6.3px 9.7px 25.4px -60px rgba(0, 0, 0, 0.091),
    10.4px 16.1px 42.2px -60px rgba(0, 0, 0, 0.109),
    17.2px 26.5px 69.6px -60px rgba(0, 0, 0, 0.134),
    30.1px 46.2px 121.6px -60px rgba(0, 0, 0, 0.17),
    65px 100px 263px -60px rgba(0, 0, 0, 0.22);
}
.item span {
  display: inline-block;
  width: 400px;
  text-indent: 2em;
  font-size: 16px;
  line-height: 22px;
}
</style>
