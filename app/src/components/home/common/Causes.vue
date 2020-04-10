<template>
  <div class="row">
    <div
      class="col-lg-5 p-0 d-flex flex-column justify-content-between my-3 mx-auto borderRadius border border-secondary"
      v-for="(cause, index) in causes"
      :key="index"
    >
      <div class="imageDiv mx-auto m-2">
        <img :src="cause.image" alt="Image">
      </div>
      <div class="card-body d-flex flex-column">
        <h3 class="card-title text-center">{{cause.title}}</h3>
        <router-link :to="{ name: 'causeDetail', params: { id: index }}" class="btn btn-success">
          Become a donor
          <font-awesome-icon icon="donate" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-common-cause",
  props: {
    causes: Object
  },
  methods: {}
};
</script>

<style scoped>
.borderRadius {
  border-radius: 25px;
}

.card-title {
  font-size: 1em;
}

.imageDiv img {
  display: block;
  max-width:400px;
  height:200px;
  width: auto;
}
</style>