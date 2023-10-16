<template>
  <div class="user_moments">
    <areaTopText>
      <template #text>你最近的动态</template>
    </areaTopText>
    <template v-for="item in momentStore.userMoment">
      <wjCard
        v-bind="{
          'card-content': item.title,
          'card-detail-padding': '10px',
          'card-padding': '10px',
          'card-user-name': item.name,
          userId: item.id,
        }"
      ></wjCard
    ></template>
  </div>
</template>
<script setup lang="ts">
import wjCard from "@/components/base/wjCard.vue";
import areaTopText from "./areaTopText.vue";
import { useClient } from "@/stores/user";
import { useMoment } from "@/stores/moment";
import { onMounted } from "vue";
const userStore = useClient();
const momentStore = useMoment();
onMounted(() => {
  momentStore.getUserMoment();
});

const testText = "个人第一条动态";
</script>
<style scoped>
.user_moments {
  flex: 0.3;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #fff;
}
</style>
