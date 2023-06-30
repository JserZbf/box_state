<template>
  <div class="itemBody">
    <div class="title">监控点位</div>
    <div class="itemBody2">
      <span class="ml20">IP</span>
      <el-input v-model="ipt" class="itemBody2Input" placeholder="" />
      <span class="">协议</span>
      <el-input v-model="ipt2" class="itemBody2Input" placeholder="" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
// props
const props = defineProps({
  color: {
    type: String,
    default: "#000",
  },
  color2: {
    type: String,
    default: "#000",
  },
});
const ipt = ref('')
const ipt2 = ref('')
</script>

<style lang="scss" scoped>
.itemBody {
  width: calc(100% - 0px);
  position: relative;
  height: 104px;
  padding: 0px 0 0 0;
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

.itemBody2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

//   :deep {
//     .el-input__inner {
//       height: 30px;
//       border: none;
//       background: rgba(245, 245, 245, 1);
//     }
//   }

  span {
    font-size: 14px;
    font-family: MiSans;
    font-weight: 400;
    color: #283e57;
  }

  .itemBody2Input {
    width: 140px;
    height: 30px;
    background: #f5f5f5;
    border-radius: 6px;
    margin-left: 14px;
    margin-right: 40px;
  }

  .ml20 {
    margin-left: 20px;
  }

  .ml40 {
    margin-left: 40px;
  }
}
</style>
