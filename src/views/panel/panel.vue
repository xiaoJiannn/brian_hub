<template>
  <div class="username">
    <h2><slot name="panelText">登录</slot></h2>
    <span class="label">用户名</span>
    <input type="text" v-model="userName" />
  </div>
  <div class="pwd">
    <span class="label">密码</span>
    <input type="password" v-model="pwd" />
  </div>
  <div class="login">
    <button class="login_btn" @click="userAction">
      <slot name="panelBtn">登录</slot>
    </button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useClient } from "@/stores/user";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  currentMethod: Number,
});
const userName = ref();
const pwd = ref();
let userInfo = { names: "", pwd: "" };
const userStore = useClient();
const userAction = async () => {
  let url = "/register";
  userInfo.names = userName.value;
  userInfo.pwd = pwd.value;
  if (props.currentMethod === 0) {
    url = "/login";
  }
  userStore.registerWithLoginUser(
    {
      ...userInfo,
    },
    url,
    router
  );
};
</script>
<style scoped>
.label {
  display: block;
  margin-left: 10px;
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
.login_btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 10px 0 0 10px;
}
h2 {
  text-align: center;
}
</style>
