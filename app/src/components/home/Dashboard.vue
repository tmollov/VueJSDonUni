<template>
  <div class="container dashboardDiv">
    <app-loader v-if="isLoading" class="loadingRing"></app-loader>

    <transition name="fadeIn">
      <div class="row causeDiv" v-if="!isLoading">
        <div class="mx-auto">
          <app-no-causes v-if="noCauses"></app-no-causes>

          <template v-else>
            <AppCauses :causes="causes"></AppCauses>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AppNoCauses from "./common/NoCauses";
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
    },
    noCauses() {
      return this.causes.length == 0;
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
</style>