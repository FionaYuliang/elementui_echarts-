import Mock from "mockjs";

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: "vue1",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue2",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue3",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue4",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue5",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue6",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
      },
    };
  },
};
