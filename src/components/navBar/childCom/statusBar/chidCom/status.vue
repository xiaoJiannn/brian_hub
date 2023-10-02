<template>
  <div class="submit">
    <Plus style="width: 1em; height: 1em; " />
  </div>

  <div class="mesg">
    <ChatDotRound style="width: 1em; height: 1em; " />
  </div>
  <div class="avatar">
    <avatar></avatar>
  </div>
</template>

<script setup lang="ts">
import avatar from './avatar.vue';
import { Plus, ChatDotRound } from '@element-plus/icons-vue'


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