import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";
import store from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDonate,
  faPencilAlt,
  faSearchDollar,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

library.add(faDonate);
library.add(faPencilAlt);
library.add(faSearchDollar);
library.add(faBriefcase);

Vue.component("font-awesome-icon", FontAwesomeIcon);

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
