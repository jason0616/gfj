import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: "",
    token: localStorage.getItem("token") || "",
    num: 0,
    network: true,
    login: false
  },
  mutations: {
    getCode(state, val) {
      state.code = val;
    },
    getToken(state, val) {
      state.token = val;
    },

    loginSuccess(state, val) {
      state.login = val;
    },
    changeNetwork(state, val) {
      state.network = val;
    }
  },
  actions: {}
});
