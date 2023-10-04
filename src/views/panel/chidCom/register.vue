<template>
  <div class="register_panel">
    <panel :currentMethod="currentTab">
      <template #panelText>注册</template>
      <template #panelBtn>注册</template>
    </panel>
  </div>
</template>
<script setup lang="ts">
import panel from "@/views/panel/panel.vue";
defineProps({
  currentTab: Number,
});
</script>
<style scoped>
.register_panel {
  width: 300px;
  background-color: #f6f8fa;
  padding: 30px;
  border-radius: 5%;
}
</style>
