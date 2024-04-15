<template>
  <main>
    <Header />
    <div class="row">
      <div class="col-lg-3 col-12">
        <PersonCol />
      </div>
      <div class="col-lg-9 col-12">
        <GitCol />
      </div>
    </div>
  </main>
</template>

<script>
import PersonCol from './components/PersonCol.vue'
import Header from './components/Header.vue'
import GitCol from './components/GitCol.vue'

export default {
  name: 'App',
  components: {
    PersonCol,
    Header,
    GitCol
  }
}
</script>

<style lang="scss">
@import url('./assets/scss/index.scss');

html, body{
  overflow-x: hidden;
}
</style>
