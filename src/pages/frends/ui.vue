<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FriendCard from '@/shared/friend/ui.vue';
import FriendCardRec from '@/shared/friendRecommendations/ui.vue';

import friendsData from '@/friends.json';

const router = useRouter();

const friends = ref(friendsData);



</script>

<template>
  <div class="frends">
    <div class="all">
      <div class="all-title">
        <div class="all-title__line"></div>
        <h1 class="all-title__title">Все друзья</h1>
      </div>
      <div class="all-search">
        <input class="all-search__input" type="text" placeholder="Поиск"><input />
      </div>
      <div class="all-frends">
        <FriendCard v-for="friend in friends" :key="friend.id" :friend="friend"
          @click="router.push(`/home/frend/${friend.id}`)" />
      </div>

    </div>
    <div class="recommendations">
      <div class="users">
        <div class="users-title">
          <div class="users-title__line"></div>
          <h3 class="users-title__text">Рекомендуемые друзья</h3>
        </div>
        <div class="users-items">
          <FriendCardRec v-for="friend in friends.slice(0, 5)" :key="friend.id" :friend="friend"
          @click="router.push(`/home/frend/${friend.id}`)" />
        </div>
      </div>
      <div class="poster">
        <img src="@/app/img/recommendations-poster.jpg" alt="">
      </div>
    </div>
    
    
  </div>
</template>

<style scoped lang="scss">
.frends {
  display: flex;
  // justify-content: space-between;
  column-gap: 34px;

  margin: 60px 0;

  .all {
    background-color: #fff;
    width: 1020px;
    padding: 60px;
    border-radius: 20px;




    &-title {
      display: flex;
      align-items: center;
      column-gap: 16px;

      &__line {
        background-color: #796DFF;
        box-shadow: 1px 0 23px 0 rgba(144, 98, 255, 0.7);
        border-radius: 50px;
        width: 10px;
        height: 50px;
      }

      &__title {
        font-weight: 600;
        font-size: 28px;
      }
    }

    &-search {
      margin-top: 40px;

      &__input {
        border: 2px solid rgba(247, 110, 80, 0.72);
        border: radius 20px;
        padding: 20px 0 20px 20px;
        border-radius: 20px;
        width: 344px;
        outline: none;
        font-size: 18px;

        &::placeholder {
          font-weight: 500;
          font-size: 16px;
          color: rgba(247, 110, 80, 0.53);
        }

      }
    }

    &-frends {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;

      margin-top: 40px;
    }
  }

  .recommendations {
    .users{
      border-radius: 20px;
      padding: 60px 59px;
      background-color: #fff;

      margin-bottom: 40px;

      &-title{
        display: flex;
        align-items: center;

        &__line{
          background-color: #796DFF;
          box-shadow: 1px 0 23px 0 rgba(144, 98, 255, 0.7);
          border-radius: 50px;
          width: 8px;
          height: 30px;
          margin-right: 10px;
        }

        &__text{
          font-weight: 600;
          font-size: 18px;
        }
      }

      &-items{
        display: flex;
        flex-direction: column-reverse;
        row-gap: 22px;

        margin-top: 32px;
      }
    }
    
    .poster{
      img {
        border-radius: 30px;
      }
    }
    
  }
}
</style>