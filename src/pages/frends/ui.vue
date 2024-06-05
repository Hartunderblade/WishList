<script setup>
import { ref } from 'vue';
import FriendCard from '@/shared/friend/ui.vue';

import friendsData from '@/friends.json';

const friends = ref(friendsData);
</script>

<template>
  <div class="frends">
    <div class="all">
      <div class="all-title">
        <div class="all-title__line"></div>
        <h1 class="all-title__title">Все друзья</h1>
      </div>
      <div class="all-frends">
        <FriendCard v-for="friend in friends" :key="friend.id" :friend="friend" />
      </div>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.frends{
  .all{
    background-color: #fff;
    width: 1026px;
    padding: 60px;
    border-radius: 20px;

    &-title{
      display: flex;
      align-items: center;
      column-gap: 16px;
      &__line{
        background-color: #f76e50;
        box-shadow: 1px 0 23px 0 rgba(247, 110, 80, 0.7);
        border-radius: 50px;
        width: 10px;
        height: 50px;
      }

      &__title{
        font-weight: 600;
        font-size: 28px;
      }
    }

    &-frends{
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }
  }
}
</style>