<script>
import firebase from "firebase";
import ToasterConfigMixin from "./ToasterConfigMixin";

export default {
  mixins: [ToasterConfigMixin],
  data() {
    return {
      email: "",
      password: "",
      cpass: "",
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          res => {
            this.toastSuccess("Login successful!");
            this.$store.commit("changeUserState", res.user);
            this.loading = false;
            this.$router.push(this.$Routes.Home);
          },
          err => {                        
            this.toastError(err.message);
            this.loading = false;
          }
        )
    },
    register() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.toastSuccess("Register successful!");
            this.$store.commit("changeUserState", user);
            this.loading = false;
            this.$router.push(this.$Routes.Home);
          },
          err => {
            this.loading = false;
            this.toastError(err.message);
          }
        );
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("changeUserState", null);
          this.$store.commit("changeUserInfoState", null);
          if (this.$router.currentRoute.name !== "home") {
            this.$router.push(this.$Routes.Home);
          }

          this.toastInfo("Logged out!");
        })
        .catch(err => {
          this.toastError(err.message);
        });
    }
  }
};
</script>