<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import  friends  from '@/friends.json';

const friend = ref(null);
const route = useRoute()

const { id } = route.params;

onBeforeMount(() => {
    friend.value = friends.find(c => c.id === parseInt(id))
})

</script>

<template>

<div>
    <p>{{ text }}</p>
</div>

</template>

<style scoped lang="scss">

</style>