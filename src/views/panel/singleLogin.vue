<template>
  <div class="login_panel">
    <panel :current-method="0"></panel>
  </div>
</template>
<script setup lang="ts">
import panel from "@/views/panel/panel.vue";
</script>
<style scoped>
.login_panel {
  position: absolute;
  left: 40%;
  top: calc(40% - 150px);
  width: 300px;
  background-color: #f6f8fa;
  padding: 30px;
  border-radius: 5%;
}
</style>
