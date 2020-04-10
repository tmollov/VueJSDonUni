<template>
  <!-- <transition name="fadeIn"> -->
    <div class="centerDiv" v-if="clicked">
      <h3>Do you really want to delete this cause?</h3>
      <div class="row">
        <button
          v-if="!IsDeleteConfirmed"
          class="btn btn-light mx-auto col-5"
          @click="toggleDelete()"
        >Yes, delete it.</button>
        <button v-if="IsDeleteConfirmed" class="btn btn-light mx-auto col-5">
          <AppLoader />
        </button>
        <button @click="toggleConfirm()" class="btn btn-danger mx-auto col-5">No, it's important.</button>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
import AppLoader from "../../core/PureRingLoader";

export default {
  name: "app-cause-confirm-delete",
  components: { AppLoader },
  data() {
    return {
      IsDeleteConfirmed: false,
      clicked: false
    };
  },
  props: {
    isClicked: Boolean
  },
  watch: {
    isClicked() {
      this.clicked = this.isClicked;
    }
  },
  methods: {
    toggleDelete() {
      this.IsDeleteConfirmed = true;
      this.$emit("confirm", this.clicked);
    },
    toggleConfirm() {
      this.clicked = false;
      this.$emit("toggleClicked", false);
    }
  }
};
</script>

<style scoped>
.centerDiv {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>