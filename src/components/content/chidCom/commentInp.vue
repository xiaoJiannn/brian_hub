<template>
  <div class="commentInp" v-if="isShow">
    <input type="text" />
    <button class="submit">submit</button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  isShow: {},
});
import { ref } from "vue";
</script>
<style scoped></style>
