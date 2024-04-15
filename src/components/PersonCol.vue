<template>
  <div class="gp-person">
    <img class="gp-person__img" src="https://avatars.githubusercontent.com/u/66131506?v=4" alt="">
    <div class="gp-person__texts">
      <h3 class="gp-person__texts__name">Emilyn Pieritz</h3>
      <p class="gp-person__texts__description">Front-end Developer | Vue.js | React | Next | Javascript | Typescript</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCol',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.gp-person{
  padding: 0 40px;
  text-align: center;
  &__img{
    width: 100%;
    border-radius: 50%;
  }
  &__texts{
    &__name{
      margin-top: 30px;
      font-size: 28px;
      font-weight: 700;
    }
    &__description{
      font-size: 16px;
      font-weight: 400;
    }
  }

}
@media(max-width: 996px){
  .gp-person{
    text-align: left;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    &__img{
      width: 100px;
      height: 100px;
    }
  }
}
</style>
