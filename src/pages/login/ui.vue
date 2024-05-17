<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import Slider from '@/widgets/Slider/ui.vue';

const email = ref(null);  
const password = ref(null);   
const errorMsg = ref(null);  
</script>

<template>
    <section class="login">
    <!-- error handling -->
    <!-- <div v-if="errorMsg" style="margin-bottom: 10px; padding: 4px; background: #e1e1e1;">
      <p style="color: red;">{{ errorMsg }}</p>
    </div> -->

    <!-- сдайдер -->

    <div>
      <Slider/>
    </div>

    <!-- login -->
    <form class="form">
      <h2 class="form__title">Вход</h2>
      <div class="form-input">
        <label for="email"></label>
        <input type="text" required id="email" v-model="email" placeholder="Почта">
      </div>
      <div class="form-input">
        <label for="password"></label>
        <input type="password" required id="password" v-model="password" placeholder="Пароль">
      </div>
      <div>
        <button class="form__button">Войти</button>
      </div>
      <RouterLink class="form-text" to="/register">У вас нет аккаунта?<span class="form-text__link"> Зарегистрируйтесь</span></RouterLink>
    </form>
    </section>
  </template>
  
  
  <style scoped lang="scss">
    .login{
    display: flex;
      align-items: center;
      text-align: center;

      // column-gap: 30px;

      background-color: #fff;

      padding: 30px 0 30px 30px;

      border-radius: 40px ;

      width: 1120px;

      margin: 0 auto;
    .form{
      // background-color: #fff;
      // padding: 100px 60px;
      // border-radius: 40px;

      display: flex;
      flex-direction: column;
      row-gap: 20px;

      margin-left: 40px;

      &__title{
        font-weight: 600;
        font-size: 34px;

        margin-bottom: 20px;
      }

      &-input{
        input{
          border: 1px solid rgba(176, 144, 252, 0.7);
          border-radius: 79px;
          width: 399px;
          height: 67px;
          padding: 24px 20px;
          font-size: 14px;

          outline-color: rgba(123, 70, 246, 0.7);
        }
      }

      &__button{
        border-radius: 85px;
        padding: 20px 166px;

        font-weight: 600;
        font-size: 22px;
        color: #fff;

        background-color: #796dff;

        margin-top: 10px;
      }

      &-text{
        font-size: 16px;
        font-weight: 500;

        &__link{
          // font-size: 18px;
          font-weight: 600;
          color: #796dff;
        }
      }
    }
  }
  </style>