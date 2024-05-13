<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-img">
        <img src="@/app/img/Logo.svg" alt="">
      </div>
      <div class="nav-links">
        <RouterLink class="nav-links__ref" to="/">Home</RouterLink>
        <RouterLink class="nav-links__ref" to="/login">Login</RouterLink>
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