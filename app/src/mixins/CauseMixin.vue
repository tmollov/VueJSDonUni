<script>
import firebase from "firebase";
import ToasterConfigMixin from "./ToasterConfigMixin.vue";

export default {
  mixins: [ToasterConfigMixin],
  data() {
    return {
      IsDeleteConfirmed: false,
      IsPageLoading: true,
      cause: {},
      neededFund: 0,
      collectedFund: 0,
      myDonation: 1
    };
  },
  methods: {
    PushCause(NewCause, id,isUpdate) {
      firebase
        .database()
        .ref()
        .child("causes")
        .child(id)
        .set(NewCause)
        .then(
          res => {
            this.$router.push({ name: "causeDetail", params: { id: id } });
            if (isUpdate) {
              this.toastInfo("Cause updated!");
              return;
            }
            this.toastInfo("Cause created!");
          },
          err => {
            this.toastError(err.message);
          }
        );
    },
    GetCause() {
      return firebase
        .database()
        .ref()
        .child("causes")
        .child(this.$route.params.id)
        .once("value");
    },
    LoadCause() {
      this.GetCause(this.$route.params.id)
        .then(
          res => {
            this.cause = res.val();
            this.IsPageLoading = false;
          },
          err => {
            console.log(err);

            this.toastError(err.message);
          }
        )
        .catch(err => {
          console.log(err);
        });
    },
    DeleteCause() {
      this.IsDeleteConfirmed = true;
      firebase
        .database()
        .ref()
        .child("causes")
        .child(this.$route.params.id)
        .remove()
        .then(
          res => {
            this.IsDeleteConfirmed = false;
            this.$router.push({ name: "home" });
            this.toastWarn("Cause deleted!");
          },
          err => {
            this.toastError(err.message);
          }
        );
    },
    DonateCause() {
      this.IsPageLoading = true;
      if (this.cause.donors == undefined) {
        this.cause.donors = {};
      }
      if (this.cause.donors[this.$store.getters.User.uid]) {
        this.cause.donors[this.$store.getters.User.uid] =
          Number(this.cause.donors[this.$store.getters.User.uid]) +
          Number(this.myDonation);
      } else {
        this.cause.donors[this.$store.getters.User.uid] = Number(
          this.myDonation
        );
      }

      this.cause.collectedFund =
        Number(this.cause.collectedFund) + Number(this.myDonation);
      let currDonation = this.myDonation;
      this.myDonation = 1;
      firebase
        .database()
        .ref()
        .child("causes")
        .child(this.$route.params.id)
        .set(this.cause)
        .then(
          res => {
            this.IsPageLoading = false;
            this.toastSuccess(`You donated ${currDonation} $`);
          },
          err => {
            this.toastError(err.message);
          }
        );
    }
  }
};
</script>