<script setup>

</script>

<template>
   <div class="profile">
      <div class="user">
        <div class="info">
          <img class="info__images" src="@/app/img/avatar-user.png" alt="Фото пользователя">
          <div class="blok">
            <h3 class="blok__name">Иванов Иван</h3>
            <div class="blok-text">
              <div>
                <span>Пол:</span>
                <p>Женский</p>
              </div>
              <div>
                <span>Дата рождения:</span>
                <p>12.03.2001г</p>
              </div>
              <div>
                <span>Социальные сети:</span>
                <p>Не указано</p>
              </div>
              <div class="blok-counter">
                <p class="blok-counter__frends">Друзей 10</p>
                <p class="blok-counter__lists">Листов 3</p>
            </div>
            </div>
            
          </div>
        </div>
        <div class="user-create">
          add
        </div>
      </div>

   </div>
</template>

<style scoped lang="scss">
.profile{
  .user{
    .info{
      display: flex;

      &__images{
        width: 102px;
        height: 102px;
        border-radius: 100%;

        padding: 4px;
        border: 3px solid #796DFF;
      }

      .blok{



        &__name{
          font-weight: 600;
          font-size: 22px;
        }

        &-text{
          display: flex;
          column-gap: 40px;
          // width: 600px;

          div{
            display: flex;
            flex-direction: column;
            row-gap: 14px;
            span{
              font-weight: 300;
              font-size: 18px;
              color: #737373;
            }

            p{
              font-weight: 500;
              font-size: 18px;
              color: #141414;
            }

          }

          .blok-counter{
            display: flex;
          &__frends{
            background-color: #fff;
          }

        }
        }

        
        
      }
    }
  }
}
</style>