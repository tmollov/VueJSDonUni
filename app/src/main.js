import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import routes from "./routes";
import store from "./store/store"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDonate, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faDonate)
library.add(faPencilAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
