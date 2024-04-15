<template>
  <div class="row">
    <div class="col-3">

      <PersonCol />
    </div>
    <div class="col-9">
      
      Teste
    </div>
  </div>
</template>

<script>
import PersonCol from './components/PersonCol.vue'

export default {
  name: 'App',
  components: {
    PersonCol
  }
}
</script>

<style lang="scss">
</style>
