<template>
  <div>
    <div class="card mt-2 borderRadius" v-for="(cause, index) in causes" :key="index">
      <img class="card-img-top img-fluid borderRadius" :src="cause.image" />
      <!-- <img class="card-img-top img-fluid borderRadius" :src="cause.image" /> -->
      <!-- <font-awesome-icon class="defImage" icon="briefcase" /> -->
      <div class="card-body border-top">
        <h3 class="card-title">{{cause.title}}</h3>
        <p class="card-text">{{cause.description}}</p>
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
  methods: {
  }
};
</script>

<style scoped>
.borderRadius {
  border-radius: 25px;
}

.card-title {
  font-size: 1em;
}

img {
  max-width: 1200px;
  border: 0px solid;
  height: auto;
  border-bottom-left-radius: none !important;
}

.defImage {
  margin: 0 auto;
  display: block;
  font-size: 200px;
  color: #343a40;
}
</style>