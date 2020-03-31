<template>
<body id="app">
  <app-navigation :IsLogged="IsLogged"></app-navigation>

  <app-home-guest v-if="!IsLogged"></app-home-guest>
  <app-footer></app-footer>
</body>
</template>

<script>
import AppFooter from "./components/core/Footer";
import AppNavigation from './components/core/Navigation';
import AppHomeGuest from './components/home/Guest';

export default {
  name: "App",
  components: {
    AppNavigation,
    AppHomeGuest,
    AppFooter
  },
  data(){
    return {
    IsLogged: false
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
