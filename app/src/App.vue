<template>
<body id="app">
  <app-navigation></app-navigation>
  <router-view></router-view>
  <app-footer></app-footer>
</body>
</template>

<script>
import AppFooter from "./components/core/Footer";
import AppNavigation from './components/core/Navigation';

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
</style>
