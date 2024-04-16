<template>
  <div class="dp-git">
    <ul class="dp-git__nav nav nav-tabs">
      <li class="dp-git__nav__item nav-item">
        <a
          class="dp-git__nav__item__link nav-link"
          href="#"
          @click.prevent="setActiveTab('repos')"
          :class="{ active: activeTab === 'repos' }"
        >
          Repos <span>{{ reposNumber }}</span>
        </a>
      </li>
      <li class="dp-git__nav__item nav-item">
        <a
          class="dp-git__nav__item__link nav-link"
          href="#"
          @click.prevent="setActiveTab('starred')"
          :class="{ active: activeTab === 'starred' }"
        >
          Starred <span>{{ starredNumber }}</span>
        </a>
      </li>
    </ul>

    <div class="dp-git__content">
      <Repos v-show="activeTab === 'repos'" />
      <Starred v-show="activeTab === 'starred'" />
    </div>
  </div>
</template>

<script>
import Repos from './Repos.vue'
import Starred from './Starred.vue'
import githubApi from '../api/githubApi'

export default {
  name: "GitCol",
  components: {
    Repos,
    Starred
  },
  data() {
    return {
      activeTab: 'repos', // Defina a aba inicialmente ativa
      reposNumber: 0,
      starredNumber: 0
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async fetchRepoStats() {
      try {
        const response = await githubApi.getUser('ecpieritz');
        this.reposNumber = response.data.public_repos;
        const starredResponse = await githubApi.getUserStarredRepos('ecpieritz');
        this.starredNumber = starredResponse.length;
      } catch (error) {
        console.error('Error fetching repository stats:', error);
      }
    }
  },
  mounted() {
    this.fetchRepoStats();
  }
};
</script>

<style scoped lang="scss">
.dp-git {
  &__nav {
    border-bottom: 1px solid #999999;
    margin-bottom: 40px;

    &__item {
      &__link {
        border: none;
        font-size: 24px;
        font-weight: 400;
        color: #5c646d;
        padding: 10px 60px;
        display: flex;
        align-items: center;
        gap: 10px;

        &.active {
          border-bottom: 5px solid #e36209;
          font-weight: 700;
          margin-bottom: .5px;
        }

        span {
          font-size: 16px;
          line-height: 1;
          background-color: #e1e4e8;
          border-radius: 10px;
          width: 40px;
          padding: 3px 0;
          text-align: center;
          font-weight: 500;
        }
      }
    }
  }
}
@media(max-width: 540px) {
  .dp-git{
    &__nav{
      &__item {
        width: 50%;
        &__link {
          padding: 10px auto;

          span {
            width: auto;
            padding: 3px 7px;
          }
        }
      }
    }
  }
}
</style>
