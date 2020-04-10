<script>
import firebase from "firebase";

export default {
  data() {
    return {
      IsPageLoading: true,
      myCauses: null
    };
  },
  methods: {
    LoadUserInfo() {
      let userId = this.$store.getters.User.uid;
      firebase
        .database()
        .ref()
        .child("UserInfos")
        .child(userId)
        .once("value")
        .then(response => {
          if (response == null) {
            this.$router.push({ name: "welcome" });
          }
          this.$store.commit("changeUserInfoState", response.val());
          this.IsPageLoading = false;
        });
    },
    LoadUserCauses() {
      let userEmail = this.$store.getters.User.email;
      firebase
        .database()
        .ref()
        .child("causes")
        .once("value")
        .then(snapshot => {
          let causes = [];
          for (const key in snapshot.val()) {
            if (snapshot.val()[key].creatorEmail === userEmail) {
              causes.push(Object.assign({}, snapshot.val()[key], { id: key }));
            }
          }
          this.myCauses = causes;
        });
    },
    EditUserInfo(NewUserInfoObj) {
      firebase
        .database()
        .ref()
        .child("UserInfos")
        .child(this.$store.getters.User.uid)
        .set(NewUserInfoObj)
        .then(() => {
          this.$router.push({ name: "profile" });
        });
    }
  }
};
</script>