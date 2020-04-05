<template>
  <div class="my-5 row">
    <div class="mx-auto text-center my-5">
      <font-awesome-icon icon="exclamation-triangle" />
      <h1 class="mt-4 mb-5">Something went wrong!</h1>
      <h4>
        Back to
        <router-link :to="{name:'home'}">Home</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-not-found"
};
</script>

<style scoped>
svg {
  font-size: 200px;
}
</style>