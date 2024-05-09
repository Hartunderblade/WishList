<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="container" style="background: #000; color: #ffff;">
    <nav class="" style="padding: 20px 0; display: flex; ">
      <div style="display:flex; align-items: center;">
        <h1>Логотип</h1>
      </div>
      <ul style="display: flex; justify-content: end; gap: 10px;">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <li style="cursor: pointer;">Выход</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss">

</style>