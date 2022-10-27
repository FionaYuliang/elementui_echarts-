// var Mock = require("mockjs");

import Mock from "mockjs";
import homeApi from "./home";
import userApi from "./user";

Mock.setup({
  timeout: "200-2000",
});

//首页相关
//拦截的是 /home/getData
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);
// 用户相关
Mock.mock(/\/user\/getUser/, "get", userApi.getUserList);
