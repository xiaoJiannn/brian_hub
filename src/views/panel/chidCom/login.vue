<template>
  <div class="login_panel">
    <panel :current-method="currentTab"></panel>
  </div>
</template>
<script setup lang="ts">
import panel from "@/views/panel/panel.vue";

defineProps({
  currentTab: Number,
});
</script>
<style scoped>
.login_panel {
  width: 300px;
  background-color: #f6f8fa;
  padding: 30px;
  border-radius: 5%;
}
</style>
