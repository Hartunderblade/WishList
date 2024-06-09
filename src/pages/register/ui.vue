<script setup>
import { ref } from "vue";
import { supabase } from '@/supabase/init.js';
import { useRouter } from 'vue-router';
import Slider from '@/widgets/Slider/ui.vue';

const router = useRouter();
const email = ref("");
const login = ref("");
const password = ref("");
const confirmPassword = ref("");

//register function

const handleSignup = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      option: {
        emailRedirectTo: 'http://localhost:5173/home'
      }
    })
    if (error) throw error
    router.push({ name: 'login' })

  } catch (error) {
    alert(error.message)
  }
}


</script>

<template>

  <section class="login">
    <img class="login__logo" src="@/app/img/Logo.svg" alt="Логотип">
    <div class="login-form">

      <!-- сдайдер -->

      <div>
        <Slider />
      </div>
      <!-- login -->
      <form class="form">
        <h2 class="form__title">Регистрация</h2>
        <div class="form-input">
          <label for="email"></label>
          <input type="text" required id="email" v-model="email" placeholder="Почта">
        </div>
        <div class="form-input">
          <label for="login"></label>
          <input type="text" required id="login" v-model="login" placeholder="Логин">
        </div>
        <div class="form-input">
          <label for="password"></label>
          <input type="password" required id="password" v-model="password" placeholder="Пароль">
        </div>
        <div class="form-input">
          <label for="confirmPassword"></label>
          <input type="password" required id="confirmPassword" v-model="confirmPassword" placeholder="Повторите пароль">
        </div>
        <div style="display: flex; align-items: center; column-gap: 10px; margin-bottom: 30px;">
          <input style="width: 16px; height: 16px;" type="checkbox">
          <p>я принимаю условия <span style="font-weight: 600;
          color: #796dff;">пользовательского соглашения</span></p>
        </div>
        <div>
          <button type="submit" class="form__button">Зарегистрироваться</button>
        </div>
        <button type="submit" class="form-text" @click="router.push({ name: 'Login' })">У вас есть аккаунт?<span
            class="form-text__link"> Войдите</span></button>
      </form>


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
    padding: 30px 96px 30px 30px;
    border-radius: 40px;

    display: flex;
    align-items: center;
    column-gap: 90px;

    

    .form {
      &__title {
        font-weight: 600;
        font-size: 34px;

        margin-bottom: 40px;

        text-align: center;
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
        padding: 20px 84px;
        background: #F76E50;

        font-weight: 600;
        font-size: 22px;
        color: #fff;

        margin: 4px 0 10px 0;
      }

      &-text {
        font-weight: 400;
        font-size: 16px;
        color: #252525;

        text-align: center;

        &__link {
          font-weight: 600;
          color: #796dff;
          text-align: center;
          cursor: pointer;
        }
      }
    }

  }
}
</style>