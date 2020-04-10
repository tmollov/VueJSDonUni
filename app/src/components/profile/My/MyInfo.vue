<template>
  <div class="container mb-2">
    <div class="mt-5 row InfoDiv">
      <div class="col-4">
        <img class="col" :src="getProfileImage" />
      </div>
      <div class="col-8">
        <h1>{{FirstName}} {{LastName}}</h1>
        <div v-html="About"></div>
        <p>{{PhoneNumber}}</p>
      </div>
      <router-link
        class="w-100 btn btn-primary my-2 editProfileLink"
        :to="{name:'profileEdit'}"
      >Edit profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-my-info",
  props: { UserInfo: Object },
  computed: {
    getProfileImage() {
      if (this.UserInfo == undefined) {
        return "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
      }
      return this.UserInfo.profileImage;
    },
    FirstName() {
      if (this.UserInfo == null) {
        return this.$store.getters.User.email;
      }
      return this.UserInfo.firstName;
    },
    LastName() {
      if (this.UserInfo == null) {
        return "";
      }
      return this.UserInfo.lastName;
    },
    About() {
      if (this.UserInfo == null) {
        return "";
      }
      return this.UserInfo.about;
    },
    PhoneNumber(){
      if (this.UserInfo == null) {
        return "";
      }
      return this.UserInfo.phone;
    }
  }
};
</script>

<style scoped>
.editProfileLink {
  opacity: 0;
  transition: opacity 0.7s;
}

.InfoDiv:hover .editProfileLink {
  opacity: 1;
}
</style>