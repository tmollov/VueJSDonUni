<template>
  <div class="modal-content col-lg-4 registerDiv">
    <div class="card-body">
      <form method action>
        <p class="h4 py-4">Register</p>
        <hr />
        <label for="email" class="grey-text font-weight-light font-weight-bold">Email</label>
        <input
          type="text"
          id="email"
          class="form-control"
          :class="{redBorder:$v.email.$error}"
          v-model.trim="email"
          @blur="$v.email.$touch"
        />
        <template v-if="$v.email.$error">
          <div class="error text-danger" v-if="!$v.email.required">Email cannot be empty!</div>
          <div class="error text-danger" v-if="!$v.email.email">Invalid Email!</div>
        </template>

        <br />

        <label for="password" class="grey-text font-weight-light font-weight-bold">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{redBorder:$v.password.$error}"
          v-model.trim="password"
          maxlength="50"
          minlength="6"
          @blur="$v.password.$touch"
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
        <br />

        <label for="cPass" class="grey-text font-weight-light font-weight-bold">Confirm Password</label>
        <input
          id="cPass"
          class="form-control"
          :class="{redBorder:!$v.cpass.sameAsPassword}"
          type="password"
          v-model.trim="cpass"
          maxlength="50"
          minlength="6"
          @blur="$v.cpass.$touch"
        />
        <template v-if="$v.cpass.$error">
          <div class="error text-danger" v-if="!$v.cpass.sameAsPassword">Passwords does not match!</div>
        </template>
        <br />
        <div class="text-center py-4 mt-3">
          <button
            v-if="!loading"
            :disabled="$v.$invalid"
            class="btn btn-info"
            @click.prevent="register"
          >Register</button>
          <PureRingLoader v-if="loading" :width="20" :height="20" />
          <!-- <p>Have an account? <router-link to="/login">Login</router-link></p> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { validationMixin } from "vuelidate";
import PureRingLoader from "../core/PureRingLoader";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "app-register",
  components: {
    PureRingLoader
  },
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
    },
    cpass: {
      sameAsPassword: sameAs("password")
    }
  },
  data() {
    return {
      email: "",
      password: "",
      cpass: "",
      loading: false
    };
  },
  methods: {
    async register() {
      this.loading = true;
      if (this.password !== this.cpass) {
        this.errors = "Passwords doesn't match";
        return;
      }
      this.errors = "";
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            if (confirm("User registered! Click OK to redirect.")) {
              this.$store.commit("changeUserState", user);
              this.loading = false;
              this.$router.push("/");
            }
          },
          function(err) {
            alert("Oops. " + err.message);
            this.loading = false;
          }
        );
    }
  },
  computed: {
    isFormReady() {
      return (
        this.$v.cpass.$error && this.$v.password.$error && this.$v.email.$error
      );
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
.registerDiv {
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 7%;
}

.redBorder {
  border-color: red;
}
</style>