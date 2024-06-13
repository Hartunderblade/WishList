<script setup>
defineProps({
    friend: Object
})
</script>

<template>

    <div class="friend">
        <img class="friend__img" :src="friend.avatar" />
        <div class="friend-text">
            <h3 class="friend-text__title">{{ friend.name }}</h3>
            <p class="friend-text__sabtitle">{{ friend.year }} лет</p>
        </div>

    </div>

</template>
<style scoped lang="scss">
.friend {
    display: flex;
    align-items: center;
    column-gap: 18px;

    background-color: #fff;
    border: 1px solid rgba(247, 110, 80, 0.5);
    border-radius: 20px;
    padding: 20px 10px 20px 20px;
    width: 283px;

    cursor: pointer;

    &__img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }

    &-text {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        &__title {
            font-weight: 400;
            font-size: 16px;
        }

        &__sabtitle {
            font-weight: 400;
            font-size: 14px;
            color: #616161;
        }
    }


}
</style>