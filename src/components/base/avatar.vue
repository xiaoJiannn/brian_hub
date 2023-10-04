<template>
  <img
    v-lazy="imgUrl"
    @click="handleAvatarClick"
    :style="{ width: avatarWidth, height: avatarHeight }"
  />
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useStorge } from "@/hooks/useStorge";
import { useClient } from "@/stores/user";
import { computed } from "vue";
const props = defineProps({
  avatarUrl: {
    type: String,
    default: "http://localhost:8000/user/avatar/1",
  },
  id: {},
  avatarWidth: {
    type: String,
    default: "30px",
  },
  avatarHeight: {
    type: String,
    default: "30px",
  },
});
const router = useRouter();
const userStore = useClient();
const imgUrl = computed(() => {
  return props.avatarUrl
    ? props.avatarUrl
    : "http://localhost:8000/user/avatar/1";
});
const handleAvatarClick = () => {
  const tokenStorge = useStorge.getItem("token");
  if (!tokenStorge) {
    router.push("/login");
  } else {
    router.push(`/profile/${props.id}`);
  }
};
</script>
<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  /* height: 30px;
  width: 30px; */
  border-radius: 50%;
}
</style>
