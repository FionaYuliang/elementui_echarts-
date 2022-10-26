<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userAvatar" />
          <div class="userinfo">
            <p class="name">杨明明</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-08-01</span></p>
          <p>上次登录地点：<span>北京市海淀区</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 20px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(value, key) in tableLabel"
            show-overflow-tooltip
            :key="key"
            :prop="key"
            :label="value"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <ECharts
          style="height: 280px"
          :chartsData="echartsData.order"
        ></ECharts>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <ECharts
            :chartsData="echartsData.user"
            style="height: 260px"
          ></ECharts>
        </el-card>
        <el-card shadow="hover">
          <ECharts
            :chartsData="echartsData.video"
            style="height: 260px"
            :isAxisChart="false"
          ></ECharts>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ECharts from "../components/ECharts.vue";
export default {
  components: { ECharts },
  data() {
    return {
      userAvatar: require("../assets/images/user.png"),
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      tableData: [],
      tableLabel: {
        name: "课程名称",
        totalBuy: "今日购买",
        monthBuy: "本月购买",
        todayBuy: "总购买",
      },
      echartsData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then((res) => {
        res = res.data.data;
        this.tableData = res.tableData;
        //1,订单折线图
        const order = res.orderData;
        //订单折线图的横坐标数据是日期
        this.echartsData.order.xData = order.date;
        //第一步：取出series中的name部分也就是键名
        let keyArray = Object.keys(order.data[0]);
        // console.log(keyArray);
        //第二步：循环给series添加数据
        keyArray.forEach((key) => {
          this.echartsData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        //用户柱状图
        this.echartsData.user.xData = res.userData.map((item) => item.date);
        this.echartsData.user.series.push({
          name: "新增用户",
          data: res.userData.map((item) => item.new),
          type: "bar",
        });
        this.echartsData.user.series.push({
          name: "活跃用户",
          data: res.userData.map((item) => item.active),
          type: "barGap",
          barGap: 0,
        });

        //视频饼状图
        this.echartsData.video.series.push({
          data: res.videoData,
          type: "pie",
        });
      });
    },
  },
  mounted() {},
  created() {
    this.getTableData();
  },
};
</script>

<style lang="scss" scoped>
// @import "~@assets/scss/home.scss";
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 40px;
    }
    &info {
      .name {
        font-size: 32px;
        margin-bottom: 40px;
      }
      .access {
        color: #999999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #6666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>
