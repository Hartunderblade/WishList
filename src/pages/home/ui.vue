<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavBar from '@/widgets/navigation/ui.vue';

</script>


<template>
  <div class="container">
    <header>
      <nav>
        <NavBar/>
      </nav>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>
  

<style lang="scss">
.container{
  header{
    nav{
  background-color: #fff;
  border-radius: 0 40px 40px 0;
  position: fixed;
  width: 340px;
  left: 0;
  bottom: 0;
  top: 0;

  height: 100%;
  padding: 30px 0 82px 58px;
    }
  }
}
  
</style>