<template>
  <div class="itemBody">
    <vtable></vtable>
  </div>
</template>

<script setup>
import vtable from './vtable.vue'
</script>

<style lang="scss" scoped>
.itemBody {
  width: calc(100% - 0px);
  position: relative;
  height: calc(100% - 0px);
  padding: 0px 0 0 0;
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
