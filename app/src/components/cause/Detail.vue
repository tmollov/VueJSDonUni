<template>
  <div>
    <transition name="fadeOut">
      <app-loader v-if="loading" class="loadingRing"></app-loader>
    </transition>

    <transition name="fadeIn">
      <div v-if="!loading" class="container detailDiv mb-5">
        <div class="row">
          <div class="modal-content col-lg-12">
            <!-- <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title" id="myModalLabel">Make a donation</h4>
            </div>-->
            <div class="modal-body">
              <center>
                <img
                  style="border-radius: 5px;"
                  :src="getImage"
                  name="aboutme"
                  width="500"
                  height="auto"
                  border="0"
                  class="img-circle"
                />
                <h3 class="media-heading">{{cause.title}}</h3>
                <span>Collected</span>
                <strong class="label text-success">{{cause.neededFund}}</strong>
                <span>from</span>
                <strong class="label text-info">{{cause.collectedFund}}</strong>
              </center>
              <hr />
              <center>
                <p style="word-wrap: break-word;" class="text-left">
                  <strong>Description:</strong>
                  <br />
                  {{cause.description}}
                </p>
                <br />
                <p style="word-wrap: break-word;" class="text-left">
                  <strong>Donors:</strong>
                  <br />
                  <span>Donor 1</span>
                  <span>Donor 2</span>
                  <span>Donor 3</span>
                  <span>Donor 4</span>
                </p>
              </center>
            </div>
            <div class="modal-footer">
              <a
                v-if="$store.getters.User"
                href="#deletecause"
                class="btn btn-danger"
                @click="deleteCause()"
              >Close the cause</a>
              <form v-if="!$store.getters.User">
                <label for="currentDonation" class="grey-text font-weight-light">My donation:</label>
                <input id="currentDonation" type="number" min="1" class="form-control" />
                <button class="btn btn-success w-100" type="submit">Make the donation</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "app-cause-detail",
  data() {
    return {
      cause: {},
      loading: true
    };
  },
  computed: {
    getNeeded() {
      return `$${this.cause?.neededFund.toFixed(2)}`;
    },
    getCollected() {
      return `$${this.cause?.collectedFund.toFixed(2)}`;
    },
    getImage() {
      return this.cause?.image;
    }
  },
  methods:{
    deleteCause(){
      firebase
      .database()
      .ref()
      .child("causes")
      .child(this.$route.params.id)
      .remove()
      .then((res) => {
        console.log(res);
        this.$router.push({name:"home"});
      });
    }
  },
  mounted() {
    firebase
      .database()
      .ref()
      .child("causes")
      .child(this.$route.params.id)
      .once("value")
      .then((snapshot) => {
        this.cause = snapshot.val();
        console.log(snapshot.val());
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.detailDiv {
  margin-bottom: 2%;
  margin-top: 5%;
}

.loadingRing {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fadeOut-enter-active,
.fadeOut-leave-active {
  transition: opacity 0.5s;
}
.fadeOut-leave, .fadeOut-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>