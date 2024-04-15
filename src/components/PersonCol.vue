<template>
  <div class="gp-person">
    <img class="gp-person__img" src="https://avatars.githubusercontent.com/u/66131506?v=4" alt="">
    <h3 class="gp-person__name">Emilyn Pieritz</h3>
    <p class="gp-person__description">Front-end Developer | Vue.js | React | Next | Javascript | Typescript</p>
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
</style>
