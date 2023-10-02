<template>
  <div class="areaTop">
    <slot name="text">default</slot>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.areaTop {
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: flex-end;
}
</style>
