<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { supabase } from '@/supabase/init.js';
// import router from 'vue';
import { useRouter } from 'vue-router';
import Slider from '@/widgets/Slider/ui.vue';

const router = useRouter();
const email = ref("");  
// const login = ref("");  
const password = ref("");  


const handleSignin = async () => {
  try{
    const {error} = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if(error) throw error
    router.push({ name: 'home' })

  }catch(error){
    alert(error.message)
  }
}

//login function

// const login = async () => {
//   try{
//     const { error } = await supabase.auth.signIn({
//       email: email.value,
//       password: password.value,
//     });
//     if(error) throw error;
//     router.push({ name: 'Home' })
//   }
//   catch(error){
//     errorMsg.value = `Error: ${error.message}`;
//     setTimeout( () => {
//       errorMsg.value = null;
//     }, 5000);
//   }
//   return;
// };


// const login = async () => {
//       try {
//         const { error } = await supabase.auth.signIn({
//           email: email.value,
//           password: password.value,
//         });
//         if (error) throw error;
//         router.push({ name: "Home" });
//       } catch (error) {
//         errorMsg.value = `Error: ${error.message}`;
//         setTimeout(() => {
//           errorMsg.value = null;
//         }, 5000);
//       }
//       return;
// };

</script>

<template>
    <section class="login">
    <!-- error handling -->
    <div v-if="errorMsg" style="margin-bottom: 10px; padding: 4px; background: #e1e1e1;">
      <p style="color: red;">{{ errorMsg }}</p>
    </div>

    <!-- сдайдер -->

    <div>
      <Slider/>
    </div>

    <!-- login -->
    <form
      @submit.prevent="handleSignin"
      class="form">
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
        <button type="submit" class="form__button">Войти</button>
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