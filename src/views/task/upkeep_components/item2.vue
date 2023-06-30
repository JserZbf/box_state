<template>
  <div class="item2">
    <h3>保养任务</h3>
    <echarts />
  </div>
</template>

<script setup>
import echarts from './echarts2.vue'
const props = defineProps({
  id: {
    type: Array,
    default() {
      return "";
    },
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
  height: calc(50% - 90px - 16px);
  padding: 15px 20px;
  display: flex;
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;
  position: relative;

  h3 {
    font-size: 16px;
    font-family: MiSans-Demibold;
    font-weight: 600;
    color: #333333;
    position: absolute;
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
