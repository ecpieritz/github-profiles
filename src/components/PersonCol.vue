<!-- PersonCol.vue -->
<template>
  <div class="gp-person">
    <img class="gp-person__img" :src="profileImageUrl" alt="">
    <div class="gp-person__texts">
      <h3 class="gp-person__texts__name">{{ name }}</h3>
      <p class="gp-person__texts__description">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
import githubApi from '../api/githubApi';

export default {
  name: 'PersonCol',
  props: {
    name: String,
    bio: String
  },
  data() {
    return {
      profileImageUrl: '' // Inicialmente, o URL da foto de perfil está vazio
    };
  },
  async created() {
    try {
      // Fazendo uma solicitação à API do GitHub para obter as informações do usuário 'ecpieritz'
      const response = await githubApi.getUser('ecpieritz');
      // Obtendo o URL da foto de perfil do usuário 'ecpieritz' a partir dos dados recebidos
      this.profileImageUrl = response.data.avatar_url;
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error);
    }
  }
};
</script>

<style scoped lang="scss">
.gp-person {
  padding: 0 40px;
  text-align: center;
  &__img {
    width: 100%;
    border-radius: 50%;
  }
  &__texts {
    &__name {
      margin-top: 30px;
      font-size: 28px;
      font-weight: 700;
    }
    &__description {
      font-size: 16px;
      font-weight: 400;
    }
  }
}

@media(max-width: 996px) {
  .gp-person {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    &__img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
