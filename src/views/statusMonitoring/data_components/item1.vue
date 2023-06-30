<template>
  <div class="item1">
    <div class="equipment">
      <div class="equipmentl">
        <img src="@/assets/shebei.png" alt="" />
      </div>
      <div class="equipmentr">
        <div class="equipmentrInfo">
          <span>设备名称：</span>
          <p>XXXX</p>
        </div>
        <div class="equipmentrInfo">
          <span>当前状态：</span>
          <p>停机无原因</p>
        </div>
        <div class="equipmentrInfo">
          <span>状态持续时间：</span>
          <p>00:37:45</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// import echarts from "./echarts.vue";
// const compList = ref({
//   echarts,
// });
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});

// export default {
//   name: "item1",
//   components: {},
//   props: {
//     id: {
//       type: String,
//       default() {
//         return "";
//       },
//     },
//   },
//   data() {
//     return {
//       status: "",
//     };
//   },
//   watch: {},
//   mounted() {},
//   methods: {},
// };
</script>

<style lang="scss" scoped>
.item1 {
  width: 100%;
  height: 100%;

  .equipment {
    height: 120px;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .equipmentl {
      width: 137px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      margin-left: 56px;

      img {
        width: 91px;
        height: 86px;
      }
    }

    .equipmentr {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;

      .equipmentrInfo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        flex-direction: row;
        align-content: flex-start;

        span {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 400;
          color: #999999;
          line-height: 30px;
        }

        p {
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}
</style>
