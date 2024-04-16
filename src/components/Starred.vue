<template>
  <div class="gp-starred">
    <Search />
    <div class="gp-starred__itens">
      <RepoModule
        v-for="repo in starredRepos"
        :key="repo.id"
        :title="repo.name"
        :description="repo.description"
        :stars="repo.stargazers_count"
        :forks="repo.forks_count"
        :link="repo.html_url"
      />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import RepoModule from './RepoModule.vue'
import githubApi from '../api/githubApi'

export default {
  name: 'StarredComp',
  components: {
    Search,
    RepoModule
  },
  data() {
    return {
      starredRepos: []
    };
  },
  async created() {
    try {
      const response = await githubApi.getUserStarredRepos('ecpieritz');
      this.starredRepos = response;
    } catch (error) {
      console.error('Erro ao obter repositórios starred:', error);
    }
  }
}
</script>

<style scoped lang="scss">
@media(max-width: 996px){
  .gp-starred{
    padding: 0 40px;
  }
}
</style>
