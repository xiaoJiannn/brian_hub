<template>
  <img src="./brain.jpg" alt="" @click="handleAvatarClick" />
</template>
<script setup lang="ts">
// import router from "@/router";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const handleAvatarClick = () => {
  router.push("/login");
};
</script>
<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
</style>
