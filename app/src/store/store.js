import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User:null
  },
  mutations: {
    changeUserState(state, User) {
      state.User = User;
    },
  },
  getters: {
    User: state => state.User
  },
  plugins:[createPersistedState({
    paths: [ "User"]
  })]
});
