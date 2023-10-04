<template>
  <div class="recommend_user">
    <areaTopText>
      <template #text>你感兴趣的用户</template>
    </areaTopText>
    <template v-for="item in userStore.userInfo">
      <WjCard
        v-bind="{
          'card-padding': '5px',
          'card-user-name': item.name,
          'card-width': '100px',
          avatarUrl: item.avatarUrl,
          userId: item.id,
        }"
      ></WjCard
    ></template>
  </div>
</template>
<script setup lang="ts">
import areaTopText from "./areaTopText.vue";

import { onMounted } from "vue";
import { useClient } from "@/stores/user";
import WjCard from "@/components/base/wjCard.vue";
const userStore = useClient();
onMounted(() => {
  userStore.getUserData();
});
</script>
<style scoped>
.recommend_user {
  flex: 0.15;
  background-color: #fff;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
</style>
