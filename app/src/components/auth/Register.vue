<template>
  <div class="modal-content col-lg-4 registerDiv">
    <div class="card-body">
      <form method action>
        <p class="h4 py-4">Register</p>
        <hr />
        <label for="username" class="grey-text font-weight-light font-weight-bold">Username</label>
        <input type="text" id="username" class="form-control" />
        <br />

        <label for="password" class="grey-text font-weight-light font-weight-bold">Password</label>
        <input type="password" id="password" class="form-control" />
        <br />

        <label for="cPass" class="grey-text font-weight-light font-weight-bold">Confirm Password</label>
        <input id="cPass" class="form-control" type="password"/>

        <div class="text-center py-4 mt-3">
          <button class="btn btn-info" type="submit">Register</button>
          <!-- <p>Have an account? <router-link to="/login">Login</router-link></p> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-register"
};
</script>

<style scoped>
.registerDiv {
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 7%;
}
</style>