<template>
  <nav-bar></nav-bar>
  <div class="publish">
    <h2>发表动态</h2>
    <div class="form">
      <div class="title">
        <span class="label">标题</span>
        <input type="text" v-model="title" />
      </div>
      <div class="content">
        <span class="label_content">内容</span>
        <textarea class="txtarea" v-model="content"></textarea>
      </div>
    </div>

    <div class="submit">
      <button @click="btnClick">submit</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import navBar from "@/components/navBar/navBar.vue";
import { useClient } from "@/stores/user";
import { useMoment } from "@/stores/moment";
import { ref } from "vue";
const userStore: ReturnType<typeof useClient> = useClient();
const momentStore: ReturnType<typeof useMoment> = useMoment();
const title = ref();
const content = ref();
let moment = {};
const btnClick = () => {
  const { id } = userStore.homeProfile[0];
  moment = { id, title: title.value, content: content.value };
  momentStore.publishMoment(moment);
};
</script>
<style scoped>
.publish {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.publish div {
  margin: 20px;
}
.form span {
  padding-right: 10px;
}
.label_content {
  vertical-align: top;
}
.form input,
.txtarea {
  width: 300px;
  height: 38px;
  border: solid 1px #ccc;
}
.form input,
.txtarea:focus {
  outline: none;
  border-color: rgba(0, 0, 0, 0.392);
}
.txtarea {
  height: 80px;
}
.submit > button {
  width: 300px;
  height: 40px;
  text-align: center;
  line-height: 39px;
  cursor: pointer;
  margin-left: 40px;
}
</style>
