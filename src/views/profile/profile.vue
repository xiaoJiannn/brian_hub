<template>
  <nav-bar></nav-bar>
  <!-- <update-profile :class="{ pop: isShow }"></update-profile> -->
  <update-profile
    :class="{ pop: isShow }"
    :user-name="userName"
  ></update-profile>
  <template v-for="item in userStore.profile">
    <avatar
      :avatar-url="item.avatarUrl"
      class="profileAvatar"
      :avatar-height="'100px'"
      :avatar-width="'100px'"
    ></avatar>

    <div class="profile">
      <span>基本信息</span>
      <div class="base_info">
        <edit class="edit" @click="handleEdit"></edit>
        <div>姓名：{{ item.name }}</div>
        <div>
          id:<span class="user_id">{{ item.id }}</span>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import navBar from "@/components/navBar/navBar.vue";
import avatar from "@/components/base/avatar.vue";
import updateProfile from "@/components/uploads/updateProfile.vue";
import { Edit } from "@element-plus/icons-vue";
import { useClient } from "@/stores/user";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const userStore = useClient();
const uploadsAvt = ref();
const isShow = ref(false);
let userName = "";
const handleEdit = () => {
  isShow.value = true;
  userName = userStore.profile[0].name;
};
onMounted(() => {
  const route = useRoute();
  const params = route.params.id;
  userStore.getProfile(params);
});
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.003),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.005),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.006),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.007),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.008),
    100px 100px 80px rgba(0, 0, 0, 0.01);
}
.pop {
  display: block;
}
.user_id {
  display: inline-block;
  margin-left: 32%;
}
.base_info {
  position: relative;
}
.edit {
  display: inline-block;
  height: 15px;
  width: 15px;
  position: absolute;
  top: -17px;
  left: 85px;
  cursor: pointer;
}
.base_info > div {
  margin-top: 20px;
}
.profileAvatar {
  position: absolute;
  top: 75px;
  left: 30%;
}
</style>
