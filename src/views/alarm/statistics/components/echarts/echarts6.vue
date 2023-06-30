<template>
  <div class="incomechart1" ref="echarts1" id="incomechart1"></div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// props
// eslint-disable-next-line vue/valid-define-props
const props = defineProps({
  color: {
    type: String,
    default: "#000",
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
var getvalue = [88];
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(echarts1.value);
  // 设置配置项
  var colorList = [
    "#5976bc",
    "rgba(118, 127, 247, 1.00)",
    "rgba(245, 96, 132, 1.00)",
    "rgba(253, 192, 89, 1.00)",
    "rgba(52, 206, 174, 1.00)",
  ];
  var data = [
    {
      name: "停机无原因",
      value: 20.9,
    },
  ];
  var rich = {
    name: {
      color: "#FFF",
      fontSize: 14,
      padding: [10, 15, 0, 10],
      fontWeight: "400",
      align: "left",
    },
    value: {
      color: "#FFF",
      fontSize: 15,
      padding: [10, 10, 0, 15],
      fontWeight: "500",
      align: "right",
    },
    percent: {
      color: "#FFF",
      align: "right",
      fontSize: 15,
      fontWeight: "500",
      //padding: [0, 5]
    },
    hr: {
      width: "100%",
      height: 0,
    },
    cir: {
      fontSize: 26,
    },
  };
  var option = {
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function (params) {
            return (
              params.name +
              "：" +
              params.value +
              "<br>占比：" +
              params.percent.toFixed(2) +
              "%"
            );
          },
        },
        itemStyle: {
          normal: {
            borderColor: "#fff",
            borderWidth: 0,
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        type: "pie",
        radius: ["68%", "82%"],
        center: ["50%", "50%"],
        label: {
          normal: {
            show: false,
            position: "inner",
            formatter: (params) => {
              return "{percent|" + params.percent.toFixed(0) + "%}";
            },
            rich: rich,
          },
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
// import $ from 'jquery'

export default {
  name: 'pinggu',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      list:
    }
  },
  watch: {},
  mounted() {
    this.getheight()
  },
  methods: {
    getheight() {
      window.addEventListener('resize', this.getheight)
      this.$nextTick(() => {
        this.getechart()
      })
    },
    getechart() {
      let myChart = this.$echarts.init(this.$refs.echarts)

      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
    },
  }
}
</script> -->

<style lang="scss" scoped>
.incomechart1 {
  position: relative;
  height: calc(100% - 130px);
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-right: 15px;
}
</style>
