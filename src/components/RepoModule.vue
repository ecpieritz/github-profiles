<template>
  <div class="gp-repo-module">
    <div class="gp-repo-module__texts">
      <a class="gp-repo-module__texts__title" href={link} target="_blank" rel="noopener noreferrer">{{title}}</a>
      <p class="gp-repo-module__texts__description">{{description}}</p>
    </div>

    <div class="gp-repo-module__infos">
      <div class="gp-repo-module__infos__part">
        <img class="gp-repo-module__infos__part__icon" src="../assets/imgs/gp-icon__star.svg" alt="">
        <p class="gp-repo-module__infos__part__number">{{stars}}</p>
      </div>
      
      <div class="gp-repo-module__infos__part">
        <img class="gp-repo-module__infos__part__icon" src="../assets/imgs/gp-icon__fork.svg" alt="">
        <p class="gp-repo-module__infos__part__number">{{forks}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoModule',
  props: {
      title: String,
      description: String,
      stars: String,
      forks: String,
      link: String
    }
}
</script>

<style scoped lang="scss">
.gp-repo-module{
  border-bottom: 1px solid #999999;
  margin-bottom: 30px;
  color: #999999;

  &__texts{
    &__title{
      font-size: 24px;
    }
  }

  &__infos{
    display: flex;
     gap: 30px;
     margin-top: 30px;

     &__part{
      display: flex;
      align-items: center;
      margin-bottom: 30px;
       p{
        line-height: 1;
        margin: 0;
       }

       &__icon{
        height: 20px;
        margin-right: 5px;
       }
     }
  }

  &:last-of-type{
    border-bottom: 0;
  }
}
</style>
