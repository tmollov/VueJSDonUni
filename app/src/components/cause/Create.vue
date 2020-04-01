<template>
  <div class="modal-content col-lg-6 mx-auto mt-lg-5">
    <div class="modal-header info-color white-text">
      <h4 class="title">
        <font-awesome-icon icon="search-dollar" /> You are looking for a donation?
      </h4>
    </div>
    <div class="modal-body">
      <form >
        <label for="defaultFormNameModalEx">Your cause</label>
        <input
          name="cause"
          type="text"
          id="defaultFormNameModalEx"
          class="form-control form-control-sm"
          placeholder="Collage..."
        />
        <br />
        <label for="defaultFormEmailModalEx">Your cause picture...</label>
        <input
          name="pictureUrl"
          type="text"
          id="defaultFormEmailModalEx"
          class="form-control form-control-sm"
          placeholder="https://..."
        />
        <br />
        <label for="defaultFormSubjectModalEx">Your needed funds...</label>
        <input
          name="neededFunds"
          type="text"
          id="defaultFormSubjectModalEx"
          class="form-control form-control-sm"
          placeholder="2400.00"
        />
        <br />
        <label for="defaultFormMessageModalEx">Your cause description...</label>
        <textarea
          name="description"
          style="resize: none; height: 150px;"
          type="text"
          id="defaultFormMessageModalEx"
          class="md-textarea form-control"
          placeholder="I'm looking for funds because..."
        ></textarea>
        <div class="text-center mt-4 mb-2">
          <button @click.prevent="showlog()" class="btn btn-info">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-cause-create",
  methods:{
    showlog(){
      console.log(this.$store);
      
    }
  }
};
</script>

<style scoped>
.createDiv {
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 7%;
}
</style>