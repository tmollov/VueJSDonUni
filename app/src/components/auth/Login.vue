<template>
  <div class="modal-content col-lg-4 loginDiv">
    <div class="card-body">
      <form>
        <p class="h4 py-4">Login</p>
        <hr />
        <div v-if="loginErrorMsg">{{loginErrorMsg}}</div>
        <label
          for="email"
          class="grey-text font-weight-light w-100 text-left font-weight-bold"
        >Email</label>
        <input
          id="email"
          type="email"
          class="form-control"
          :class="{redBorder:$v.email.$error}"
          v-model.trim="email"
          @blur="$v.email.$touch"
          placeholder="You email here..."
        />
        <template v-if="$v.email.$error">
          <div class="error text-danger" v-if="!$v.email.required">Email cannot be empty!</div>
          <div class="error text-danger" v-if="!$v.email.email">Invalid Email!</div>
        </template>
        <br />

        <label
          for="password"
          class="grey-text font-weight-light w-100 text-left font-weight-bold"
        >Password</label>
        <input
          id="password"
          :type="typePass"
          class="form-control"
          :class="{redBorder:$v.password.$error}"
          v-model.trim="password"
          maxlength="50"
          minlength="6"
          @blur="$v.password.$touch"
          placeholder="You password here..."
        />
        <template v-if="$v.password.$error">
          <div class="error text-danger" v-if="!$v.password.required">Password cannot be empty!</div>
          <div
            class="error text-danger"
            v-else-if="!$v.password.minLength"
          >Password must be least 6 charachter long.</div>
          <div
            class="error text-danger"
            v-else-if="!$v.password.maxLength"
          >Password should not raise 50 charachter long.</div>
        </template>
        <div class="text-center py-4 mt-3">
          <button :disabled="$v.$invalid" v-if="!loading" class="btn btn-info" @click.prevent="login">Log In</button>
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
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  name: "app-login",
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(50)
    }
  },
  components: {
    AppLoaderRing
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      loginErrorMsg: "",
      typePass: "password"
    };
  },
  methods: {
    login() {
      this.loading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          this.$store.commit("changeUserState", res.user);
          this.loading = false;
          this.$router.push({name:'home'});
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
      this.$router.push({name:'home'});
    }
  }
};
</script>

<style scoped>
.loginDiv {
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 7%;
}

.redBorder {
  border-color: red;
}
</style>