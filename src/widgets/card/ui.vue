<script setup>
import { ref } from 'vue';

import listData from '@/list.json';
const lists = ref(listData);

</script>

<template>
    <div>
        
    </div>
    
    <!-- <div v-for="item in list.item" :key="item.id" class="card">
        <img class="card__img" :src="item.img" alt="Изображение желания" />
        <div class="card-text">
            <p class="card-text__title">{{ item.title }}</p>
            <p class="card-text__subtitle">{{ item.subtitle }}</p>
        </div>
        <div class="card-line"></div>
        <div class="card-open">
            <button class="card-open__open">Открыть</button>
            <img class="card-open__delit" src="@/app/img/delit.svg" alt="Открыть" />
        </div>
    </div> -->
</template>

<style scoped lang="scss">
      .card {
        border: 1px solid #f76e50;
        border-radius: 20px;
        padding: 20px 20px;
        width: 230px;
        height: 360px;

        &__img {
          width: 190px;
          height: 179px;
          border-radius: 10px;
        }

        &-text {
          display: flex;
          flex-direction: column;
          row-gap: 6px;

          margin: 24px 0 0 0;

          padding-bottom: 17px;

          border-bottom: 1px solid #f76e50;

          &__title {
            font-weight: 500;
            font-size: 18px;
          }

          &__subtitle {
            font-weight: 500;
            font-size: 16px;
            color: #2e2e2e;
          }
        }

        &-open {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 17px;

          &__open {
            font-weight: 500;
            font-size: 18px;
            color: #fff;

            border-radius: 10px;
            padding: 10px 39px;
            background: #f76e50;

            cursor: pointer;
          }

          &__delit {
            width: 20px;
            height: 24px;

            cursor: pointer;
          }
        }
      }
</style>