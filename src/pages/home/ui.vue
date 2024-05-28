<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { supabase } from '@/supabase/init.js';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  async function signOut(){
    const { error } = await supabase.auth.signOut();
    router.push({ name: 'login' }) 
  }
</script>


<template>
  <section>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/home/profile">Профиль</RouterLink>
    <RouterLink to="/home/about">О пользователе</RouterLink>
    <button @click.prevent="signOut" type="submit" style="cursor: pointer;">Выход</button>
    <RouterView/>
  </section>
   
  </template>
  

  <style lang="scss">
  
  </style>