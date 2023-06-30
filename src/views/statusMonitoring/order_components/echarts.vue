<template>
  <div class="echarts1" ref="echarts1"></div>
</template>
<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// props
const props = defineProps({
  list: {
    type: Array,
    default() {
      return [];
    },
  },
  color2: {
    type: String,
    default: "#000",
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

  var types = [
    { name: "已完成", color: "#0FA5E5" },
    { name: "加工中", color: "#34CEAF" },
    { name: "待启动", color: "#767FF7" },
    { name: "已取消", color: "#F56085" },
  ];
  var data = [
    {
      name: "SSSS公司",
      value: [0, 0, 3, 0],
      itemStyle: {
        normal: {
          color: types[0].color,
        },
      },
    },
    {
      name: "SSSS公司2",
      value: [1, 3, 5, 1],
      itemStyle: {
        normal: {
          color: types[1].color,
        },
      },
    },
    {
      name: "SSSS公司3",
      value: [2, 6, 8, 2],
      itemStyle: {
        normal: {
          color: types[2].color,
        },
      },
    },
    {
      name: "SSSS公司4",
      value: [3, 9, 12, 3],
      itemStyle: {
        normal: {
          color: types[3].color,
        },
      },
    },
  ];
  var categories = ["SSSS公司", "SSSS公司2", "SSSS公司3", "SSSS公司4"];
  function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.3;

    var rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height,
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height,
      }
    );

    return (
      rectShape && {
        type: "rect",
        shape: rectShape,
        style: api.style(),
      }
    );
  }

  // 设置配置项
  const option = {
    tooltip: {
      formatter: function (params, ticket, callback) {
        return (
          '<div class="info3">工单详情：<span>' +
          params.data.name +
          "</span></div>"
        );
      },
      backgroundColor: "rgba(255,255,255,0)",
    },
    grid: {
      top: "10%",
      left: "20",
      right: "20",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      position: "top",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisLabel: {
        formatter: "{value}月",
        textStyle: {
          color: "#8391A1",
          margin: 0,
          fontSize: 14,
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#e7ecf3",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#e7ecf3",
          width: 1,
          type: "dashed",
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      data: categories,
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#8391A1",
          margin: 0,
          fontSize: 14,
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#e7ecf3",
          width: 1,
          type: "dashed",
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#e7ecf3",
        },
      },
    },
    series: [
      {
        type: "custom",
        renderItem: renderItem,
        itemStyle: {
          normal: {
            opacity: 0.8,
          },
        },
        encode: {
          x: [1, 2],
          y: 0,
        },
        data: data,
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
  props: {},
  data() {
    return {};
  },
  watch: {
    list() {
      this.drawLine();
    },
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);

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
<style>
.info3 {
  font-size: 14px;
  font-family: MiSans;
  font-weight: 600;
  color: #333333;
  background: #fff;
  padding: 14px;
  line-height: 26px;
  box-shadow: 0px 0px 24px 0px rgba(184, 193, 210, 0.45);
}
</style>
