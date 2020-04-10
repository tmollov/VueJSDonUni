<template>
  <div class="container mb-lg-5">
    <h1 class="text-center border-bottom border-dark">My Causes</h1>
    <div class="mt-2 row mx-auto">

      <div class="text-center w-100 mt-5" v-if="!IsThereCause">
        <h5 >You dont have a cause yet.</h5>
      </div>

      <figure class="imghvr-shutter-out-diag-1" v-for="(cause,index) in Causes" :key="index">
        <img :src="cause.image" />
        <figcaption>
          {{cause.title}}
          <router-link :to="{ name: 'causeDetail', params: { id: cause.id }}"></router-link>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-my-causes",
  props: { Causes: Array },
  computed:{
    IsThereCause(){
      return this.Causes.length > 0;
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