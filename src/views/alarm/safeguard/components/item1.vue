<template>
  <div class="itemBody">
    <div class="selected">
      <el-select style="width: 273px" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="title">已知报警码</div>
    <vtable></vtable>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import vtable from "./vtable.vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
const options = [
  {
    value: "选择设备",
    label: "选择设备",
  },
  {
    value: "选择设备1",
    label: "选择设备1",
  },
  {
    value: "选择设备2",
    label: "选择设备2",
  },
  {
    value: "选择设备3",
    label: "选择设备3",
  },
  {
    value: "选择设备4",
    label: "选择设备4",
  },
];
const value = ref("");
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

.selected {
  margin-left: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
}
:deep(.selected) {
  .el-input__inner {
    height: 34px;
  }

  .el-input__prefix,
  .el-input__suffix {
    height: 34px;
  }

  .el-input__icon {
    line-height: 34px;
  }
}
</style>
