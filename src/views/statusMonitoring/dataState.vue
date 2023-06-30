<template>
  <div class="home">
    <!-- <sidebar active="/state/argument"></sidebar> -->
    <div class="homeMain">
      <tab :active.sync="active" :list="tabList"></tab>
      <div class="homeMain2">
        <div v-for="(item, index) in 9" :key="index" class="items">
          <item1 v-if="index == 0" />
          <item2 v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import sidebar from "@/components/sidebar";
import tab from "@/components/layouts/tab.vue";
import item1 from "./data_components/item1.vue";
import item2 from "./data_components/item2.vue";

// export default {
//   data() {
//     return {
//       list: [],
//       active: "0",
//       tabList: [
//         {
//           name: "近4小时",
//           id: "0",
//         },
//         {
//           name: "当日",
//           id: "1",
//         },
//         {
//           name: "上一日",
//           id: "2",
//         },
//       ],
//     };
//   },
//   components: { sidebar, tab, item1, item2 },
//   created() {},
//   mounted() {
//     new this.$wow.WOW().init();
//   },
//   methods: {},
//   filters: {},
//   watch: {},
// };
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  position: fixed;
  height: 100%;
  background: rgba(246, 248, 251, 1);
  //background: url("../assets/pageBg.jpg") no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
}

.mTitle {
  font-size: 16px;
  font-family: MiSans-Bold;
  font-weight: bold;
  color: #333333;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.homeMain {
  position: relative;
  width: calc(100% - 210px);
  height: calc(100% - 0px);
  padding: 0 16px 10px 14px;
  box-sizing: border-box;

  .homeMain2 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    height: calc(100% - 75px);
    position: relative;
    width: calc(100% - 10px);

    .items {
      width: calc(33.33% - 10px);
      height: calc(33.33% - 10px);
      margin-right: 15px;
      margin-bottom: 15px;
      background: #ffffff;
      border-radius: 16px;
    }

    .items:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
