<script>
import firebase from "firebase"
export default {
  data() {
    return {
      causes: null
    };
  },
  methods: {
    LoadCauses() {
      firebase
        .database()
        .ref()
        .child("causes")
        .once("value")
        .then(response => {
          if (response.val() == null) {
            this.causes = [];
            return;
          }
          this.causes = response.val();
        });
    }
  }
};
</script>