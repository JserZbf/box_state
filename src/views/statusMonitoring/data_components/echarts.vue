<template>
  <div class="echarts1" ref="echarts1"></div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// props
// eslint-disable-next-line vue/valid-define-props
const props = defineProps({
  id: {
    type: Array,
    default() {
      return "";
    },
  },
});
let echarts1 = ref(null);
onMounted(() => {
  setTimeout(changetype(), 1000);
});
var echarts = inject("echarts"); // 主要
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(echarts1.value);

  // 设置配置项
  var xdata = ["2022.11.07", "2022.11.08", "2022.11.09", "2022.11.10"];
  var ydata = [10, 10, 10, 10];
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      top: "15%",
      left: "0",
      right: "0",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#e7ecf3",
          },
        },
        axisLabel: {
          show: true,
          interval: 0,
          textStyle: {
            color: "#999999",
            margin: 0,
            fontSize: 13,
          },
        },
        axisTick: {
          show: false,
        },
        data: xdata,
      },
    ],
    yAxis: [
      {
        splitNumber: 4,
        minInterval: 1,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#e7ecf3",
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#f6f6f6",
          },
        },
        axisLabel: {
          show: true,
          formatter: "{value} %",
          textStyle: {
            color: "#999999",
            fontSize: 13,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "历史趋势",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        smooth: true,
        symbolSize: 0,
        lineStyle: {
          normal: {
            color: "#fdb71d", // 线条颜色
          },
        },
        itemStyle: {
          color: "#fdb71d",
          borderColor: "#fdb71d",
          borderWidth: 2,
        },
        label: {
          normal: {
            show: false,
            position: "top",
            rich: {
              a: {
                color: "#fff",
                align: "center",
              },
            },
          },
        },
        tooltip: {
          show: true,
        },
        data: ydata,
      },
    ],
  };
  // 复制
  machart.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    machart.resize();
  });
};
</script>
<!-- <script>
export default {
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      var xdata = ["2022.11.07", "2022.11.08", "2022.11.09", "2022.11.10"];
      var ydata = [10, 10, 10, 10];
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: "15%",
          left: "0",
          right: "0",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#e7ecf3",
              },
            },
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: "#999999",
                margin: 0,
                fontSize: 13,
              },
            },
            axisTick: {
              show: false,
            },
            data: xdata,
          },
        ],
        yAxis: [
          {
            splitNumber: 4,
            minInterval: 1,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e7ecf3",
                type: "dashed",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#f6f6f6",
              },
            },
            axisLabel: {
              show: true,
              formatter: "{value} %",
              textStyle: {
                color: "#999999",
                fontSize: 13,
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "历史趋势",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            smooth: true,
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: "#fdb71d", // 线条颜色
              },
            },
            itemStyle: {
              color: "#fdb71d",
              borderColor: "#fdb71d",
              borderWidth: 2,
            },
            label: {
              normal: {
                show: false,
                position: "top",
                rich: {
                  a: {
                    color: "#fff",
                    align: "center",
                  },
                },
              },
            },
            tooltip: {
              show: true,
            },
            data: ydata,
          },
        ],
      };
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  },
};
</script> -->

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 10px);
}
</style>
