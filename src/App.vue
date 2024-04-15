<template>
  <main>
    <Header />
    <div class="row">
      <div class="col-3">
  
        <PersonCol />
      </div>
      <div class="col-9">
        
        Teste
      </div>
    </div>
  </main>
</template>

<script>
import PersonCol from './components/PersonCol.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PersonCol,
    Header
  }
}
</script>

<style lang="scss">
</style>
