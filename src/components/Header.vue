<template>
  <header class="gp-header">
    <img src="https://github.com/ecpieritz/png-logos/blob/main/github-white.png?raw=true" alt="Github logo">
    <p><strong>Github</strong> profiles</p>
  </header>
</template>

<script>
export default {
  name: 'HeaderGit',
  props: {
  }
}
</script>

<style scoped lang="scss">
.gp-header{
  background-color: #5C646D;
  color: #ffffff;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  p{
    line-height: 1;
    margin: 0;
    font-size: 32px;
  }

  img{
    width: 36px;
  }
}
</style>
