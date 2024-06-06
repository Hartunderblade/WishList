<script setup>
import { ref } from "vue";
import { supabase } from '@/supabase/init.js';
// import router from 'vue';
import { useRouter } from 'vue-router';
import Slider from '@/widgets/Slider/ui.vue';

const router = useRouter();
const email = ref("");  
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
   <!-- error handling -->
    <div v-if="errorMsg" style="margin-bottom: 10px; padding: 4px; background: #e1e1e1;">
      <p style="color: red;">{{ errorMsg }}</p>
    </div>
    
    <section class="login">
      <img class="login__logo" src="@/app/img/Logo.svg" alt="Логотип">
      <div class="login-form">

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

     <!-- сдайдер -->

     <div>
      <Slider/>
    </div>
  </div>
    </section>
  </template>
  
  
<style scoped lang="scss">
.login{
  // max-width: 1438px;
  // margin: 0 auto;
  height: 16em;

  position: relative;

  &__logo{
    margin-top: 30px;
  }

  &-form{
    // margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;

    background-color: #fff;
    padding: 30px 30px 30px 96px;
    border-radius: 40px;
    // margin-right: -50%;
    // transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    column-gap: 90px;

    text-align: center;

    .form{
      &__title{
        font-weight: 600;
        font-size: 34px;

        margin-bottom: 40px;
      }

        &-input{
          margin-bottom: 30px;
          input{
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

        &__button{
          border-radius: 85px;
          padding: 20px 166px;
          background: #796dff;

          font-weight: 600;
          font-size: 22px;
          color: #fff;

          margin: 4px 0 10px 0;
        }

        &-text{
          font-weight: 400;
font-size: 16px;
color: #252525;

&__link{
  font-weight: 600;
color: #796dff;
}
        }
    }

  }
}
</style>