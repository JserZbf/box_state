<template>
  <div class="echarts2">
    <div class="echarts1" ref="echarts1"></div>
    <div class="list">
      <div class="listItem">
        <p>1%</p>
        <span>最差开动率</span>
      </div>
      <div class="listItem">
        <p style="color: rgba(23, 165, 229, 1)">6%</p>
        <span>最佳开动率</span>
      </div>
      <div class="listItem">
        <p style="color: rgba(58, 188, 147, 1)">8%</p>
        <span>自标开动率</span>
      </div>
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
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          width: 20,
          show: true,
          lineStyle: {
            width: 20,
            color: [
              [0.2, "rgba(58, 188, 147, 1.00)"],
              [0.8, "rgba(23, 165, 229, 1.00)"],
              [1, "rgba(245, 96, 132, 1.00)"],
            ],
          },
        },
        type: "gauge",
        axisTick: {
          splitNumber: 20,
        },
        //detail: {formatter:'{value}%'},
        detail: {
          formatter: "{value}%",
          offsetCenter: [0, "40%"],
          textStyle: {
            fontSize: 18,
            color: "#5BB1EF",
          },
        },
        title: {
          formatter: "{value}%",
          offsetCenter: [0, "60%"],
          textStyle: {
            fontSize: 14,
            color: "rgba(51, 51, 51, 1)",
          },
        },
        data: [
          {
            value: 50,
            name: "平均开动",
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
</script>
<!-- <script>
export default {
  name: "echarts1",
  components: {},
  props: {},
  data() {
    return {
      number: 50,
      title: "平均开动",
    };
  },
  watch: {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
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
.echarts2 {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  width: 100%;

  .listItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;
    flex: 1;

    p {
      color: rgba(245, 96, 133, 1);
      font-size: 18px;
      font-family: MiSans;
      font-weight: bold;
      color: #f56085;
    }

    span {
      font-size: 13px;
      font-family: MiSans;
      font-weight: 400;
      color: #333333;
    }
  }
}

.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
</style>
