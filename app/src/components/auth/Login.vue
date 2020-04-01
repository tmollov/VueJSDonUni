<template>
  <div class="modal-content col-lg-4 loginDiv">
    <div class="card-body">
      <form >
        <p class="h4 py-4">Login</p>
        <hr />
        <label for="email" class="grey-text font-weight-light w-100 text-left font-weight-bold">Username</label>
        <input id="email" type="email" class="form-control" />

        <br />

        <label for="password" class="grey-text font-weight-light w-100 text-left font-weight-bold">Password</label>
        <input id="password" type="password" class="form-control" />

        <div class="text-center py-4 mt-3">
          <button class="btn btn-info" @click.prevent="login">Log In</button>
          <p>Don't have an account? <router-link to="/register">Register now!</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-login",
  methods:{
    login(){
      this.$store.commit("changeLogState",true);
      this.$router.push("/");
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
</style>