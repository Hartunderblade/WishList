<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navigation from '@/widgets/navigation/ui.vue'
</script>

<template>
  <main class="container">
    <!-- <Navigation/> -->
    <RouterView />
  </main>
  <!-- <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  
</template>

<style scoped lang="scss">

</style>
