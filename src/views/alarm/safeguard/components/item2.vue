<template>
  <div class="itemBody">
    <div class="title">未知报警码</div>
    <vtable></vtable>
  </div>
</template>

<script setup>
import vtable from './vtable2.vue'
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.itemBody {
  width: 100%;
  position: relative;
  height: 100%;

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
