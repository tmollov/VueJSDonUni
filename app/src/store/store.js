import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: null,
    UserInfo:null
  },
  mutations: {
    changeUserState(state, User) {
      state.User = User;
    },
    changeUserInfoState(state, UserInfo) {
      state.UserInfo = UserInfo;
    }
  },
  getters: {
    User: state => state.User,
    UserInfo: state=> state.UserInfo
  },
  plugins: [
    createPersistedState({
      paths: ["User","UserInfo"]
    })
  ]
});
