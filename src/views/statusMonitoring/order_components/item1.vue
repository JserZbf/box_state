<template>
  <div class="itemBody">
    <h3 class="title">当前进度</h3>
    <div class="caidan">
      <div class="caidan1">
        <span style="background: #0fa5e5"></span>
        <em>已完成</em>
      </div>
      <div class="caidan1">
        <span style="background: #34ceaf"></span>
        <em>加工中</em>
      </div>
      <div class="caidan1">
        <span style="background: #767ff7"></span>
        <em>待启动</em>
      </div>
      <div class="caidan1">
        <span style="background: #f56085"></span>
        <em>已取消</em>
      </div>
    </div>
    <echarts></echarts>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
import echarts from "./echarts.vue";

const compList = ref({
  echarts,
});
// export default {
//   name: "item1",
//   components: {echarts},
//   props: {
//     id: {
//       type: String,
//       default() {
//         return '';
//       }
//     }
//   },
//   data() {
//     return {
//       status: ''
//     }
//   },
//   watch: {},
//   mounted() {
//   },
//   methods: {}
// }
</script>

<style lang="scss" scoped>
.itemBody {
  width: calc(100% - 10px);
  position: relative;
  height: calc(50% - 100px - 16px);
  padding: 20px 0 0 0;
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;

  .title {
    font-size: 16px;
    font-family: MiSans-Bold;
    font-weight: bold;
    color: #333333;
    margin-left: 20px;
    height: 50px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    top: 0;
  }
}

.caidan {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-right: 20px;

  .caidan1 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    span {
      width: 12px;
      height: 12px;
      background: #f56085;
      margin-left: 30px;
      margin-right: 9px;
    }

    em {
      font-size: 13px;
      font-family: MiSans;
      font-weight: 400;
      color: #333333;
      font-style: normal;
    }
  }
}
</style>
