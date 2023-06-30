<template>
  <div id="maychar_zxt" ref="echarts1" class="echarts1"></div>
</template>

<script lang="js">
import { defineComponent, onMounted, inject } from "vue"; // 主要
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Echarts2",
    setup() {
        onMounted(() => {
        //   setTimeout(changetype(),1000);
          changetype();
        });
        let echarts = inject("echarts"); // 主要
        var getvalue = [4, 2, 3, 6]
        var getvalue2 = [4, 2, 3, 6]
        const changetype = () => {
            // 获取组件实例
            const machart2 = echarts.init(document.getElementById("maychar_zxt"));
            // 设置配置项
            const option = {
              grid: {
              top: '40px',
              bottom: '0px',
              left: '0px',
              right: '0px',
              containLabel: true
              },
              tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow',
                  shadowStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(255, 174, 0, 0.1)'
                  }, {
                      offset: 1,
                      color: 'rgba(255, 174, 0, 0.5)'
                  }], false),
                  }
              }
              },
              legend: {
              top: 0,
              left: 0,
              itemWidth: 14,
              itemHeight: 14,
              itemGap: 10,
              textStyle: {
                  color: 'rgba(51, 51, 51, 1)',
                  fontSize: '13'
              }
              },
              xAxis: [{
              data: ['2022.11.07', '2022.11.07', '2022.11.07', '2022.11.07'],
              axisLabel: {
                  margin: 10,
                  color: 'rgba(153, 153, 153, 1)',
                  interval: 0,
                  rotate: 0,
                  textStyle: {
                  fontSize: 13
                  },
              },
              axisLine: {
                  lineStyle: {
                  color: 'rgba(245, 245, 245, 1.00)',
                  width: 1
                  }
              },
              splitLine: {
                  show: false,
                  lineStyle: {
                  color: 'rgba(39, 76, 129, 0.26)',
                  width: 1,
                  }
              },
              axisTick: {
                  show: false
              },
              }],
              yAxis: [{
                  type: 'value',
                  min: 0,
                  axisLabel: {
                  formatter: '{value}%',
                  color: 'rgba(153, 153, 153, 1)',
                  textStyle: {
                      fontSize: 13
                  },
                  },
                  axisLine: {
                  lineStyle: {
                      color: 'rgba(245, 245, 245, 1.00)',
                  }
                  },
                  axisTick: {
                  show: false
                  },
                  splitLine: {
                  show: false,
                  lineStyle: {
                      color: 'rgba(39, 76, 129, 0.26)',
                      width: 1,
                  }
                  }
              }],
              series: [{
                  name: '目标开动率',
                  type: 'bar',
                  data: getvalue,
                  barWidth: '10px',
                  itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(147, 198, 255, 1)'
                      }, {
                      offset: 1,
                      color: 'rgba(88, 100, 255, 1)'
                      }], false),
                      barBorderRadius: [0, 50, 0, 0],
                  }
                  },
              },
              {
                  name: '实际开动率',
                  type: 'bar',
                  data: getvalue2,
                  barWidth: '10px',
                  itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(162, 218, 245, 1)'
                      }, {
                      offset: 1,
                      color: 'rgba(15, 165, 229, 1)'
                      }], false),
                      barBorderRadius: [0, 50, 0, 0],
                  }
                  },
              }, {
                  name: '平均值',
                  type: 'line',
                  yAxisIndex: 0,
                  data: getvalue2,
                  smooth: true,
                  symbol: 'circle', //数值点设定为实心点
                  symbolSize: 6, // 折线的点的大小
                  itemStyle: {
                  normal: {
                      color: 'rgba(253, 203, 0, 1)', //点的颜色
                      lineStyle: {
                      color: 'rgba(253, 203, 0, 1)', //线的颜色
                      width: 1, // 折线图线条粗细设置
                      },
                  },
                  },
              },]
            };
            // 复制
            machart2.setOption(option);
            // 根据页面大小自动响应图表大小
            window.addEventListener("resize", function () {
                machart2.resize();
            });
        };
        return {
            changetype,
        };
    },
});
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
