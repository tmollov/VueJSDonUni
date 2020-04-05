<template>
  <div>
    <transition name="fadeOut">
      <app-loader v-if="loading" class="loadingRing"></app-loader>
    </transition>
    <transition name="fadeIn">
      <div v-if="!loading" class="container mb-5">
        <div class="mt-5 row">
          <div class="col-4">
            <img class="col" :src="uInfo.profileImage" alt />
          </div>
          <div class="col-8">
            <h1>{{uInfo.firstName}} {{uInfo.lastName}}</h1>
            <h2>{{uInfo.about}}</h2>
            <h4>{{uInfo.phone}}</h4>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fadeIn">
      <div v-if="!loading" class="container mb-5">
        <h1 class="text-center border-bottom border-dark">My Causes</h1>
        <div class="mt-5 row mx-auto">
          <figure class="imghvr-shutter-out-diag-1" v-for="(cause,index) in myCauses" :key="index">
            <img v-if="$store.getters.User.email === cause.creatorEmail" :src="cause.image" />
            <figcaption>
              {{cause.title}}
              <router-link
                v-if="$store.getters.User.email === cause.creatorEmail"
                :to="{ name: 'causeDetail', params: { id: index }}"
              ></router-link>
            </figcaption>
          </figure>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "app-profile",
  data() {
    return {
      loading: true,
      uInfo: null,
      myCauses: null
    };
  },
  methods: {
    getUrl(url) {
      return `url("${url}")`;
    },
    isUsersCause(email) {
      return this.$store.getters.User.email == email;
    }
  },
  created() {
    firebase
      .database()
      .ref()
      .child("UserInfos")
      .child("tmollov")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        this.uInfo = snapshot.val();
        this.loading = false;
      });

    firebase
      .database()
      .ref()
      .child("causes")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());

        this.myCauses = snapshot.val();
      });
  }
};
</script>

<style scoped>
.imghvr-shutter-out-diag-1 img {
  width: 200px;
  height: 200px;
  margin: 10px;
}

a {
  width: 150px;
  word-wrap: break-word;
}

.causeImage:hover {
  cursor: pointer;
  filter: blur(5px);
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