<script setup>
import { ref } from 'vue';
// import Card from '@/widgets/card/ui.vue';

import listData from '@/list.json';
const lists = ref(listData);

</script>

<template>
  <div class="list">
      <div v-for="list in lists " :key="list.id" class="text">
        <div class="text-info">
          <h2 class="text-info__title"><span>.</span>{{ list.title }}</h2>
          <p class="text-info__subtitle">{{ list.description }}</p>
        </div>
        <div class="text-edit">
          <img class="text-edit__img" src="@/app/img/edit.svg" alt="" />
        </div>
      </div>
      <div class="cards">
        <!-- <Card /> -->
        <div v-for="item in list" :key="item.id"  class="card">
        <!-- <img class="card__img" :src="item.img" alt="Изображение желания" /> -->
        <div class="card-text">
            <p class="card-text__title">{{ item.title }}</p>
            <p class="card-text__subtitle">{{ item.subtitle }}</p>
        </div>
        <div class="card-line"></div>
        <div class="card-open">
            <button class="card-open__open">Открыть</button>
            <img class="card-open__delit" src="@/app/img/delit.svg" alt="Открыть" />
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    background-color: #fff;
    border-radius: 20px;
    padding: 60px;

    border: 1px solid #e8e6ff;

    margin: 60px 0;


    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-info {
        display: flex;
        flex-direction: column;
        row-gap: 28px;

        &__title {
          font-weight: 600;
          font-size: 28px;

          span {
            width: 20px;
            height: 50px;
            border-radius: 50px;
            background-color: #f76e50;
            box-shadow: 1px 1px 9px 0 #f76e50;
            color: #f76e50;
            margin-right: 10px;
          }

          // margin-right: 10px;
        }
      }

      &__subtitle {
        font-weight: 400;
        font-size: 20px;
      }

      &-edit {
        &__img {
          width: 32px;
          height: 32px;

          cursor: pointer;
        }
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 46px 0 0 0;

    }
  }
</style>
