import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IsUserLogged: false
  },
  mutations: {
    changeLogState(state, IsUserLogged) {
      state.IsUserLogged = IsUserLogged;
    }
  },
  getters: {
    IsUserLogged: state => state.IsUserLogged
  },
  plugins:[createPersistedState({
    paths: ['IsUserLogged']
  })]
});
