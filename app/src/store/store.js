import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IsUserLogged: false,
    UserEmail:""
  },
  mutations: {
    changeLogState(state, IsUserLogged) {
      state.IsUserLogged = IsUserLogged;
    },
    changeEmailState(state, UserEmail) {
      state.UserEmail = UserEmail;
    }
  },
  getters: {
    IsUserLogged: state => state.IsUserLogged,
    UserEmail: state => state.UserEmail
  },
  plugins:[createPersistedState({
    paths: ['IsUserLogged', "UserEmail"]
  })]
});
