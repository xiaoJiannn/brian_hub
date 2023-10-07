<template>
  <div class="update">
    <div class="info">
      <div class="avatar_section">
        <span>修改头像</span>
        <div class="avatar">
          <label for="avatarUps" class="uploadsBtn">修改头像</label>
          <input
            type="file"
            class="uploads"
            id="avatarUps"
            ref="uploadsAvt"
            @change="handleUploads"
          />
        </div>
      </div>
      <div class="baseInfo">
        <span>修改基本信息</span>
        <div class="profile">
          <div class="username">
            <span>姓名:</span>
            <input type="text" :value="props.userName" ref="names" />
          </div>
          <!-- <div class="pwd"><span>密码:</span><input type="password" /></div> -->
        </div>
      </div>
    </div>

    <button class="confirm" @click="handleUpdate">提交</button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useClient } from "@/stores/user";
const props = defineProps({
  userName: {
    type: String,
  },
});
const route = useRoute();
const userStore = useClient();
const uploadsAvt = ref();
const names = ref();
const handleUpdate = () => {
  const params = route.params.id;
  userStore.updateProfile(names.value.value, params);
};
const handleUploads = () => {
  if (!uploadsAvt.value[0].files[0]) {
    alert("未上传");
    return;
  }
  const files = uploadsAvt.value[0].files[0];
  const formData = new FormData();
  formData.set("avatar", files);
  const id = userStore.profile[0].id;
  userStore.uploadAvatar({
    url: `/upload/avatar/${id}`,
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
</script>
<style scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.update {
  transition: all s;
  display: none;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 400px;
  height: 300px;
  background-color: #f6f8fa;
  z-index: 10;
  align-items: center;
  border-radius: 2%;
}
.avatar_section,
.baseInfo {
  height: 100%;
}
.avatar {
  width: 60px;
  background-color: #ccc;
  height: 25px;
  margin: 20px;
  text-align: center;
  line-height: 25px;
  font-size: 10px;
  border-radius: 2%;
}
.avatar_section > span {
  display: block;
  margin-top: 20px;
  margin-left: 20px;
}

.baseInfo > span {
  display: block;
  margin-top: 20px;
  margin-right: 20px;
}
.uploadsBtn {
  cursor: pointer;
}
.uploads {
  display: none;
}
.profile input {
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.527);
  margin: 10px;
  height: 30px;
}
.profile input:focus {
  outline-color: rgba(0, 0, 0, 0.143);
}
.confirm {
  display: block;
  height: 30px;
  width: 100px;
  background-color: #ccc;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 36%;
}
</style>
