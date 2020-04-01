<template>
  <div class="container mainDiv">
    <div class="row align-items-center my-5">
      <div class="col-lg-12">
        <font-awesome-icon icon="briefcase" />
      </div>
      <div class="col-lg-12 supportDiv">
        <h1 class="font-weight-light">Does your business need support?</h1>
        <p>
          <router-link class="badge badge-primary" to="/register">Register now</router-link> to create your cause and seek for donors!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-home-guest"
};
</script>

<style scoped>
.mainDiv {
  margin-top: 3%;
  padding-top: 3%;
}

svg {
  margin: 0 auto;
  display: block;
  font-size: 200px;
  color: #343A40;

}

.supportDiv {
  text-align: center;
  margin-top: 5%;
}
</style> 