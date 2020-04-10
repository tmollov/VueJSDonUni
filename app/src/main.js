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
  faBriefcase,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import Vuelidate from "vuelidate";
import AppLoader from "./components/core/PureRingLoader";
import { NamedRoutes } from "./namedRoutes";

library.add(faDonate);
library.add(faPencilAlt);
library.add(faSearchDollar);
library.add(faBriefcase);
library.add(faExclamationTriangle)

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);

firebase.initializeApp(firebaseConfig);

const router = new VueRouter({
  mode: "history",
  routes
});


Vue.component("app-loader", AppLoader);
Vue.prototype.$Routes = NamedRoutes;

new Vue({
  render: h => h(App),
  router,
  store,
  firebase
}).$mount("#app");

