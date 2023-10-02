<template>
  <div class="recommend_moments">
    <areaTopText>
      <template #text>推荐动态</template>
    </areaTopText>
    <template v-for="item in momentStore.moments">
      <wjCard
        v-bind="{
          'card-width': '750px',
          'card-padding': '20px',
          'card-content': item.content,
          'card-title': item.title,
          'card-user-name': item.name,
          'card-createAt': item.createAt.replace('T02:25:39.000Z', ''),
          'card-main-padding': '10px',
          'card-detail-padding': '10px',
        }"
      >
      </wjCard>
    </template>
  </div>
</template>
<script setup lang="ts">
import wjCard from "@/components/base/wjCard.vue";
import areaTopText from "./areaTopText.vue";
import { useMoment } from "@/stores/moment";
const momentStore = useMoment();
</script>
<style scoped>
.recommend_moments {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
}
</style>
