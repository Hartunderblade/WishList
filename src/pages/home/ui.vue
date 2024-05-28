<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="home">
    <div class="user">
      <div class="user-info">

      </div>
      <div class="user-create">
        <button class="user-create__button"><img src="@/app/img/create.svg" alt=""></button>
      </div>
    </div>
  </section>
   
  </template>
  
  <script setup>
  
  </script>
  
<style lang="scss">
  .home{
    .user{
      &-create{
        &__button{
          background-color: #fff;
          padding: 50px 82px;
          border-radius: 30px;

          cursor: pointer;
        }
      }
    }
  }
</style>