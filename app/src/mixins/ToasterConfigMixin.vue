<script>
export default {
  data() {
    return {
      toastType: {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
        default: "default"
      },
      toastDuration: {
        oneSec: 1000,
        twoSec: 2000,
        threeSec: 3000,
        fiveSec: 5000,
        tenSec: 10000
      },
      toastPosition: {
        bottom: "bottom",
        bottomRight: "bottom-right",
        bottomLeft: "bottom-left",
        top: "top",
        topRight: "top-right",
        topLeft: "top-left"
      },
      toastDismissible: {
        On: true,
        Off: false
      },
      toastQueue: {
        On: true,
        Off: false
      }
    };
  },
  methods: {
    toastError(message) {
      this.$toast.open({
        message: message,
        type: this.toastType.error,
        dismissible: this.toastDismissible.On,
        duration: this.toastDuration.fiveSec
      });
    },
    toastSuccess(message) {
      this.$toast.open({
        message: message,
        type: this.toastType.success,
        dismissible: this.toastDismissible.On,
        duration: this.toastDuration.threeSec
      });
    },
    toastInfo(message) {
      this.$toast.open({
        message: message,
        type: this.toastType.info,
        dismissible: this.toastDismissible.On,
        duration: this.toastDuration.threeSec
      });
    },
    toastWarn(message) {
      this.$toast.open({
        message: message,
        type: this.toastType.warning,
        dismissible: this.toastDismissible.On,
        duration: this.toastDuration.threeSec
      });
    }
  }
};
</script>