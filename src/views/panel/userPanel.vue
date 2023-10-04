<template>
  <div class="user_panel">
    <div class="switch_status">
      <span
        class="switch_item"
        v-for="(item, index) in tabs"
        @click="currentTab = index"
        :key="index"
      >
        {{ item.tabName }}
      </span>
      <component
        :is="tabs[currentTab].comName"
        :current-tab="currentTab"
      ></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import register from "./chidCom/register.vue";
import login from "./chidCom/login.vue";

const tabs = [
  { comName: login, tabName: "登录" },
  { comName: register, tabName: "注册" },
];
let currentTab = ref(0);

const switchPanel = () => {};
</script>
<style scoped>
.user_panel {
  width: 300px;
  position: absolute;
  left: 40%;
  top: calc(40% - 150px);
  background-color: #f6f8fa;
  border-radius: 5%;
}

.switch_status {
  width: 100%;
}
.switch_item {
  text-align: center;
  display: inline-block;
  width: 50%;
  cursor: pointer;
  line-height: 48px;
  height: 48px;
}
</style>
