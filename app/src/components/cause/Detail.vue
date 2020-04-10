<template>
  <div>
    <ConfirmDelete :isClicked="IsCloseClicked" v-on:confirm="DeleteCause" v-on:toggleClicked="toggleClose" />

    <template v-if="!IsCloseClicked">
      <app-loader v-if="IsPageLoading" class="loadingRing"></app-loader>

      <transition name="fadeIn">
        <div v-if="!IsPageLoading" class="container detailDiv mb-5">
          <div class="row">
            <div class="modal-content col-lg-8 mx-auto">
              <div class="modal-body">
                <center>
                  <img
                    style="border-radius: 5px;"
                    :src="cause.image"
                    name="aboutme"
                    width="500"
                    height="auto"
                    border="0"
                    class="img-circle"
                  />
                  <h3 class="media-heading">{{cause.title}}</h3>
                </center>
                <hr />
                <div>
                  <div style="word-wrap: break-word;">
                    <div class="ql-editor" v-html="cause.description"></div>
                  </div>
                </div>
              </div>
              <div class="row w-100 mx-auto">
                <div class="col-8">
                  <span>Collected </span>
                  <strong class="label">
                    <span class="text-success">{{collFund}}</span>
                    <span> of </span>
                    <span class="text-danger">{{cause.neededFund}} $</span>
                  </strong>
                </div>
                <div class="col-4">
                  <p style="word-wrap: break-word;">
                    <strong>{{donorsCount}} Donors</strong>
                    <br />
                  </p>
                </div>
              </div>
              <div class="modal-footer" v-if="$store.getters.User">
                <div v-if="$store.getters.User.email == cause.creatorEmail" class="row w-100">
                  <router-link class="btn btn-primary col-5" :to="{name:'causeEdit'}">Edit</router-link>
                  <span class="col"></span>
                  <a
                    href="#deletecause"
                    class="btn btn-danger col-5"
                    @click="toggleClose()"
                  >Close the cause</a>
                </div>

                <form v-if="$store.getters.User.email != cause.creatorEmail">
                  <p class="grey-text font-weight-light">Donate:</p>
                  <input
                    id="currentDonation"
                    type="number"
                    min="1"
                    class="form-control my-2"
                    v-model="myDonation"
                    :class="{'border-danger': isDonationWrong}"
                  />
                  <p v-if="isDonationWrong" class="text-danger">Minimum donation is 1$</p>
                  <button
                    :disabled="isDonationWrong"
                    class="btn btn-success w-100"
                    @click.prevent="DonateCause()"
                  >Make the donation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import AppLoader from "../core/PureRingLoader";
import ConfirmDelete from "./Detail/ConfirmDelete";
import CauseMixin from "../../mixins/CauseMixin";

export default {
  name: "app-cause-detail",
  mixins: [CauseMixin],
  components: { AppLoader, ConfirmDelete },
  data() {
    return {
      isDonationWrong: false,
      IsCloseClicked: false
    };
  },
  computed: {
    donorsCount() {
      if (this.cause.donors == undefined) {
        return 0;
      }
      return Object.keys(this.cause.donors).length;
    },
    collFund(){
      if (this.cause.donors == undefined) {
        return 0;
      }
      return Object.values(this.cause.donors).reduce((a,b)=> a+b);
    }
  },
  methods: {
    toggleClose() {
      this.IsCloseClicked = !this.IsCloseClicked;
    }
  },
  created() {
    this.LoadCause();
  }
};
</script>

<style scoped>
.detailDiv {
  margin-bottom: 2%;
  margin-top: 5%;
  z-index: 0;
}
</style>