import Cookie from "js-cookie";
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
    setMenu(state, value) {
      state.menu = value;
      Cookie.set("menu", JSON.stringify(value));
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return;
      }
      let menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      let currentMenu = [
        {
          path: "/",
          component: () => import(`@views/MainPage`),
          children: [],
        },
      ];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`@views/${item.url}`);
            return item;
          });
          currentMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@views/${item.url}`);
          currentMenu[0].children.push(SidebarItem);
        }
      });
      router.addRoutes(currentMenu);
    },
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
