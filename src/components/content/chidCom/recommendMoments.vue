<template>
  <div class="recommend_moments">
    <areaTopText>
      <template #text>推荐动态</template>
    </areaTopText>
    <template v-for="item in momentStore.moments">
      <wjCard
        class="card"
        :user-id="item.user_id"
        v-bind="{
          'card-width': '750px',
          'card-padding': '20px',
          'card-content': item.content,
          'card-title': item.title,
          'card-user-name': item.name,
          'card-createAt': item.createAt.split('T')[0],
          'card-main-padding': '10px',
          'card-main-padding-bottom': '0px',
          'card-detail-padding': '10px',
          avatarUrl: item.avatarUrl,
        }"
      >
        <div class="moment_btm">
          <div class="comment" @click="commentClick()">
            <ChatDotSquare class="momentMes"></ChatDotSquare>
          </div>
          <div class="up">
            <Pointer class="momentUp" />
          </div>
        </div>
      </wjCard>
    </template>
  </div>
</template>
<script setup lang="ts">
import wjCard from "@/components/base/wjCard.vue";
import areaTopText from "./areaTopText.vue";
import { ChatDotSquare, Pointer } from "@element-plus/icons-vue";
import { useMoment } from "@/stores/moment";
import { ref } from "vue";
const momentStore = useMoment();
const commentClick = () => {};
</script>
<style scoped>
.card {
  cursor: pointer;
}
.recommend_moments {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
}
.moment_btm {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
}
.momentMes,
.momentUp {
  cursor: pointer;
  height: 15px;
}
.comment {
  flex: 0.5;
}
.up {
  flex: 0.5;
}
/* input {
  border: 1px solid rgba(0, 0, 0, 0.527);
  margin: 10px;
  width: 100%;
  height: 30px;
}
input:focus {
  outline-color: #0969da;
} */

.submit {
  height: 30px;
  width: 60px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
}
.submit:hover {
  border: none;
}
</style>
