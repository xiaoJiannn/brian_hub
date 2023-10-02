<template>
  <div class="statusBar">
    <status></status>

  </div>
</template>
<script setup lang="ts">
import status from './chidCom/status.vue'
</script>
<style scoped>
.statusBar {
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  align-items: center;
}
</style>