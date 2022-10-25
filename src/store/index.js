import Vue from "vue";
import Vuex from "vuex";
import tab from "./tag";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tab,
  },
});
