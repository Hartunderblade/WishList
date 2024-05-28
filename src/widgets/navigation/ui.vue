<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>


<!-- active-clas="is-active" -->
<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-img">
        <img src="@/app/img/Logo.svg" alt="">
      </div>
      <div class="nav-links">
        <RouterLink class="nav-links__ref" :to="{ name: 'home' }">Профиль</RouterLink>
        <RouterLink class="nav-links__ref" :to="{ name: 'login' }">Друзья</RouterLink>
        <RouterLink class="nav-links__ref" :to="{ name: 'login' }">Настройки</RouterLink>
        <div>
          <RouterLink class="nav-links__ref" :to="{ name: 'login' }">Выход</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .header{
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 30px 0;


      &-links{
        display: flex;
        column-gap: 24px;

        &__ref{
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
</style>