<script setup>
import { ref } from "vue";
import { supabase } from '@/supabase/init.js';
import { useRouter } from 'vue-router';
import Slider from '@/widgets/Slider/ui.vue';

import { isAuthenticated } from '@/store/index.js';

const router = useRouter();
const email = ref("");
const password = ref("");

function handleClick(){
  isAuthenticated.value = true;
  router.push({ name: 'Profile' })
}

</script>

<template>

  <section class="login">
    <img class="login__logo" src="@/app/img/Logo.svg" alt="Логотип">
    <div class="login-form">

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
          <button type="submit" class="form__button" @click="handleClick" >Войти</button>
        </div>
        <button type="submit" class="form-text" @click="router.push({ name: 'Register' })">У вас нет аккаунта?<span
            class="form-text__link"> Зарегистрируйтесь</span></button>
      </form>

      <!-- сдайдер -->

      <div>
        <Slider />
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.login {
  height: 16em;

  position: relative;

  &__logo {
    margin-top: 30px;
  }

  &-form {
    position: absolute;
    top: 40%;
    left: 60%;

    background-color: #fff;
    padding: 30px 30px 30px 96px;
    border-radius: 40px;

    display: flex;
    align-items: center;
    column-gap: 90px;

    

    .form {
      &__title {
        font-weight: 600;
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
      }

      &-input {
        margin-bottom: 30px;

        input {
          border: 1px solid #cfe5ff;
          border-radius: 79px;
          width: 398px;
          height: 67px;
          padding: 24px 20px;


          font-weight: 400;
          font-size: 16px;
          color: #999;
        }
      }

      &__button {
        border-radius: 85px;
        padding: 20px 166px;
        background: #796dff;

        font-weight: 600;
        font-size: 22px;
        color: #fff;

        margin: 4px 0 10px 0;
      }

      &-text {
        font-weight: 400;
        font-size: 16px;
        color: #252525;

        &__link {
          font-weight: 600;
          color: #796dff;
          cursor: pointer;
        }
      }
    }

  }
}
</style>