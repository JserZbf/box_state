<template>
  <div class="echartsBody">
    <div class="echarts1" ref="echarts1"></div>
    <div class="jindu">
      <slot></slot>
    </div>
  </div>
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
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(echarts1.value);
  // 设置配置项
  var getvalue = [88];
  var option = {
    tooltip: {
      formatter: function (params) {
        return '<span style="color: #fff;">同比增长：' + getvalue + "%</span>";
      },
    },
    angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      show: false,
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    polar: {
      center: ["50%", "50%"],
      radius: "170%", //图形大小
    },
    series: [
      {
        type: "bar",
        data: getvalue,
        showBackground: true,
        backgroundStyle: {
          color: "rgba(255, 255, 255, 1.00)",
        },
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 10,
        itemStyle: {
          normal: {
            opacity: 1,
            color: new that.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
              {
                offset: 0,
                color: this.color,
              },
              {
                offset: 1,
                color: this.color2,
              },
            ]),
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
  data() {
    return {};
  },
  // props: {
  //   color: {
  //     type: String,
  //     default() {
  //       return "";
  //     },
  //   },
  //   color2: {
  //     type: String,
  //     default() {
  //       return "";
  //     },
  //   },
  // },
  // mounted() {
  //   this.drawLine();
  // },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts1);
      
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  },
};
</script> -->

<style lang="scss" scoped>
.echartsBody {
  position: relative;
  width: 119px;
  height: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .echarts1 {
    position: relative;
    width: 119px;
    height: 119px;
    z-index: 1;
  }

  .jindu {
    position: absolute;
    width: 119px;
    height: 119px;
    z-index: 0;
    top: 0;
    left: 0;
    background: url("@/assets/home/echartsbg.png") center center
      no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;

    p {
      font-size: 14px;
      font-family: MiSans;
      font-weight: 600;
      color: #ffffff;
    }

    .schedule {
      font-size: 30px;
      font-family: MiSans;
      font-weight: bold;
      color: #ffffff;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
