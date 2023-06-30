<template>
  <div>
    <div class="cur" @click="dialogVisible = true">
      <slot></slot>
    </div>
    <el-dialog
      title="提示"
      append-to-body
      custom-class="popWinBody"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="popTitle">
        <div class="popTitlel">请选择颜色</div>
        <div class="popTitler"><i class="el-icon-close"></i></div>
      </div>
      <tab :active.sync="active" :list="statuslist"></tab>
      <span slot="footer" class="dialog-footer">
        <el-button class="w100p" type="info" @click="dialogVisible = false"
          >取消</el-button
        >
        <el-button class="w100p" type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import tab from "./tab.vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
const dialogVisible = ref(false);
const active = ref(0);
const statuslist = ref([
  {
    name: "颜色1",
    id: "0",
  },
  {
    name: "颜色2",
    id: "1",
  },
  {
    name: "颜色3",
    id: "2",
  },
  {
    name: "颜色4",
    id: "3",
  },]);
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
<style lang="scss">
.popWinBody {
  border-radius: 16px;
  width: 460px !important;

  .popTitle {
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    height: 55px;
    border-bottom: 2px solid rgba(238, 238, 238, 1);

    .popTitlel {
      font-size: 16px;
      font-family: MiSans;
      font-weight: bold;
      color: #333333;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
    }

    .popTitler {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      color: #333;
      font-size: 16px;

      i {
        font-size: 18px;
      }
    }
  }

  .el-dialog__body {
    padding: 0;
  }

  .el-dialog__header {
    display: none;
  }
}
</style>
