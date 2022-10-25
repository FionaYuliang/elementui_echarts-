const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3333,
    open: false,
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 新版本sass-loader， 将data改成prependData进行配置
  //       data: `@import "@/assets/scss/_variable.scss";`,
  //     },
  //   },
  // },
});
