<template>
  <div class="modal-content col-lg-6 mx-auto mt-lg-5">
    <div class="modal-header info-color white-text">
      <h4 class="title">
        <font-awesome-icon icon="search-dollar" />You are looking for a donation?
      </h4>
    </div>
    <div class="modal-body">
      <form>
        <label for="causeName">Your cause</label>
        <input
          type="text"
          id="causeName"
          class="form-control form-control-sm"
          placeholder="Cause title..."
          v-model="title"
        />
        <br />
        <label for="pictureUrl">Your cause picture...</label>
        <input
          type="text"
          id="pictureUrl"
          class="form-control form-control-sm"
          placeholder="https://..."
          v-model="image"
        />
        <br />
        <label for="neededFunds">Your needed funds...</label>
        <input
          type="text"
          id="neededFunds"
          class="form-control form-control-sm"
          placeholder="2400.00"
          v-model="neededFund"
        />
        <br />
        <label for="causeDescription">Your cause description...</label>
        <textarea
          type="text"
          id="causeDescription"
          class="md-textarea form-control"
          placeholder="I'm looking for funds because..."
          v-model="description"
        ></textarea>
        <div class="text-center mt-4 mb-2">
          <button @click.prevent="sendData()" class="btn btn-info">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import { Cause } from "../../models/Cause";

export default {
  name: "app-cause-create",
  data() {
    return {
      title: "",
      image: "",
      description: "",
      neededFund: 0
    };
  },
  methods: {
    sendData() {
      let id = uuidv4();
      let newCause = new Cause(
        this.title,
        this.description,
        this.image,
        this.neededFund,
        this.$store.getters.User.email
      );
      console.log(newCause);

      firebase
        .database()
        .ref()
        .child("causes")
        .child(id)
        .set(newCause)
        .then((res)=>{
          console.log(res);
          this.$router.push("/")
        });
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

textarea {
  resize: none;
  height: 150px;
}
</style>