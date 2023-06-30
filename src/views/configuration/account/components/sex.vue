<template>
  <div class="tabs">
    <div
      class="tab"
      :class="{ active: active == item.id }"
      @click="getSex(item.id)"
      v-for="(item, index) in list"
      :key="index"
    >
      <img v-if="active == item.id" src="@/assets/icon_selected.png" />
      <img v-else src="@/assets/icon_select.png" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
// eslint-disable-next-line vue/valid-define-props
const props = defineProps({
  active: {
    type: Number,
    default() {
      return 0;
    },
  },
});
const list = [
  {
    name: "男",
    id: 1,
  },
  {
    name: "女",
    id: 0,
  },
];
const getSex = (e) => {
  this.$emit("update:active", e);
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .tab {
    margin-left: 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    margin-right: 40px;

    span {
      font-size: 14px;
      font-family: PingFang;
      font-weight: 500;
      color: #666666;
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 13px;
    }
  }

  .tab.active {
    color: rgba(51, 51, 51, 1);
  }
}
</style>
