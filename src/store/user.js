import Cookie from "js-cookie";
export default {
  state: {
    token: "",
  },
  getters: {},
  mutations: {
    setToken(state, value) {
      state.token = value;
      Cookie.set("token", value);
    },
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
    },
    getToken(state) {
      state.token = Cookie.get("token");
    },
  },
  action: {},
};
