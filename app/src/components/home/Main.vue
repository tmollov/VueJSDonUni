<template>
  <div>
    <app-home-guest v-if="!loggedIn"></app-home-guest>
    <app-home-dashboard v-if="loggedIn"></app-home-dashboard>
  </div>
</template>

<script>
import AppHomeGuest from "./Guest";
import AppHomeDashboard from "./Dashboard";

export default {
  name: "app-home",
  components: {
    AppHomeGuest,
    AppHomeDashboard
  },
  computed: {
    loggedIn() {
      return this.$store.getters.User;
    }
  }
};
</script>

<style scoped>
</style>