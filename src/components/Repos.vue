<template>
  <div class="gp-repos">
    <Search />
    
    <div class="gp-repos__itens">
      <RepoModule
        title="ecpieritz / shade-io"
        description="SPA made for a digital services company. Created with Next.js"
        stars="1,077"
        forks="177"
        link="https://github.com/ecpieritz/shade-io"
      />
      <RepoModule
        title="ecpieritz / shade-io"
        description="SPA made for a digital services company. Created with Next.js"
        stars="1,077"
        forks="177"
        link="https://github.com/ecpieritz/shade-io"
      />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import RepoModule from './RepoModule.vue'
export default {
  name: 'ReposComp',
  components: {
    Search,
    RepoModule
  }
}
</script>

<style scoped lang="scss">
</style>
