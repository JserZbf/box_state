<template>
  <div class="itemBody scrollBar">
    <vtable></vtable>
    <vtable2></vtable2>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import vtable from "./vtable.vue";
import vtable2 from "./vtable2.vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.itemBody {
  width: calc(100% - 0px);
  position: relative;
  height: calc(100% - 0px);
  padding: 0px 0 0 0;
  overflow-y: scroll;
  background: #fff;

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
