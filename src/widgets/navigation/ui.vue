<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { supabase } from '@/supabase/init.js';
import { useRouter } from 'vue-router';

const router = useRouter();

async function signOut(){
  const { error } = await supabase.auth.signOut();
  router.push({ name: 'Login' }) 
}

</script>

<template>
  <div class="navigation">
    <div class="navigation-image">
      <img class="navigation-image__img" src="@/app/img/Logo.svg" alt="">
    </div>
    <div class="links">
      <div class="links-section">
        <RouterLink class="links-section__text" to="/home"><img src="@/app/img/icon-profile.svg" alt="Профиль">Профиль</RouterLink>
        <RouterLink class="links-section__text" to="/home/frends"><img src="@/app/img/icon-frends.svg" alt="Друзья">Друзья</RouterLink>
        <RouterLink class="links-section__text" to="/home/settings"><img src="@/app/img/icon-settings.svg" alt="Настройки">Настройки</RouterLink>
      </div>
      <button class="links-exit" @click.prevent="signOut">
        <img class="links-exit__img" src="@/app/img/icon-exit.svg" alt="Выход">
        <p class="links-section__text">Выход</p>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation{
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  
  .links{
    display: flex;
    flex-direction: column;
    height: 720px;
    // height: 100vh;
    justify-content: space-between;

    &-section{
      display: flex;
      flex-direction: column;
      row-gap: 34px;
      align-items: flex-start;
      
      .router-link-exact-active {
        
        width: 4px;
        height: 30px;
        border-radius: 50px;
        background-color: #F76E50;
        box-shadow: 1px 1px 9px 0 #f76e50;

      }
      

      &__text{
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        column-gap: 10px;

        

        img{
          width: 24px;
          height: 24px;
          margin-left: 10px;
        }
      }
    }

    &-exit{
      display: flex;
      align-items: center;
      column-gap: 10px;

      cursor: pointer;

      &__img{
        width: 24px;
        height: 24px;
      }

    }
  }
}
</style>