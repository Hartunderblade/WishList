<script setup>
import { ref } from 'vue';

const days = Array.from({ length: 31 }, (_, index) => index + 1);
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const years = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);

const selectedDay = ref(1);
const selectedMonth = ref(1);
const selectedYear = ref(new Date().getFullYear());
</script>

<template>
  <div class="settings">
    <div class="account">
      <div class="account-title">
        <div class="account-title__line"></div>
        <h2 class="account-title__text">Личные данные</h2>
      </div>
      <div class="profile">
        <div class="header">
          <img class="header__images" src="@/app/img/avatar-user.png" alt="Фото пользователя" />
          <button class="header__update"><img src="@/app/img/updateAvatar-icon.svg" alt=""></button>
        </div>
        <div class="input">
          <div class="input-name">
            <label for="">Имя:</label>
            <input type="text" name="" id="" placeholder="Введите имя">
          </div>
          <div class="input-surname">
            <label for="">Фамилия:</label>
            <input type="text" name="" id="" placeholder="Введите фамилию">
          </div>
          <div class="input-gender">
            <label for="">Пол:</label>
            <select>
              <option value="">Женский</option>
              <option value="">Мужской</option>
            </select>
          </div>
          <div class="input-date">
            <label for="">Дата рождения:</label>
            <div>
              <select id="" v-model="selectedDay">
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
              </select>

              <select id="" v-model="selectedMonth">
                <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
              </select>
              <select id="" v-model="selectedYear">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>

          </div>

          <div class="input-social">
            <label for="">Социальные сети:</label>
            <textarea name="" id="" placeholder="Укажите ссылку"></textarea>
          </div>
        </div>
      </div>
      <button class="profile__save">Сохранить</button>
    </div>

    <div class="delit">
      <button class="delit__account">Удалить аккаунт</button>
    </div>


  </div>
</template>

<style scoped lang="scss">
.settings {

  margin: 84px 0;

  .account {
    background-color: #fff;
    width: 1396px;
    border-radius: 20px 20px 0 0;

    padding: 48px 60px;

    &-title {
      display: flex;
      column-gap: 10px;
      align-items: center;

      &__line {
        background-color: #f76e50;
        box-shadow: 1px 0 23px 0 rgba(247, 110, 80, 0.7);
        border-radius: 50px;
        width: 10px;
        height: 50px;
      }

      &__text {
        font-weight: 600;
        font-size: 24px;
      }
    }
  }

  .profile {
    .header {
position: relative;
      &__images{
width: 102px;
height: 102px;
border-radius: 100%;
border: 3px solid #988FFF;
padding: 4px;
      }

      &__update{
        position: absolute;
        bottom: 10px;
        left: 64px;
        border-radius: 100%;
        width: 24px;
        height: 24px;
        
      }

    }

    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-name,
      &-surname {
        display: flex;
        flex-direction: column;
        row-gap: 6px;

        label {
          font-weight: 300;
          font-size: 16px;
        }

        input {
          border: 1px solid #988fff;
          border-radius: 16px;
          padding: 10px 0 10px 10px;
          background: #fff;
          width: 232px;
          font-size: 16px;
        }

      }

      &-gender {
        display: flex;
        flex-direction: column;
        row-gap: 6px;

        select {
          border: 1px solid #988fff;
          border-radius: 16px;
          padding: 10px 0 10px 10px;
          background: #fff;
          width: 232px;
          font-size: 16px;
        }
      }

      &-date {
        display: flex;
        flex-direction: column;
        row-gap: 6px;

        div {
          display: flex;
          column-gap: 6px;
        }

        select {
          border: 1px solid #988fff;
          border-radius: 14px;
          padding: 10px 0 10px 10px;
          width: 70px;

          font-weight: 400;
          font-size: 16px;

        }
      }

      &-social {
        display: flex;
        flex-direction: column;
        row-gap: 6px;

        textarea {
          resize: none;

          border: 1px solid #988fff;
          border-radius: 16px;
          padding: 10px 0 46px 10px;
          width: 232px;
        }
      }

    }

    &__save{
      background: #f76e50;
      border-radius: 20px;
padding: 20px 46px;

font-weight: 600;
font-size: 20px;
color: #fff;
    }



  }

  .delit{
    background-color: #fff;
    border: 1px solid rgba(121, 109, 255, 0.8);
border-radius: 0 0 20px 20px;
padding: 16px 0;
text-align: center;
margin-top: 30px;

cursor: pointer;

&__account{
  font-weight: 500;
font-size: 18px;
}
  }

}
</style>