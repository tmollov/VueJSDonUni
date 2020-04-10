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
          <li v-if="$store.getters.User" class="nav-item">
            <router-link class="nav-link" to="/cause/create">Create Cause</router-link>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li v-if="$store.getters.User" class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li v-if="$store.getters.User" class="nav-item">
            <a class="nav-link" href="#logout" @click.prevent="logout()">Logout</a>
          </li>
          <li v-if="!$store.getters.User" class="nav-item">
            <router-link class="nav-link" to="login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthMixin from '../../mixins/AuthMixin.vue';
export default {
  name: "app-navigation",
  mixins:[AuthMixin]
};
</script>

<style scoped>
nav a {
  font-size: 20px;
}
</style>