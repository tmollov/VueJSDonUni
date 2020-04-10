<template>
  <div>
    <template v-if="IsPageLoading">
      <app-loader class="loadingRing"></app-loader>
    </template>

    <transition name="fadeIn">
      <MyInfo v-if="!IsPageLoading" :UserInfo="UserInfo" />
    </transition>

    <transition name="fadeIn">
      <MyCauses v-if="!IsPageLoading" :Causes="myCauses" />
    </transition>
  </div>
</template>

<script>
import ProfileMixin from "../../mixins/ProfileMixin";
import MyCauses from "./My/MyCauses";
import MyInfo from "./My/MyInfo";

export default {
  name: "app-profile",
  mixins: [ProfileMixin],
  components: { MyCauses, MyInfo },
  computed: {
    UserInfo() {
      return this.$store.getters.UserInfo;
    }
  },
  created() {
    this.LoadUserInfo();
    this.LoadUserCauses();
  }
};
</script>

<style scoped>
a {
  width: 150px;
  word-wrap: break-word;
}
</style>