<template>
  <div id="maychar_circle" ref="echarts1" class="incomechart1"></div>
  
</template>

<script setup>
import { defineComponent, onMounted, inject,ref } from "vue"; // 主要
// export default defineComponent({
//     // eslint-disable-next-line vue/multi-word-component-names
//     name: "Echarts1",
//     setup() {
        let echarts1 = ref(null); // 主要
        onMounted(() => {
          setTimeout(changetype(),1000);
        });
        let echarts = inject("echarts"); // 主要
        var data = [
          {
            name: "加工",
            value: 20.9,
          },
          {
            name: "停机有原因",
            value: 8.4,
          },
          {
            name: "断线",
            value: 9.1,
          },
          {
            name: "计划停机",
            value: 20.9,
          },
          {
            name: "支停机无原因出",
            value: 40.6,
          },
        ]
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
          },
          hr: {
            width: "100%",
            height: 0,
          },
          cir: {
            fontSize: 26,
          },
        };
        var colorList = [
          "rgba(23, 165, 229, 1.00)",
          "rgba(118, 127, 247, 1.00)",
          "rgba(245, 96, 132, 1.00)",
          "rgba(253, 192, 89, 1.00)",
          "rgba(52, 206, 174, 1.00)",
        ];
        // 折线图
        const changetype = () => {
            // 获取组件实例
            // const machart = echarts.init(document.getElementById("maychar_circle"));
            const machart = echarts.init(echarts1.value);
            // 设置配置项
            const option = {
              tooltip: {
                trigger: "axis",
              },
              tooltip: {
                trigger: 'item'
              },
           
              series: [{
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
                  confine: true,   
                  itemStyle: {
                    normal: {
                      borderColor: "#fff",
                      borderWidth: 3,
                      color: function (params) {
                        return colorList[params.dataIndex];
                      },
                    },
                  },
                  type: "pie",
                  radius: ["68%", "82%"],
                  center: ["50%", "50%"],
                  emphasis: {
                  label: {
                      show: true,
                      fontSize: 40,
                      fontWeight: 'bold'
                    }
                  },
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
                },],
            };
            // 复制
            machart.setOption(option);
            // 根据页面大小自动响应图表大小
            window.addEventListener("resize", function () {
                machart.resize();
            });
        };
        // return {
        //     changetype,
        // };
    // },
// });
</script>

<style lang="scss" scoped>
.incomechart1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
