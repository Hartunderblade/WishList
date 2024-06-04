<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import listData from '@/list.json'

import List from '@/shared/list/ui.vue'
import ModalCreate from '@/shared/modalCreate/ui.vue'

const router = useRouter()
const lists = ref(listData)

const modalCreate = ref(false)

///////

// modal

const showModal = ref(false)

const newTitle = ref('')
const newDescription = ref('')
const newImageUrl = ref('')

const notes = ref([])

const errorMessage = ref('')

function getRandomColor() {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
}

const addNote = () => {
  if (newTitle.value.length < 10) {
    return (errorMessage.value = 'note need to be 10 characters or more')
  }
  if (newDescription.value.length < 10) {
    return (errorMessage.value = 'note need to be 10 characters or more')
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    title: newTitle.value,
    description: newDescription.value,
    img: newImageUrl.value,
    bcColor: getRandomColor()
  })
  showModal.value = false
  newTitle.value = ''
  newDescription.value = ''
  newImageUrl.value = ''
  errorMessage.value = ''
}

const onFileChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    newImageUrl.value = reader.result
  }

  reader.readAsDataURL(file)
}
// modal

// const errorMessage = ref('');
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
            <img
              class="list__img"
              style="width: 100px; height: 100px"
              v-if="newImageUrl"
              :src="newImageUrl"
              alt="Uploaded Image"
            />
          </div>
          <div class="note-input">
            <textarea
              v-model.trim="newTitle"
              name="note"
              id="note"
              cols="32"
              rows="6"
              placeholder="Добавьте заголовок..."
            ></textarea>
            <textarea
              v-model.trim="newDescription"
              name="note"
              id="note"
              cols="32"
              rows="7"
              placeholder="Добавьте описание..."
            ></textarea>
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
              <p>Женский</p>
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
          <p class="info-count__list">Листов 3</p>
        </div>
      </div>
      <!-- <div v-if="showModal" class="overlay">
        <div class="modal">
          <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
          <button @click="addNote()">Add note</button>
          <button @click="showModal = false" class="close">close</button>
        </div>
      </div> -->
      <button @click="showModal = true" class="user-create">
        <img src="@/app/img/create-list.svg" alt="Создание листа желания" />
      </button>
    </div>

    <div class="list">
      <div
        v-for="note in notes"
        :key="note.id"
        :style="{ backgroundColor: note.bcColor }"
        class="card"
      >
        <img class="card__img" :src="note.img" alt="" />
        <p class="card__text">{{ note.title }}</p>
        <p class="card__text">{{ note.description }}</p>
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
      height: 440px;
      margin: 0 auto;
      background: #fff;
      border-radius: 30px;
      padding: 40px;
      z-index: 20;

      position: relative;

      .note {
        display: flex;
        // justify-content: space-between;

        .file {
          border: 1px solid rgba(247, 110, 80, 0.5);

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

          &__button {
            background-color: #f76e50;
            border-radius: 20px;
            padding: 16px 136px;

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

      width: 1049px;

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

    // .overlay {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   background-color: rgba(0, 0, 0, 0.77);
    //   z-index: 20;

    //   display: flex;
    //   align-items: center;
    //   justify-content: center;

    //   .modal {
    //     width: 750px;
    //     background-color: #fff;
    //     border-radius: 20px;
    //     padding: 30px;
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;

    //     button {
    //       padding: 10px 20px;
    //       font-size: 20px;
    //       width: 100%;
    //       background-color: blueviolet;
    //       border: none;
    //       color: white;
    //       cursor: pointer;
    //       margin-top: 15px;
    //     }

    //     p {
    //       color: rgb(193, 15, 15);
    //     }

    //     .close {
    //       background-color: rgb(193, 15, 15);
    //       margin-top: 16px;
    //     }
    //   }
    // }
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

    &-cards {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 255px;
        height: 255px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 20px;
        margin-bottom: 20px;

        &__date {
          font-size: 12.5px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
