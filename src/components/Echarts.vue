<template>
  <div style="height: 100%" ref="echarts">echarts</div>
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
        legend: {
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#333",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
        series: [
          {
            data: [],
            type: "line",
          },
        ],
      },
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
    };
  },
  computed: {
    options() {
      return this.isAxisCharts ? this.axisOption : this.normalOption;
    },
  },
  watch: {
    chartsData: {
      handler: function () {
        this.initCharts;
      },
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
