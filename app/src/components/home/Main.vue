<template>
  <div>
    <app-home-guest v-if="!loggedIn"></app-home-guest>
    <app-home-dashboard v-if="loggedIn" :causes="causeArr"></app-home-dashboard>
  </div>
</template>

<script>
import AppHomeGuest from "./Guest";
import AppHomeDashboard from "./Dashboard";

import firebase from "firebase";

export default {
  name: "app-home",
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
  data() {
    return {
      causes: null
    };
  },
  created() {
    firebase
      .database()
      .ref()
      .once("value")
      .then((snapshot) => {
        if (snapshot.val() == null) {
           this.causes = [];
           return;
        }
        
        this.causes = snapshot.val().causes;
      });
  }
};
</script>

<style scoped>
</style>