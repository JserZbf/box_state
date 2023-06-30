<template>
  <div class="tabs">
    <div
      class="tab cur"
      :class="{ active: active == item.id }"
      @click="getactive(item.id)"
      v-for="(item, index) in list"
      :key="index"
    >
      <span>{{ item.name }}</span>
      <div class="color"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  active: {
    type: Number | String,
    default() {
      return 0;
    },
  },
});
const getactive = (e) => {
  this.$emit("update:active", e);
};
// export default {
//   name: "tabs",
//   components: {},
//   props: {
//     list: {
//       type: Array,
//       default() {
//         return [];
//       },
//     },
//     active: {
//       type: Number | String,
//       default() {
//         return 0;
//       },
//     },
//   },
//   data() {
//     return {};
//   },
//   watch: {},
//   mounted() {},
//   methods: {

//   },
// };
</script>
<style scoped lang="scss">
.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;

  .tab {
    width: 90px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    span {
      font-size: 14px;
      color: #333333;
      margin-right: 10px;
    }
  }

  .tab:nth-child(1) .color {
    width: 14px;
    height: 14px;
    background: #70ad47;
  }
  .tab:nth-child(2) .color {
    width: 14px;
    height: 14px;
    background: rgba(254, 192, 0, 1);
  }
  .tab:nth-child(3) .color {
    width: 14px;
    height: 14px;
    background: rgba(237, 125, 49, 1);
  }
  .tab:nth-child(4) .color {
    width: 14px;
    height: 14px;
    background: rgba(237, 49, 50, 1);
  }

  .tab.active {
    width: 90px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    box-shadow: 0px 4px 8px 0px rgba(255, 192, 0, 0.2);

    span {
      font-size: 14px;
    }
  }

  .tab:nth-child(1).active {
    box-shadow: 0px 4px 8px 0px rgba(112, 172, 71, 0.2);
    border: 1px solid rgba(112, 172, 71, 1);
  }

  .tab:nth-child(2).active {
    box-shadow: 0px 4px 8px 0px rgba(255, 192, 0, 0.2);
    border: 1px solid rgba(255, 192, 0, 1);
  }

  .tab:nth-child(3).active {
    box-shadow: 0px 4px 8px 0px rgba(237, 125, 49, 0.2);
    border: 1px solid rgba(237, 125, 49, 1);
  }

  .tab:nth-child(4).active {
    box-shadow: 0px 4px 8px 0px rgba(237, 49, 50, 0.2);
    border: 1px solid rgba(237, 49, 50, 1);
  }
}
</style>
