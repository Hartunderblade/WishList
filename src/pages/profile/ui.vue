<script setup></script>

<template>
  <div class="profile">
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
      <button class="user-create">
        <img src="@/app/img/create-list.svg" alt="Создание листа желания" />
      </button>
    </div>
    <div class="list">
      <div class="text">
        <div class="text-info">
          <h2 class="text-info__title"><span>.</span>8 марта</h2>
          <p class="text-info__subtitle">Тут может быть ваше описание</p>
        </div>
        <div class="text-edit">
          <img class="text-edit__img" src="@/app/img/edit.svg" alt="" />
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <img class="card__img" src="@/app/img/img-1.png" alt="Изображение желания" />
          <div class="card-text">
            <p class="card-text__title">Тату</p>
            <p class="card-text__subtitle">http://tatusad.ru</p>
          </div>
          <div class="card-line"></div>
          <div class="card-open">
            <button class="card-open__open">Открыть</button>
            <img class="card-open__delit" src="@/app/img/delit.svg" alt="Открыть" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
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
  }

  .list {
    background-color: #fff;
    border-radius: 20px;
    padding: 60px 80px;

    border: 1px solid #e8e6ff;

    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-info {
        display: flex;
        flex-direction: column;
        row-gap: 28px;

        &__title {
          font-weight: 600;
          font-size: 28px;

          span {
            width: 20px;
            height: 50px;
            border-radius: 50px;
            background-color: #f76e50;
            box-shadow: 1px 1px 9px 0 #f76e50;
            color: #f76e50;
            margin-right: 10px;
          }

          // margin-right: 10px;
        }
      }

      &__subtitle {
        font-weight: 400;
        font-size: 20px;
      }

      &-edit {
        &__img {
          width: 32px;
          height: 32px;

          cursor: pointer;
        }
      }
    }

    .cards {
      .card {
        border: 1px solid #f76e50;
        border-radius: 20px;
        padding: 20px 22px;
        width: 244px;
        height: 361px;

        &__img {
          width: 200px;
          height: 179px;
          border-radius: 10px;
        }

        &-text {
          display: flex;
          flex-direction: column;
          row-gap: 6px;

          margin: 24px 0 0 0;

          padding-bottom: 17px;

          border-bottom: 1px solid #f76e50;

          &__title {
            font-weight: 500;
            font-size: 18px;
          }

          &__subtitle {
            font-weight: 500;
            font-size: 16px;
            color: #2e2e2e;
          }
        }

        &-open {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 17px;

          &__open {
            font-weight: 500;
            font-size: 18px;
            color: #fff;

            border-radius: 10px;
            padding: 10px 39px;
            background: #f76e50;

            cursor: pointer;
          }

          &__delit {
            width: 20px;
            height: 24px;

            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
