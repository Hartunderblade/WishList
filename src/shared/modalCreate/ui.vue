<script setup>
import { ref } from 'vue';

const modalCreateList = ref(false)
const newNote = ref('');


const imageUrl = ref(null);

const onFileChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    imageUrl.value = reader.result;
  };

  reader.readAsDataURL(file);
};

const modalCreate = ref(true);
const title = ref('Добавьте описание для заголовка');
const text = ref('Добавьте описание');
const isEditing = ref(false);


const startEditing = () => {
    isEditing.value = true;

    setTimeout(() => {
        input.value.focus();
    });
};

const saveTitle = () => {
    isEditing.value = false;
};

const saveText = () => {
    isEditing.value = false;
};

</script>

<template>
    <div>
        <div style="z-index: 20;" v-if="modalCreateList" class="overlay">
            <div class="list">
                <button @click="modalCreateList = false" class="list__close"><img src="@/app/img/close.svg"
                        alt="Закрыть"></button>
                <div class="list-file">
                    <!-- <input type="file" @change="onFileChange" placeholder="Вставьте изображние"> -->

                    <!-- <label type="file">Вставьте изображние</label>
                <button type="file" @change="onFileChange">Вставьте изображние</button> -->


                    <!-- <form class="input">
	                <label class="input-file">
	   	                <label @change="onFileChange" type="file" name="file"><img src="@/app/img/add-img.svg" alt="Вставьте изображение"></label>	
 	                </label>
                </form> -->
                    <div class="example-1">
                        <div class="form-group">
                            <label @change="onFileChange" class="label">
                                <img src="@/app/img/add-img.svg" alt="Вставьте изображение">
                                <input type="file" />
                            </label>
                        </div>
                    </div>
                    <img class="list__img" style="width: 100px; height: 100px;" v-if="imageUrl" :src="imageUrl"
                        alt="Uploaded Image">
                </div>
                <div class="list-text">
                    <textarea v-model.trim="newNote" name="note" id="note" cols="40" rows="6"
                        placeholder="Добавьте заголовок..."></textarea>
                    <textarea v-model.trim="newNote" name="note" id="note" cols="40" rows="7"
                        placeholder="Добавьте описание..."></textarea>
                    <button @click="addNote()">Сохранить</button>
                </div>
            </div>
        </div>
        <div v-if="modalCreate" class="modal">
            <div class="wrapper">

                <div class="description">
                    <div class="input">
                        <div class="title">
                            <div class="title-input">
                                <input v-if="isEditing" ref="input" v-model="title" @blur="saveTitle" type="text">
                                <p v-else @click="startEditing">{{ title }}</p>
                            </div>
                            <img class="title__edit" src="@/app/img/edit.svg" @click="startEditing" alt="">
                        </div>
                        <div class="text">
                            <div class="text-input">
                                <input v-if="isEditing" ref="input" v-model="text" @blur="saveText" type="text">
                                <p v-else @click="startEditing">{{ text }}</p>
                            </div>
                            <img class="text__edit" src="@/app/img/edit.svg" @click="startEditing" alt="">
                        </div>
                    </div>
                    <img src="@/app/img/close.svg" alt="" @click="modalCreate = false">
                </div>
                <div class="lists">
                    <div class="list">

                    </div>
                    <button @click="modalCreateList = true" class="lists__create"><img
                            src="@/app/img/create-item-list.svg" alt="Создать карточку"></button>
                </div>


            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);

    z-index: 19;
    opacity: 70;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list{
        width: 862px;
        margin: 0 auto;
        background: #fff;
        border-radius: 30px;
        padding: 40px;
        z-index: 20;

        position: relative;

        &__close{
            position: absolute;
            top: 40px;
            right: 40px;
        }

        &-file{

        }
    }
}
.modal {

    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);

    z-index: 10;
    opacity: 70;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper {
        width: 862px;
        margin: 0 auto;
        background: #fff;
        border-radius: 30px;
        padding: 40px;
        z-index: 11;


        .description {
            display: flex;
            justify-content: space-between;
            align-items: start;


            .input {
                display: flex;
                flex-direction: column;
                row-gap: 20px;

                .title {
                    display: flex;
                    align-items: center;
                    column-gap: 90px;

                    &-input {
                        input {
                            border: 2px solid #F76E50;
                            outline: #fe5933;
                            border-radius: 10px;
                            padding: 10px 10px;
                            font-weight: 500;
                            font-size: 24px;
                        }

                        p {
                            font-weight: 500;
                            font-size: 24px;
                        }
                    }

                    &__edit {
                        width: 24px;
                        height: 24px;
                    }
                }

                .text {
                    display: flex;
                    align-items: center;
                    column-gap: 90px;

                    &-input {

                        input {
                            border: 2px solid #F76E50;
                            outline: #fe5933;
                            border-radius: 10px;
                            padding: 10px 10px;
                            font-weight: 500;
                            font-size: 18px;
                            color: #2e2e2e;
                        }

                        p {
                            font-weight: 500;
                            font-size: 18px;
                            color: #2e2e2e;
                        }

                    }

                    &__edit {
                        width: 24px;
                        height: 24px;
                    }
                }
            }

        }

        .lists{
            .list{

            }

            &__create{
                background-color: #F76E50;
                padding: 18px;
                border-radius: 20px;
            }
        }
    }
}
</style>