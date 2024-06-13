<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import friends from '@/friends.json';

const openCard = ref(false);

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
        <div v-if="openCard"
            style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; background: rgba(0, 0, 0, 0.5); z-index: 19; opacity: 70;display: flex;flex-direction: column;justify-content: center;align-items: center;"
            class="overlay">
            <div style="width: 862px; height: 400px; margin: 0 auto; background: #fff; border-radius: 30px; padding: 40px; z-index: 20; position: relative;"
                class="modal">
                <svg @click="openCard = false" style="cursor: pointer; position: absolute; top: 30px; right: 30px;" width="19" height="18" viewBox="0 0 19 18"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.841797 0L18.8418 18" stroke="#696969" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M0.841797 18L18.8418 0" stroke="#696969" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <div style="display: flex; justify-content: space-between;">
                    <div style="border: 0.86px solid rgba(247, 110, 80, 0.5); border-radius: 17px; padding: 34px 68px;">
                        <img style="width: 250px; border-radius: 20px; "
                            src="https://i.pinimg.com/564x/e2/0a/ab/e20aab8ce8d0851a559414b8bb82dbed.jpg" alt="">
                    </div>
                    <div class="note-input">
                        <textarea style="width: 90%; height: 140px; margin-bottom: 18px; font-weight: 400; font-size: 16px; border: 1px solid rgba(247, 110, 80, 0.5); border-radius: 20px; padding: 8px; outline: #f76e50; font-weight: 500; font-size: 14px; margin-left: 20px; pointer-events: none; user-select: none;" name="note" id="note" cols="32" rows="5">На день рождение</textarea>
                        <textarea style="width: 90%; height: 160px; font-weight: 400; font-size: 16px; border: 1px solid rgba(247, 110, 80, 0.5); border-radius: 20px; padding: 8px; outline: #f76e50; font-weight: 500; font-size: 14px; margin-left: 20px; pointer-events: none; user-select: none;" name="note" id="note" cols="32" rows="5"
                            placeholder="Добавьте описание...">Подарок на моё 20 летие</textarea>
                    </div>
                </div>

            </div>

        </div>
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
                <button type="submit" :class="{ add: !cliked, delit: cliked }" @click="cliked = !cliked"></button>
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

            <div class="list-items">
                <div style="display: flex; flex-direction: column; justify-content: space-between; background-color: #ffeeeb;"
                    v-for="item in friend.list" :key="item.id" class="item">
                    <img :src="item.img" alt="">
                    <div class="item-text">
                        <h3 class="item-text__title">{{ item.title }}</h3>
                        <p class="item-text__subtitle">{{ item.subtitle }}</p>
                    </div>
                    <div style="position: relative; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f76e50; padding-top: 16px; margin-top: 16px;"
                        class="item-use">
                        <button @click="openCard = true" style="cursor: pointer;"
                            class="item-use__open">Открыть</button>
                        <img style="position: absolute; right: 0; top: 20px; width: 32px; height: 32px;"
                            src="@/app/img/check-card.svg" alt="">
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: space-between; "
                    v-for="item in friend.list" :key="item.id" class="item">
                    <img :src="item.img" alt="">
                    <div class="item-text">
                        <h3 class="item-text__title">{{ item.title }}</h3>
                        <p class="item-text__subtitle">{{ item.subtitle }}</p>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f76e50; padding-top: 16px; margin-top: 16px;"
                        class="item-use">
                        <button style="cursor: pointer;" class="item-use__open">Открыть</button>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.5 13C24.5 19.6274 19.1274 25 12.5 25C5.87258 25 0.5 19.6274 0.5 13C0.5 6.37258 5.87258 1 12.5 1C19.1274 1 24.5 6.37258 24.5 13Z"
                                fill="#F76E50" fill-opacity="0.1" stroke="#F76E50" />
                            <path
                                d="M7.8125 12.9087L11.4749 17.7168C11.9359 18.3219 12.8769 18.2112 13.1848 17.5156L17.8125 7.0625"
                                stroke="#F76E50" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
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

        &-condition {
            .add {
                width: 257px;
                height: 72px;
                background-image: url(@/app/img/add-friend.svg);
                background-repeat: no-repeat;
            }

            .delit {
                width: 257px;
                height: 72px;
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

        &-items {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;

            margin-top: 40px;

            .item {
                border: 1px solid #f76e50;
                border-radius: 20px;
                padding: 20px 22px;
                background-color: #fff;

                img {
                    border-radius: 10px;
                    width: 200px;
                    height: 179px;

                    margin-bottom: 24px;
                }

                &-text {
                    &__title {
                        font-weight: 500;
                        font-size: 18px;

                        margin-bottom: 12px;
                    }

                    &__subtitle {
                        font-weight: 500;
                        font-size: 16px;
                        color: #2e2e2e;
                    }
                }

                &-use {
                    &__open {
                        background-color: #796DFF;
                        border-radius: 10px;
                        padding: 10px 39px;

                        font-weight: 500;
                        font-size: 18px;
                        color: #fff;

                    }

                    // input[type="checkbox"]{
                    //     width: 25px;
                    //     height: 25px;
                    //     border-radius: 50%;
                    //     border: none;
                    // }

                }




            }
        }
    }


}
</style>