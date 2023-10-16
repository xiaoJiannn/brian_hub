<template>
  <navBar></navBar>
  <div class="detail">
    <template v-for="item in momentStore.momentDetail">
      <wjCard
        class="card"
        v-bind="{
          'card-width': '850px',
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
        <div class="comment">
          <input type="text" ref="commentInp" />
          <button class="publish" @click="handleComment(item.id)">
            submit
          </button>
        </div>
      </wjCard>
    </template>
    <div class="commentArea" v-for="item in commentItem">
      <div class="item">
        <avatar :avatar-url="item.user.avatar"></avatar>
        <span class="time">于{{ item.createAt.split(" ")[0] }}发布：</span>
        <span class="content">{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import wjCard from "@/components/base/wjCard.vue";
import avatar from "@/components/base/avatar.vue";
import navBar from "@/components/navBar/navBar.vue";
import { useStorge } from "@/hooks/useStorge";
import { useMoment } from "@/stores/moment";
import { onMounted, onBeforeMount, ref, watch, computed } from "vue";
const momentStore = useMoment();
let commentItem: any = ref([]);
let commentInp = ref();
let data = { momentId: 0, content: "" };

const handleComment = (id: number) => {
  data.momentId = id;
  data.content = commentInp.value[0]?.value;
  momentStore.publishComment(data);
};
onMounted(async () => {
  const currentStorge: any = useStorge.getItem("currentMoment");
  await momentStore.getMomentDetail(currentStorge);
  commentItem.value = momentStore.momentDetail[0]?.comment;
});
</script>
<style scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.comment {
  display: flex;
  align-items: center;
  justify-content: center;
}
.publish {
  width: 55px;
  height: 35px;
  text-align: center;
  cursor: pointer;
}
input {
  border: 1px solid rgba(0, 0, 0, 0.527);
  margin: 10px;
  width: 100%;
  height: 30px;
}
input:focus {
  outline-color: #0969da;
}
.commentArea {
  width: 80%;
  margin-top: 100px;
  margin-left: 100px;
}
.item {
}
.time {
  vertical-align: super;
  margin-left: 10px;
}
.content {
  vertical-align: super;
}
</style>
