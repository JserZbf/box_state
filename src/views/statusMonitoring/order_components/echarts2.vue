<template>
  <div class="echarts1" ref="echarts1"></div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// eslint-disable-next-line vue/valid-define-props
const props = defineProps({
  id: {
    type: String,
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
  var getname = [
    "1时",
    "2时",
    "3时",
    "4时",
    "5时",
    "6时",
    "7时",
    "8时",
    "9时",
    "10时",
    "11时",
    "12时",
  ];
  var getvalue = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];
  var getvalue2 = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];
  // 设置配置项
  const option = {
    grid: {
      top: "60px",
      bottom: "0px",
      left: "10px",
      right: "30px",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: 0,
      right: 0,
      itemWidth: 14,
      itemHeight: 14,
      itemGap: 10,
      textStyle: {
        color: "rgba(51, 51, 51, 1)",
        fontSize: "13",
      },
    },
    xAxis: [
      {
        data: getname,
        axisLabel: {
          margin: 10,
          color: "rgba(153, 153, 153, 1)",
          interval: 0,
          textStyle: {
            fontSize: 13,
          },
        },
        axisLine: {
          lineStyle: {
            color: "#f3f3f3",
            width: 1,
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "rgba(39, 76, 129, 0.26)",
            width: 1,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        name: "单位:次",
        nameTextStyle: {
          color: "#8391A1",
          fontSize: 14,
          padding: [0, 0, 0, 0],
        },
        axisLabel: {
          formatter: "{value}",
          color: "rgba(153, 153, 153, 1)",
          textStyle: {
            fontSize: 13,
          },
        },
        axisLine: {
          lineStyle: {
            color: "#f8f8f8",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#e7ecf3",
            width: 1,
            type: "dashed",
          },
        },
      },
      {
        type: "value",
        min: 0,
        name: "单位：秒/次",
        nameTextStyle: {
          color: "#8391A1",
          fontSize: 14,
          padding: [0, 0, 0, 0],
        },
        axisLabel: {
          formatter: "{value}",
          color: "rgba(153, 153, 153, 1)",
          textStyle: {
            fontSize: 13,
          },
        },
        axisLine: {
          lineStyle: {
            color: "#f8f8f8",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#e7ecf3",
            width: 1,
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "小时产量",
        type: "bar",
        data: getvalue,
        barWidth: "10px",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(147, 198, 255, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(88, 100, 255, 1)",
                },
              ],
              false
            ),
            barBorderRadius: [50, 50, 0, 0],
          },
        },
      },
      {
        name: "额定产出",
        type: "bar",
        data: getvalue2,
        barWidth: "10px",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(162, 218, 245, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(15, 165, 229, 1)",
                },
              ],
              false
            ),
            barBorderRadius: [50, 50, 0, 0],
          },
        },
      },
      {
        name: "节拍",
        type: "line",
        yAxisIndex: 1,
        data: getvalue2,
        barWidth: "10px",
        smooth: true,
        itemStyle: {
          normal: {
            color: "#feb822",
            barBorderRadius: [0, 50, 0, 0],
          },
        },
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
  name: "echarts1",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      status: "",
      active: false,
      list: [
        "1时",
        "2时",
        "3时",
        "4时",
        "5时",
        "6时",
        "7时",
        "8时",
        "9时",
        "10时",
        "11时",
        "12时",
      ],
    };
  },
  watch: {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      // var getname = this.list;
      // var getvalue = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];
      // var getvalue2 = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];

      var option = {};
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
  height: 100%;
}
</style>
