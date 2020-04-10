<template>
  <div>
    <div class="modal-content col-lg-6 mx-auto mt-5 mb-5">
      <div class="card-body">
        <form>
          <p class="h2 py-4 text-center">Edit</p>
          <!-- Names -->
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
          <!-- Photo -->
          <div class="row">
            <label for="pictureUrl" class="font-weight-bold">Image URL</label>
            <input
              type="text"
              id="pictureUrl"
              class="form-control form-control-sm"
              placeholder="https://..."
              v-model="profileImage"
            />
            <div class="mx-auto">
              <p class="text-center p-0 m-0">Image preview:</p>​
              <img :src="profileImage" class="d-block" alt="No image!" />
            </div>
          </div>
          <hr />
          <!-- About -->
          <div>
            <label for="about" class="grey-text font-weight-light w-100 text-left font-weight-bold">
              <span>More about you</span>
            </label>
            <vue-editor id="about" v-model="about" :editorToolbar="customToolbar"></vue-editor>
            <br />
          </div>
          <!-- Phone number -->
          <div>
            <label for="phone" class="grey-text font-weight-light w-100 text-left font-weight-bold">
              <span>Your phone number</span>
            </label>
            <VuePhoneNumberInput
              default-country-code="BG"
              name="phone"
              v-model="phoneNumber"
              @update="updateData"
            />
            <br />
          </div>
          <div class="row">
            <button @click.prevent="uploadData()" class="btn btn-info mx-auto col-6">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import ProfileMixin from "../../mixins/ProfileMixin";
import { helpers } from "vuelidate/lib/validators";
import { VueEditor } from "vue2-editor";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { UserInfo } from "../../models/UserInfo";

const alpha = helpers.regex("alpha", /^[ a-zA-Z]*$/);
export default {
  name: "app-welcome",
  mixins: [validationMixin, ProfileMixin],
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
      uInfo: null,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      profileImage: "",
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
    uploadData() {
      let newData = new UserInfo(
        this.firstName,
        this.lastName,
        this.phoneObj.value,
        this.profileImage,
        this.about,
        this.$store.getters.User.email
      );
      this.EditUserInfo(newData);
    }
  },
  created() {
    this.uInfo = this.$store.getters.UserInfo;
    this.isLoading = false;
    let u = this.uInfo;
    this.firstName = u.firstName;
    this.lastName = u.lastName;
    this.about = u.about;
    this.profileImage = u.profileImage;
    u = u.phone.split(" ");
    u.shift();
    u = u.join("");
    this.phoneNumber = u;
  }
};
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>