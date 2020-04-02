<template>
  <div class="container dashboardDiv">
    <transition name="fadeOut">
      <app-loader v-if="isLoading" class="loadingRing"></app-loader>
    </transition>

    <transition name="fadeIn">
      <div class="row causeDiv" v-if="!isLoading">
        <div class="col-lg-10 mx-auto">
          <app-no-causes v-if="causes.length == 0"></app-no-causes>

          <template v-else>
            <AppCauses :causes="causes"></AppCauses>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppNoCauses from "../cause/NoCauses";
import AppCauses from "./common/Causes";

export default {
  name: "app-home-dashboard",
  components: {
    AppNoCauses,
    AppCauses
  },
  props: {
    causes: Object
  },
  computed: {
    isLoading() {
      if (this.causes != null) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.dashboardDiv {
  margin-top: 3%;
  padding-top: 3%;
}

.causeDiv {
  margin-bottom: 25%;
}

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