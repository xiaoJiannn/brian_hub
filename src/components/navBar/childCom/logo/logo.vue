<template>
  <div class="logo" @click="logoClick">
    <strong class="text">
      Brian Hub
      <em class="beta">beta</em>
    </strong>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const logoClick = () => {
  router.push("/home");
};
</script>
<style scoped>
.logo {
  cursor: pointer;
  padding-left: 40px;
}

.text {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.beta {
  font-size: 10px;
}
</style>
