import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    IsUserLogged: false
  },
  mutations: {
    logUser(state, IsUserLogged) {
      state.IsUserLogged = IsUserLogged;
    }
  },
  getters: {
    IsUserLogged: state => state.IsUserLogged
  }
});
