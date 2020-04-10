<template>
<body id="app">
  <app-navigation></app-navigation>
  <router-view></router-view>
  <app-footer></app-footer>
</body>
</template>

<script>
import AppFooter from "./components/core/Footer";
import AppNavigation from "./components/core/Navigation";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
.loadingRing {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fadeOut-enter-active,
.fadeOut-leave-active {
  transition: opacity 0.5s;
}
.fadeOut-leave, .fadeOut-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
