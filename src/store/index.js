import { createStore } from "vuex";

export default createStore({
  state: {
    info: new Date(),
  },
  mutations: {},
  actions: {},
  getters: {
    formatInfo(state) {
      return new Date() + '==store时间';
    },
  },
  modules: {},
});
