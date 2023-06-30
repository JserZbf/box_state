<template>
  <div class="itemBody">
    <vtable></vtable>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
import vtable from "./vtable.vue";
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
//   components: {vtable},
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
  width: calc(100% - 0px);
  position: relative;
  height: calc(50% - 56px - 16px);
  padding: 20px 0 0 0;
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;

  .title {
    font-size: 16px;
    font-family: MiSans;
    font-weight: bold;
    color: #333333;
    margin-left: 20px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
  }
}
</style>
