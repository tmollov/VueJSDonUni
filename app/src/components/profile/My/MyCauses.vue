<template>
  <div class="container mb-lg-5">
    <h1 class="text-center border-bottom border-dark">My Causes</h1>
    <div class="mt-2 row mx-auto">
      <template v-if="IsThereCauses">
        <figure class="imghvr-shutter-out-diag-1" v-for="(cause,index) in Causes" :key="index">
          <img :src="cause.image" />
          <figcaption>
            {{cause.title}}
            <router-link :to="LinkToDetails(cause.id)"></router-link>
          </figcaption>
        </figure>
      </template>

      <div v-else class="text-center w-100 mt-5" >
        <h5>You do not have any causes yet.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-my-causes",
  data() {
    return {
      IsThereCauses: true
    };
  },
  props: { Causes: Array },
  watch: {
    Causes(newVal, oldVal) {
      if (newVal.length == 0) {
        this.IsThereCauses = false;
      } else {
        this.IsThereCauses = true;
      }
    }
  },
  methods: {
    LinkToDetails(id) {
      return { name: "causeDetail", params: { id: id } };
    }
  }
};
</script>

<style scoped>
.imghvr-shutter-out-diag-1 img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
</style>