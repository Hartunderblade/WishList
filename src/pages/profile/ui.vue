<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import listData from '@/list.json'

import List from '@/shared/list/ui.vue'
import ModalCreate from '@/shared/modalCreate/ui.vue'

const router = useRouter()
const lists = ref(listData)

const modalCreate = ref(false)

const isloading = ref(true);


///////

// modal

const showModal = ref(false);

const newTitle = ref('');
const newDescription = ref('');
const newImageUrl = ref('');

const notes = ref([]);

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    title: newTitle.value,
    description: newDescription.value,
    img: newImageUrl.value,
  })
  showModal.value = false;
  newTitle.value = '';
  newDescription.value = '';
  newImageUrl.value = '';
  isloading.value = false;
}


const onFileChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    newImageUrl.value = reader.result
  }

  reader.readAsDataURL(file)
}


const delitNote = (index) => {
  notes.value.splice(index, 1)
}
// modal
</script>

<template>
  <div class="profile">
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <button @click="showModal = false" class="modal__close">
          <img src="@/app/img/close.svg" alt="" />
        </button>

        <div class="note">
          <div class="file">
            <label @change="onFileChange" class="lable">
              <img src="@/app/img/add-img.svg" alt="Загрузить картинку" />
              <input type="file" />
            </label>
            <img class="file__img" v-if="newImageUrl" :src="newImageUrl" alt="Uploaded Image" />
          </div>
          <div class="note-input">
            <textarea v-model.trim="newTitle" name="note" id="note" cols="32" rows="5"
              placeholder="Добавьте заголовок..."></textarea>
            <textarea v-model.trim="newDescription" name="note" id="note" cols="32" rows="5"
              placeholder="Добавьте описание..."></textarea>
            <button class="note-input__button" @click="addNote()">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <div class="info">
        <img class="info__images" src="@/app/img/avatar-user.png" alt="Фото пользователя" />
        <div class="blok">
          <h3 class="blok__name">Иванов Иван</h3>
          <div class="blok-contact">
            <div class="">
              <span>Пол</span>
              <p>Мужской</p>
            </div>
            <div class="">
              <span>Дата рождения</span>
              <p>12.03.2001г</p>
            </div>
            <div class="">
              <span>Социальные сети</span>
              <p>Не указано</p>
            </div>
          </div>
        </div>
        <div class="info-count">
          <p class="info-count__frends">Друзей 10</p>
          <p class="info-count__list">Желаний {{ notes.length }}</p>
        </div>
      </div>
      <button @click="showModal = true" class="user-create">
        <img src="@/app/img/create-list.svg" alt="Создание листа желания" />
      </button>
    </div>


    <div class="list">

      <div class="list-title">
        <div class="list-title__line"></div>
        <h2 class="list-title__text">Мой лист</h2>

      </div>
      <div class="list-loading" v-if="isloading">
        <h1 class="list-loading__title">Создайте своё желание</h1>
        <img class="list-loading__img" src="@/app/img/is-loading.svg" alt="">
      </div>
      <div class="cards">
        <div v-for="note in notes" :key="note.id" class="card">
          <img class="card__img" :src="note.img" alt="" />
          <p class="card-text__title">{{ note.title }}</p>
          <p class="card-text__subtitle">{{ note.description }}</p>
          <div class="card-open">
            <button type="submit" class="card-open__button" @click="delitNote(index)">Удалить</button>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  margin: 64px 0;

  .overlay {
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

    .modal {
      width: 862px;
      height: 400px;
      margin: 0 auto;
      background: #fff;
      border-radius: 30px;
      padding: 40px;
      z-index: 20;

      position: relative;

      &__close {
        position: absolute;
        top: 30px;
        right: 30px;
      }

      .note {
        display: flex;
        // justify-content: space-between;

        .file {
          border: 1px solid rgba(247, 110, 80, 0.5);
          width: 342px;
          height: 310px;
          position: relative;

          border-radius: 17px;
          padding: 34px 68px;

          &__img {
            width: 270px;
            height: 290px;
            border-radius: 10px;

            position: absolute;
            top: 0;
            left: 0;

            margin-left: 30px;
            // right: 0;
            // bottom: 0;
          }

          input[type='file'] {
            outline: none;
            opacity: 0;
            pointer-events: none;
            user-select: none;
          }
        }

        &-input {
          display: flex;
          flex-direction: column;
          row-gap: 20px;

          textarea {
            border: 1px solid rgba(247, 110, 80, 0.5);
            border-radius: 20px;
            padding: 8px;
            outline: #f76e50;

            font-weight: 500;
            font-size: 14px;
            margin-left: 20px;
          }

          &__button {
            background-color: #f76e50;
            border-radius: 20px;
            padding: 16px 136px;

            margin-left: 20px;

            cursor: pointer;

            font-weight: 600;
            font-size: 22px;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    column-gap: 48px;

    .info {
      display: flex;
      align-items: center;

      width: 1100px;

      background-color: #fff;
      border-radius: 30px;
      padding: 40px 60px 40px 40px;

      &__images {
        width: 102px;
        height: 102px;
        border-radius: 100%;

        padding: 4px;
        border: 3px solid #796dff;

        margin-right: 46px;
      }

      .blok {
        display: flex;
        flex-direction: column;
        row-gap: 28px;

        &__name {
          font-weight: 500;
          font-size: 22px;
        }

        &-contact {
          display: flex;
          align-items: center;
          column-gap: 40px;

          div {
            display: flex;
            flex-direction: column;
            row-gap: 10px;

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

      &-count {
        display: flex;
        align-items: center;
        column-gap: 20px;

        margin-left: 82px;

        &__frends,
        &__list {
          font-weight: 500;
          font-size: 20px;
          color: #fff;

          border-radius: 20px;
          padding: 20px 24px;
          background: #796dff;
        }
      }
    }

    &-create {
      background-color: #fff;

      padding: 40px 82px;
      border-radius: 30px;

      cursor: pointer;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    // height: 600px;
    padding: 40px;

    background-color: #fff;
    border-radius: 30px;

    margin-top: 30px;

    &-loading {
      display: flex;
      flex-direction: column;
      align-items: center;

      row-gap: 30px;

      &__title {
        color: rgba(152, 143, 255, 0.928);
      }
    }

    &-title {
      display: flex;
      // align-items: center;
      column-gap: 10px;



      &__line {
        background-color: #f76e50;
        box-shadow: 1px 0 23px 0 rgba(247, 110, 80, 0.7);
        border-radius: 50px;
        width: 10px;
        height: 50px;
      }

      &__text {
        margin-top: 14px;
      }

    }

    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;

      margin-top: 10px;

      .card {
        border: 1px solid #f76e50;
        background-color: #fff;
        border-radius: 20px;
        padding: 30px;
        // width: 240px;
        // height: 360px;

        &__img {
          border-radius: 10px;
          width: 170px;
          height: 179px;
        }

        &-text {
          display: flex;
          flex-direction: column;
          row-gap: 12px;

          margin-top: 20px;

          &__title {
            font-weight: 500;
            font-size: 18px;
          }

          &__subtitle {
            font-weight: 500;
            font-size: 16px;
            color: #2e2e2e;

            border-bottom: 1px solid #f76e50;
            padding-bottom: 18px;
          }
        }

        &-open {
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-top: 18px;


          &__button {
            font-weight: 500;
            font-size: 18px;
            color: #fff;

            border-radius: 10px;
            padding: 10px 39px;
            background: #f76e50;

            cursor: pointer;
          }
        }
      }
    }
  }

  .container {
    max-width: 1000px;
    // padding: 10px;
    margin: 0 auto;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 64px;
      }

      button {
        border: none;
        padding: 10px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: #218cff;
        border-radius: 100%;
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>
