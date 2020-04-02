<template>
  <div class="modal-content col-lg-4 loginDiv">
    <div class="card-body">
      <form>
        <p class="h4 py-4">Login</p>
        <hr />
        <div v-if="loginErrorMsg">
          {{loginErrorMsg}}
        </div>
        <label
          for="email"
          class="grey-text font-weight-light w-100 text-left font-weight-bold"
        >Username</label>
        <input id="email" type="email" class="form-control" v-model="email" />

        <br />

        <label
          for="password"
          class="grey-text font-weight-light w-100 text-left font-weight-bold"
        >Password</label>
        <input id="password" type="password" class="form-control" v-model="password" />
        <div class="text-center py-4 mt-3">
          <button v-if="!loading" class="btn btn-info" @click.prevent="login">Log In</button>
          <app-loader-ring v-if="loading" :width="20" :height="20"></app-loader-ring>
          <p>
            Don't have an account?
            <router-link to="/register">Register now!</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import AppLoaderRing from "../core/PureRingLoader";

export default {
  name: "app-login",
  components: {
    AppLoaderRing
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      loginErrorMsg:""
    };
  },
  methods: {
    login() {
      this.loading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.$store.commit("changeUserState", user.user);
          this.loading = false;
          this.$router.push("/")
        })
        .catch(err => {
          console.log(err);
          this.loginErrorMsg = err.message;
          this.loading = false;
        });
    }
  },
  created() {
    if (this.$store.getters.User) {
      this.$router.push("/")
    }
  },
};
</script>

<style scoped>
.loginDiv {
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 7%;
}
</style>