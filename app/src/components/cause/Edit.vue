<template>
  <div class="modal-content col-lg-6 mx-auto mt-lg-5 mb-lg-5">
    <div class="modal-header info-color white-text">
      <h4 class="title mx-auto">Edit Cause</h4>
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
          @blur="$v.title.$touch"
        />
        <template v-if="$v.title.$error">
          <div class="error text-danger" v-if="!$v.title.required">Title is required!</div>
          <div
            class="error text-danger"
            v-if="!$v.title.alpha"
          >Only alphabetical characters are allowed!</div>
          <div class="error text-danger" v-else-if="!$v.title.minLength">Title is too short!</div>
        </template>
        <br />
        <label for="pictureUrl">Your cause picture...</label>
        <input
          type="text"
          id="pictureUrl"
          class="form-control form-control-sm"
          placeholder="https://..."
          v-model="image"
          @blur="$v.image.$touch"
        />
        <template v-if="$v.image.$error">
          <div class="error text-danger" v-if="!$v.image.required">Picture URL is required!</div>
        </template>
        <div class="text-center">
          <p>Image preview:</p>
          <img :src="image" />
        </div>
        <br />
        <label for="neededFunds">Your needed funds...</label>
        <input
          type="number"
          min="1"
          id="neededFunds"
          class="form-control form-control-sm"
          v-model="neededFund"
          @blur="$v.neededFund.$touch"
        />
        <template v-if="$v.neededFund.$error">
          <div class="error text-danger" v-if="!$v.neededFund.required">Needed fund is required!</div>
          <div class="error text-danger" v-if="!$v.neededFund.minValue">Minimum fund is 1$</div>
        </template>
        <br />
        <label for="causeDescription">Your cause description...</label>
        <vue-editor
          id="causeDescription"
          v-model="description"
          :placeholder="aboutPlaceholder"
          :editorToolbar="customToolbar"
          @blur="$v.description.$touch"
        ></vue-editor>
        <template v-if="$v.description.$error">
          <div
            class="error text-danger"
            v-if="!$v.description.required"
          >Description cannot be empty!</div>
          <div
            class="error text-danger"
            v-if="!$v.description.minLength"
          >Description must be at least 10 charachters!</div>
        </template>
        <div class="text-center mt-4 mb-2">
          <button
            :disabled="$v.$invalid"
            @click.prevent="sendData()"
            class="btn btn-info btn-block w-20"
          >Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Cause } from "../../models/Cause";
import { VueEditor } from "vue2-editor";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  helpers,
  minValue
} from "vuelidate/lib/validators";
import CauseMixin from "../../mixins/CauseMixin.vue";
const alpha = helpers.regex("alpha", /^[ a-zA-Z]*$/);

export default {
  name: "app-cause-edit",
  mixins: [validationMixin, CauseMixin],
  validations: {
    title: {
      required,
      minLength: minLength(15),
      maxLength: maxLength(100),
      alpha
    },
    description: {
      required
    },
    image: {
      required
    },
    neededFund: {
      required,
      minValue: minValue(1)
    }
  },
  components: {
    VueEditor
  },
  data() {
    return {
      aboutPlaceholder: "I'm looking for funds because...",
      title: "",
      image: "",
      description: "",
      neededFund: "",
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
        ["link"]
      ]
    };
  },
  methods: {
    sendData() {
      let newCause = new Cause(
        this.title,
        this.description,
        this.image,
        Number(this.neededFund),
        this.$store.getters.User.email
      );
      this.PushCause(newCause, this.$route.params.id, true);
    }
  },
  mounted() {
    this.GetCause(this.$route.params.id).then(response => {
      let cause = response.val();

      [this.title, this.image, this.description, this.neededFund] = [
        cause.title,
        cause.image,
        cause.description,
        cause.neededFund
      ];
      this.IsPageLoading = false;
    });
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

img {
  max-width: 300px;
}
</style>