<template>
  <div class="icon">
    <!--    {{node.expanded}}-->
    <i
      v-if="type != 4 && node.expanded"
      :class="{ active: node.isCurrent }"
      class="el-icon-caret-bottom"
    ></i>
    <i
      v-if="type != 4 && !node.expanded"
      :class="{ active: node.isCurrent }"
      class="el-icon-caret-right"
    ></i>
    <img v-if="type == 4" src="@/assets/weihu/icon_word.png" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  node: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .el-icon-caret-right,
  .el-icon-caret-bottom {
    font-size: 18px;
    color: rgba(51, 51, 51, 1);
  }
  i.active {
    color: #5864ff;
  }
}
</style>
