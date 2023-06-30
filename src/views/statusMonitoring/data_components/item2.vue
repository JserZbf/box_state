<template>
  <div class="item2">
    <h3>XXXX</h3>
    <div class="info1">
      <p>参数点位：</p>
      <span>DB100.DBB1</span>
    </div>
    <div class="info1">
      <div class="info1s mr30">
        <p>当前值：</p>
        <span>20</span>
      </div>
      <div class="info1s">
        <p>刷新时间：</p>
        <span>2020-01-01 12:00:00</span>
      </div>
    </div>
    <div class="info1">
      <p>参数点位：</p>
    </div>
    <echartsView />
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
import echartsView from "./echarts.vue";
const compList = ref({
  echartsView,
});
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
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
.item2 {
  position: relative;
  width: calc(100% - 40px);
  height: calc(100% - 30px);
  padding: 15px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  h3 {
    font-size: 16px;
    font-family: MiSans-Demibold;
    font-weight: 600;
    color: #333333;
  }

  .info1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    font-size: 14px;
    line-height: 30px;

    p {
      color: #999999;
    }

    span {
      color: #333333;
    }

    .info1s {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
    }
  }

  .mr30 {
    margin-right: 30px;
  }
}
</style>
