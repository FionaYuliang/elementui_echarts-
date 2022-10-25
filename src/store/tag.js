export default {
  state: {
    isCollapse: true,
    menu: [],
    currentMenu: null,
    tagsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
  },
  getters: {},
  mutations: {
    selectMenu(state, value) {
      if (value.name !== "home") {
        state.currentMenu = value;
        let result = state.tagsList.findIndex(
          (item) => item.name === value.name
        );
        result === -1 ? state.tagsList.push(value) : "";
      } else {
        state.currentMenu = null;
      }
    },
    closeTag(state, value) {
      let index = state.tagsList.findIndex((item) => item.name === value.name);
      state.tagsList.splice(index, 1);
    },
    clickCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  action: {},
};
