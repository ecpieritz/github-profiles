<template>
  <div class="gp-starred">
    <Search />
    <div class="gp-starred__itens">
      <RepoModule
        title="ecpieritz / dreamhouse"
        description="Multi-page website for an interior design brand. Made with next.js."
        stars="998"
        forks="25"
        link="https://github.com/ecpieritz/dreamhouse"
      />
      <RepoModule
        title="ecpieritz / dreamhouse"
        description="Multi-page website for an interior design brand. Made with next.js."
        stars="998"
        forks="25"
        link="https://github.com/ecpieritz/dreamhouse"
      />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import RepoModule from './RepoModule.vue'
export default {
  name: 'StarredComp',
  components: {
    Search,
    RepoModule
  }
}
</script>

<style scoped lang="scss">
</style>
