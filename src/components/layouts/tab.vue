<template>
  <div class="header flex-ac-sb" style="height: 58px">
    <span><!-- {{ $store.getters.formatInfo }} --></span>
    <div class="btns">
      <el-radio-group v-model="radio">
        <div
          class="radio_button flex-c-c bgfff"
          :class="radio == 3 ? 'that' : ''"
        >
          <el-radio :label="3">近四小时</el-radio>
        </div>
        <div
          class="radio_button flex-c-c bgfff"
          :class="radio == 6 ? 'that' : ''"
        >
          <el-radio :label="6">当日</el-radio>
        </div>
        <div
          class="radio_button flex-c-c bgfff"
          :class="radio == 9 ? 'that' : ''"
        >
          <el-radio :label="9">上一日</el-radio>
        </div>
      </el-radio-group>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"; // 主要
const radio = ref(3);
</script>
<style lang="scss" scoped>
.header {
  padding: 0 20px;
  .radio_button {
    padding: 17px;
    box-sizing: border-box;
    height: 39px;
    background: #ffffff;
    border-radius: 8px;
    margin-left: 15px;
    .el-radio {
      width: calc(100% + 24px);
      display: flex;
      height: 39px;
      justify-content: center;
      align-items: center;
    }
  }
  :deep(.that) {
    .el-radio__label {
      color: #5864ff !important;
    }
    .el-radio__inner {
      border-color: #5864ff !important;
      background-color: #5864ff;
    }
  }
}
</style>
