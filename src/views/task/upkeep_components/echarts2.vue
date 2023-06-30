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
  var getname = [
    "2022.11.01",
    "2022.11.02",
    "2022.11.03",
    "2022.11.04",
    "2022.11.05",
    "2022.11.06",
    "2022.11.07",
    "2022.11.08",
    "2022.11.09",
  ];
  var getvalue = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];
  var getvalue2 = [4, 2, 3, 6, 4, 2, 3, 6, 4, 2, 3, 6];

  var option = {
    grid: {
      top: "40px",
      bottom: "0px",
      left: "0px",
      right: "0px",
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
        name: "计划保养时间",
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
            barBorderRadius: [0, 50, 0, 0],
          },
        },
      },
      {
        name: "实际保养时间",
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

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
