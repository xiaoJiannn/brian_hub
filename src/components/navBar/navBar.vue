<template>
  <div class="nav">
    <navLogo></navLogo>
    <statusBar></statusBar>
  </div>
</template>
<script setup lang="ts">
import navLogo from "./childCom/logo.vue"
import statusBar from './childCom/statusBar.vue'
</script>
<style scoped>
.nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-radius: 8px;
  border-bottom: none;
  border-bottom: 0.4px #d8dee4 solid;
}
</style>