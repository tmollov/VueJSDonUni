<template>
  <div>
    <app-home-guest v-if="!loggedIn"></app-home-guest>
    <app-home-dashboard v-if="loggedIn" :causes="causeArr"></app-home-dashboard>
  </div>
</template>

<script>
import AppHomeGuest from "./Guest";
import AppHomeDashboard from "./Dashboard";
import HomeMixin from '../../mixins/HomeMixin.vue';

export default {
  name: "app-home",
  mixins:[HomeMixin],
  components: {
    AppHomeGuest,
    AppHomeDashboard
  },
  computed: {
    loggedIn() {
      return this.$store.getters.User;
    },
    causeArr() {
      return this.causes;
    }
  },
  created() {
    this.LoadCauses();
  }
};
</script>

<style scoped>
</style>