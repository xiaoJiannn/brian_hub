<template>
  <div class="main">
    <userMoment></userMoment>
    <recommendMoments></recommendMoments>
    <recommendUser></recommendUser>
  </div>
</template>
<script setup lang="ts">
import userMoment from './chidCom/userMoment.vue';
import recommendMoments from './chidCom/recommendMoments.vue';
import recommendUser from './chidCom/recommendUser.vue';
</script>
<style scoped>
.main {
  display: flex;
  text-align: center;
  height: 10000px;
}
</style>