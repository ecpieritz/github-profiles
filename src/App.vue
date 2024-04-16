<template>
  <main>
    <Header />
    <div class="row">
      <div class="col-lg-3 col-12">
        <PersonCol :name="user.name" :bio="user.bio" />
      </div>
      <div class="col-lg-9 col-12">
        <GitCol />
      </div>
    </div>
  </main>
</template>

<script>
import githubApi from "./api/githubApi";
import PersonCol from "./components/PersonCol.vue";
import Header from "./components/Header.vue";
import GitCol from "./components/GitCol.vue";

export default {
  name: "App",
  components: {
    PersonCol,
    Header,
    GitCol,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    githubApi
      .getUser("ecpieritz")
      .then((response) => {
        this.user = response.data;
        this.loadBio("ecpieritz");
      })
      .catch((error) => {
        console.error("Erro ao buscar informações do usuário:", error);
      });
  },
  methods: {
    loadBio(username) {
      githubApi
        .getUserBio(username)
        .then((bio) => {
          this.user.bio = bio;
        })
        .catch((error) => {
          console.error("Erro ao buscar a biografia do usuário:", error);
        });
    },
  },
};
</script>

<style lang="scss">
@import url("./assets/scss/index.scss");

html,
body {
  overflow-x: hidden;
}
</style>
