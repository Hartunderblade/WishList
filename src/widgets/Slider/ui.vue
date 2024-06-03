<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);

const imagesSlide = ref([
    './src/app/img/slider-img-1.png',
    './src/app/img/slider-img-2.png',
    './src/app/img/slider-img-3.png',
])


const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % imagesSlide.value.length;
    };

    let timer;
    onMounted(() => {
      timer = setInterval(() => {
        nextImage();
      }, 6000);
    });

</script>

<template>
    <div class="slider">
        <div class="slider-images">
            <img class="slider-images__img" :src="imagesSlide[currentIndex]" alt="">
        </div>
        <div class="slider-radio">
            <input class="slider-radio__buttons" type="radio" v-for="(image, index) in imagesSlide" :key="index" :value="index" v-model="currentIndex" />
        </div>
    </div>
    
    
</template>

<style scoped lang="scss">
.slider{

    width: 580px;
    margin: 0 auto;


    &-images{
        &__img{
            width: 580px;
            height: 572px;

            border-radius: 40px 40px 0 0;
        }
    }

    &-radio{
        background-color: #B6AFFF;
        padding: 28px 0 120px 0;
        border-radius: 0 0 40px 40px;

        display: flex;
        column-gap: 14px;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 2px;

        &__buttons[type="radio"]{
            appearance: none;
            border: 3px solid #ffffff;
            height: 1rem;
            width: 1rem;
            border-radius: 100%;
            vertical-align: text-bottom;
            position: relative;

            cursor: pointer;

            &:checked{
                background-color: #fff;
            }

            
        }
    }
}
</style>