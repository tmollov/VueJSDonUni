<template>
  <div class="container dashboardDiv">
    <!-- <h1 class="text-center">NO CAUSES :(</h1> -->
    <div style="margin-bottom:25%;" class="row">
      <div class="col-lg-12">
        <div class="card mt-4 borderRadius">
          <img
            class="card-img-top img-fluid borderRadius"
            src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
            alt
          />
          <div class="card-body">
            <h3 class="card-title">CAUSE Title</h3>
            <p class="card-text">CAUSE DESCRIPTION</p>
            <router-link to="/cause/detail" href class="btn btn-success">
              Become a donor
              <font-awesome-icon icon="donate" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-home-dashboard"
};
</script>

<style scoped>
.dashboardDiv {
  margin-top: 3%;
  padding-top: 3%;
}

.borderRadius {
  border-radius: 25px;
}

img {
  max-width: 1200px;
  height: auto;
  border-bottom-left-radius: none !important;
}
</style>