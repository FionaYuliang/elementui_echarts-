<template>
  <div style="height: 100%" ref="eharts">echarts</div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    chartsData: {
      type: Object,
      //这里用函数返回而不是用对象定义的原因是避免组件复用时互相影响
      default() {
        return {
          xAxis: [],
          series: [],
        };
      },
    },
    isAxisCharts: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      echarts: null,
      axisOption: {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
          },
        ],
      },
      normalOption: {
        series: [],
      },
    };
  },
  computed: {
    options() {
      return this.isAxisCharts ? this.axisOption : this.normalOption;
    },
  },
  methods: {
    initCharts() {
      if (this.echarts) {
        this.echarts.setOption(this.options);
      } else {
        this.echarts = echarts.init(this.$refs.echarts);
        this.echarts.setOption(this.options);
      }
    },
    initChartsData() {},
  },
};
</script>

<style lang="scss" scoped></style>
