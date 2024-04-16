<template>
  <div class="gp-search">
    <span class="gp-search__icon input-group-text"><i class="bi bi-search"></i></span>
    <input type="text" class="gp-search__input form-control" placeholder="Filter by name" @keyup.enter="searchRepositories">
  </div>
</template>

<script>
export default {
  name: 'SearchComp',
  props: {
    value: String
  },
  methods: {
    searchRepositories(event) {
      this.$emit('search', event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.gp-search{
  display: flex;
  width: 400px;
  margin-bottom: 40px;
  border: 1px solid #999999;
  border-radius: 8px;
  
  &__icon,
  &__input{
    background-color: #ffffff;
    border: none;
    font-size: 18px;
    
    i,
    &::placeholder{
      color: #999999;
    }
  }
}

@media(max-width: 540px) {
  .gp-search{
    width: 100%;
  }
}
</style>
