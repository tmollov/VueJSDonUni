<script>
import firebase from "firebase"
export default {
  data() {
    return {
      email: "",
      password: "",
      cpass: "",
      loading: false,
      loginErrorMsg:''
    };
  },
  methods: {
    login() {
      this.loading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.$store.commit("changeUserState", res.user);
          this.loading = false;
          this.$router.push(this.$Routes.Home);
        })
        .catch(err => {
          console.log(err);
          this.loginErrorMsg = err.message;
          this.loading = false;
        });
    },
    register() {
      this.loading = true;
      if (this.password !== this.cpass) {
        this.errors = "Passwords doesn't match";
        return;
      }
      this.errors = "";
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);

            this.$store.commit("changeUserState", user);
            this.loading = false;
            this.$router.push(this.$Routes.Home);
          },
          err => {
            this.loginErrorMsg = err.message;
            this.loading = false;
          }
        );
    }
  }
};
</script>