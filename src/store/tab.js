export default {
  state: {
    menu: [],
    currentMenu: null,
  },
  getters: {},
  mutations: {
    selectMenu(state, value) {
      if (value.name !== "home") {
        state.currentMenu = value;
      } else {
        state.currentMenu = null;
      }
    },
  },
  action: {},
};
