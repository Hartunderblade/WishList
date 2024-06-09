<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import friends from '@/friends.json';

const cliked = ref(false)

const friend = ref(null);
const route = useRoute()

const { id } = route.params;

onBeforeMount(() => {
    friend.value = friends.find(c => c.id === parseInt(id))
})


const buttonColor = ref('blue');

    const removeFriend = () => {
      buttonColor.value = 'red';
    }

</script>

<template>

    <div class="user">
        <div class="info" v-if="friend">
            <img class="info__img" :src="friend.avatar" alt="">
            <div class="description">
                <div class="description-text">
                    <p class="description-text__name">{{ friend.name }}</p>
                    <div class="about">
                        <div class="about-gender">
                            <span>Пол:</span>
                            <p>{{ friend.gender }}</p>
                        </div>
                        <div class="about-birthday">
                            <span>Дата рождения:</span>
                            <p>{{ friend.birthday }}</p>
                        </div>
                        <div class="about-birthday">
                            <span>Социальные сети:</span>
                            <p>{{ friend.social }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="info-count">
                <button>Друзей {{ friend.frends }}</button>
                <button>Листов {{ friend.lists }}</button>
            </div>

            <div class="info-condition">
                <button type="submit" :class="{ add: !cliked, delit : cliked }" @click="cliked = !cliked"></button>
            </div>
        </div>
        <div v-else>
            <h1>Пользовател не найден</h1>
        </div>
        <div class="list">
            <div class="list-title">
                <div class="list-title__line"></div>
                <h2 class="list-title__text">Лист</h2>
            </div>

            <div  class="list-items">
                <div v-for="item in friend.list" :key="item.id" class="item">
                    <img :src="item.img" alt="">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang="scss">
.user {
    margin: 60px 0;

    .info {
        border-radius: 30px;
        padding: 40px 74px 40px 54px;
        width: 1380px;
        background: #fff;

        display: flex;
        align-items: center;
        column-gap: 24px;

        &__img {
            width: 112px;
            height: 112px;
        }

        .description {
            // display: flex;

            &-text {
                &__name {
                    // font-weight: 500;
                    font-size: 22px;

                    margin-bottom: 20px;
                }

                .about {
                    display: flex;
                    column-gap: 32px;

                    div {
                        display: flex;
                        flex-direction: column;
                        row-gap: 12px;

                        span {
                            font-weight: 400;
                            font-size: 18px;
                            color: #616161;
                        }

                        p {
                            font-weight: 500;
                            font-size: 18px;
                            color: #141414;
                        }
                    }
                }
            }


        }

        &-count {
            display: flex;
            column-gap: 26px;

            button {
                border-radius: 20px;
                padding: 20px 24px;
                width: 161px;
                background-color: #796dff;

                font-weight: 500;
                font-size: 20px;
                color: #fff;
            }
        }

        &-condition{
        .add{
            width: 257px;   
            height:72px;
       background-image: url(@/app/img/add-friend.svg);
       background-repeat: no-repeat;
        }

        .delit{
            width: 257px;   
       height:72px;
    background-image: url(@/app/img/delit-friend.svg);
    background-repeat: no-repeat;
        }
    }
    }

    .list {
        background: #fff;
        border-radius: 20px;
        padding: 60px 81px;
        width: 1462px;

        margin-top: 60px;

        &-title {
            display: flex;
            align-items: center;

            column-gap: 16px;

            &__line {
                box-shadow: 1px 0 23px 0 rgba(247, 110, 80, 0.7);
                background: #f76e50;
                border-radius: 50px;
                width: 10px;
                height: 50px;
            }

            &__text {
                font-weight: 600;
                font-size: 28px;
            }
        }

        &-items{
            display: flex;
            gap: 20px;
            flex-wrap: wrap;

            margin-top: 40px;

            .item{
                border: 1px solid #f76e50;
                border-radius: 20px;
                padding: 20px 22px;
                background-color: #fff;

                img{
                    border-radius: 10px;
                    width: 200px;
                    height: 179px;

                    margin-bottom: 24px;
                }

                h3{
                    font-weight: 500;
                    font-size: 18px;

                    margin-bottom: 12px;
                }

                p{
                    font-weight: 500;
                    font-size: 16px;
                    color: #2e2e2e;
                }
            }
        }
    }

    
}
</style>