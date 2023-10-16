<template>
  <div class="submit" @click="publish">
    <Plus style="width: 1em; height: 1em" />
  </div>

  <div class="mesg">
    <SwitchButton style="width: 1em; height: 1em" />
  </div>
  <div class="avatar">
    <template v-for="item in userStore.homeProfile">
      <avatar :avatar-url="item.avatarUrl" :id="item.id"></avatar
    ></template>
  </div>
</template>

<script setup lang="ts">
import avatar from "@/components/base/avatar.vue";
import { Plus, SwitchButton } from "@element-plus/icons-vue";
import { useClient } from "@/stores/user";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const userStore = useClient();
const router = useRouter();
const publish = () => {
  router.push("/moment/publish");
};
onMounted(() => {
  userStore.getHomeAvatar();
});
</script>
<style scoped>
.mesg,
.avatar {
  margin-left: 8px;
}

.submit,
.mesg,
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.submit,
.mesg {
  border-radius: 10px;
  width: 32px;
  height: 32px;
  background-color: #f6f8fa;
  border: 0.5px #edeff2 solid;
}
</style>
