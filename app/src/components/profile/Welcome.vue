<template>
  <div class="modal-content col-lg-6 mx-auto mt-5 mb-5">
    <div class="card-body">
      <form>
        <p class="h2 py-4 text-center">Welcome</p>
        <p class="h6 text-center">Please fill in your details below.</p>
        <p class="h6 text-center">
          If you don't want to, you can
          <router-link :to="{name:'home'}" class="btn btn-primary p-0 px-1">skip this step.</router-link>
        </p>

        <hr />
        <div class="row">
          <div class="col">
            <label for="fName" class="grey-text font-weight-light text-left font-weight-bold">
              <span>First Name</span>
            </label>
            <input
              id="fName"
              type="text"
              class="form-control"
              placeholder="Your first name here..."
              v-model="firstName"
              @blur="$v.firstName.$touch"
            />
            <div class="error text-danger" v-if="!$v.firstName.alpha">Only alphabet is allowed.</div>
            <br />
          </div>
          <div class="col">
            <label for="lName" class="grey-text font-weight-light text-left font-weight-bold">
              <span>Last Name</span>
            </label>
            <input
              id="lName"
              type="text"
              class="form-control"
              placeholder="Your last name here..."
              v-model="lastName"
              @blur="$v.lastName.$touch"
            />
            <div class="error text-danger" v-if="!$v.lastName.alpha">Only alphabet is allowed.</div>
            <br />
          </div>
        </div>

        <label for="about" class="grey-text font-weight-light w-100 text-left font-weight-bold">
          <span>More about you</span>
        </label>
        <vue-editor id="about" v-model="about" :editorToolbar="customToolbar"></vue-editor>
        <br />

        <label for="phone" class="grey-text font-weight-light w-100 text-left font-weight-bold">
          <span>Your phone number</span>
        </label>
        <VuePhoneNumberInput name="phone" v-model="phoneNumber" @update="updateData" />
        <br />
        <div class="row">
          <button @click.prevent="logData()" class="btn btn-info">Save</button>
          <p>and continue...</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { helpers } from "vuelidate/lib/validators";
import { VueEditor } from "vue2-editor";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

const alpha = helpers.regex("alpha", /^[ a-zA-Z]*$/);
export default {
  name: "app-welcome",
  mixins: [validationMixin],
  validations: {
    firstName: {
      alpha
    },
    lastName: {
      alpha
    }
  },
  components: {
    VuePhoneNumberInput,
    VueEditor
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      phoneObj: { valid: false, value: "" },
      about: "",
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ]
      ]
    };
  },
  methods: {
    updateData(val) {
      this.phoneObj = {
        valid: val.valid,
        value: val.formatInternational
      };
    },
    logData() {
      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.phoneObj.value);
      console.log(this.about);
    }
  }
};
</script>

<style scoped>
</style>