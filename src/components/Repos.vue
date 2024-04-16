<template>
  <div class="gp-repos">
    <Search v-model="searchTerm" @search="filterRepositories" />
    
    <div class="gp-repos__itens">
      <RepoModule
        v-for="repo in filteredRepos"
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
  name: 'ReposComp',
  components: {
    Search,
    RepoModule
  },
  data() {
    return {
      repos: [],
      searchTerm: ''
    };
  },
  async created() {
    try {
      const response = await githubApi.getUserRepos('ecpieritz');
      this.repos = response;
    } catch (error) {
      console.error('Erro ao obter repositórios:', error);
    }
  },
  computed: {
    filteredRepos() {
      if (!this.searchTerm) {
        return this.repos;
      } else {
        return this.repos.filter(repo =>
          repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }
  },
  methods: {
    filterRepositories(searchTerm) {
      this.searchTerm = searchTerm;
    }
  }
}
</script>

<style scoped lang="scss">
@media(max-width: 996px){
  .gp-repos{
    padding: 0 40px;
  }
}
</style>
