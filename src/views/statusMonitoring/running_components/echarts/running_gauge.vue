<template>
  <div class="echarts2">
    <div id="maychar_gauge" ref="echarts1" class="echarts1" />
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// export default defineComponent({
//     // eslint-disable-next-line vue/multi-word-component-names
//     name: "Echarts1",
//     setup() {
onMounted(() => {
  setTimeout(changetype(), 1000);
});
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
console.log('props=====>',props.title)
let echarts = inject("echarts"); // 主要
let echarts1 = ref(null); // 主要
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(echarts1.value);
  // 设置配置项
  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 14,
            color: [
              [0.3, "#67e0e3"],
              [0.7, "#37a2da"],
              [1, "#fd666d"],
            ],
          },
        },
        type: "gauge",
        axisTick: {
          splitNumber: 10,
        },
        //detail: {formatter:'{value}%'},
        detail: {
          formatter: "{value}%",
          offsetCenter: [0, "40%"],
          textStyle: {
            fontSize: 13,
            color: "#5BB1EF",
          },
        },
        title: {
          formatter: "{value}%",
          offsetCenter: [0, "60%"],
          textStyle: {
            fontSize: 13,
            color: "rgba(51, 51, 51, 1)",
          },
        },
        data: [
          {
            value: 50,
            name: props.title,
          },
        ],
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
//         return {
//             changetype,
//         };
//     },
// });
</script>

<style lang="scss" scoped>
.echarts2 {
  position: relative;
  width: 100%;
  height: 100%;
}

.echarts1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
