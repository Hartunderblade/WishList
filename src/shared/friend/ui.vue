<script setup>
defineProps({
    friend: Object
})
</script>

<template>

<div class="friend">
    <img class="friend__img" src="@/app/img/avatar.png" />
    <h3 class="friend__title">{{ friend.name }}</h3>
    <p class="friend__sabtitle">{{ friend.yiear }}</p>
</div>

</template>
<style scoped lang="scss">
.friend{
    border: 1px solid rgba(247, 110, 80, 0.5);
    border-radius: 20px;
    padding: 40px;

    &__img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    &__title{
        font-weight: 400;
        font-size: 20px;
    }

    &__sabtitle{
        // font-weight: 400;
        // font-size: 16px;
        // // color: #616161;
    }
}

</style>