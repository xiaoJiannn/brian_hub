<template>
  <div class="card" :style="{ width: cardWidth, padding: cardPadding }">
    <div class="head">
      <avatar :avatarUrl="avatarUrl" class="avatar" :id="userId"></avatar>
      <span class="username">{{ cardUserName }}</span>
      <span class="createAt">{{ cardCreateAt }}</span>
    </div>

    <div class="main" :style="{ padding: cardMainPadding }">
      <div class="main_top">
        <h4>{{ cardTitle }}</h4>
        <span class="detail" :style="{ paddingTop: cardDetailPadding }">
          {{ cardContent }}</span
        >
      </div>
      <slot name="card_btm"><div class="main_btm"></div></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import avatar from "@/components/base/avatar.vue";
const props = defineProps({
  cardWidth: {
    type: String,
  },
  cardPadding: {
    type: String,
  },
  cardContent: {
    type: String,
  },
  cardTitle: {
    type: String,
  },
  cardUserName: {
    type: String,
  },
  cardCreateAt: {
    type: String,
  },
  cardMainPadding: {
    type: String,
  },
  cardDetailPadding: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  userId: {},
});
</script>
<style scoped>
.card {
  background-color: #fff;
  margin-top: 20px;
  /* padding: 10px; */
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.003),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.005),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.006),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.007),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.008),
    100px 100px 80px rgba(0, 0, 0, 0.01);
  border: 0.5px solid #afb8c1;
  border-radius: 4px;
}

.head {
  display: flex;
  align-items: center;
}

.username {
  padding-left: 10px;
  font-size: 15px;
}

.main {
  /* padding-top: 15px; */
}

.detail {
  display: block;
  /* padding-top: 10px; */
  text-indent: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.createAt {
  font-size: 15px;
  padding-left: 10px;
  color: #939393;
}

.avatar {
  cursor: pointer;
}
</style>
