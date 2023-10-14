<template>
  <div class="nav">
    <navLogo></navLogo>
    <navItem></navItem>
    <statusBar></statusBar>
  </div>
</template>
<script setup lang="ts">
import navLogo from "./childCom/logo/logo.vue";
import statusBar from "./childCom/statusBar/statusBar.vue";
import navItem from "./childCom/navItem/navItem.vue";
</script>
<style scoped>
.nav {
  background-color: #f6f8fa;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-radius: 8px;
  border-bottom: 0.4px #d8dee4 solid;
}
</style>
