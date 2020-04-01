<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0 m-0">
    <div class="container">
      <router-link class="navbar-brand" to="/">Donation University</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li v-if="$store.getters.IsUserLogged" class="nav-item">
            <router-link class="nav-link" to="/cause/create">Create Cause</router-link>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li v-if="$store.getters.IsUserLogged" class="nav-item">
            <a class="nav-link" href="/causes/my">My Causes</a>
          </li>
          <li v-if="$store.getters.IsUserLogged" class="nav-item">
            <a class="nav-link" href="#logout" @click.prevent="logout()">Logout {{email}}</a>
          </li>
          <li v-if="!$store.getters.IsUserLogged" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-navigation",
  methods: {
    logout() {
      this.$store.commit("changeLogState", false);
    }
  },
  computed: {
    email() {
      return this.$store.getters.UserEmail;
    }
  }
};
</script>

<style scoped>
nav a {
  font-size: 20px;
}
</style>