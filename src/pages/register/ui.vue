<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- error handling -->
    <div v-if="errorMsg" style="margin-bottom: 10px; padding: 4px; background: #e1e1e1;">
      <p style="color: red;">{{ errorMsg }}</p>
    </div>

    <!-- register -->
    <form style="padding: 8px; display: flex; flex-direction: column;">
      <h1>Регистрация</h1>
      <div>
        <label for="email">Email</label>
        <input type="text" required id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" required id="password" v-model="password">
      </div>
      <div>
        <label for="confirmPassword">ConfirmPassword</label>
        <input type="password" required id="confirmPassword" v-model="confirmPassword">
      </div>
      <button>Зарегистрироваться</button>

      <RouterLink to="/login">У вас есть аккаунт? <span style="color: green;">Войдите</span></RouterLink>
    </form>
  </div>
  
</template>
  
<script setup>
import { ref } from "vue";

  const email = ref(null);  
  const password = ref(null);  
  const confirmPassword = ref(null);  
  const errorMsg = ref(null);  
</script>
  
  <style lang="scss">
  
  </style>