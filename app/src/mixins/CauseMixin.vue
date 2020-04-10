<script>
import firebase from "firebase";

export default {
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
    PushCause(NewCause, id) {
      firebase
        .database()
        .ref()
        .child("causes")
        .child(id)
        .set(NewCause)
        .then(() => {
          this.$router.push({ name: "causeDetail", params: { id: id } });
        });
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
      this.GetCause(this.$route.params.id).then(res => {
        this.cause = res.val();
        this.IsPageLoading = false;
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
        .then(() => {
          this.IsDeleteConfirmed = false;
          this.$router.push({ name: "home" });
        });
    },
    DonateCause() {
      this.IsPageLoading = true;
      if (this.cause.donors == undefined) {
        this.cause.donors = {};
      }
      if (this.cause.donors[this.$store.getters.User.uid]) {
        debugger
        this.cause.donors[this.$store.getters.User.uid] =
          Number(this.cause.donors[this.$store.getters.User.uid]) +
          Number(this.myDonation);
      } else {
        this.cause.donors[this.$store.getters.User.uid] =  Number(this.myDonation);
      }

      this.cause.collectedFund =
        Number(this.cause.collectedFund) + Number(this.myDonation);
      this.myDonation = 1;
      firebase
        .database()
        .ref()
        .child("causes")
        .child(this.$route.params.id)
        .set(this.cause)
        .then(() => {
          this.IsPageLoading = false;
        });
    }
  }
};
</script>