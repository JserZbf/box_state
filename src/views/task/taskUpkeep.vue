<template>
  <div class="home">
    <!-- <sidebar active="/task/upkeep"></sidebar> -->
    <div class="homeMain">
      <div class="searchHead">
        <span class="ml0">设备名称</span>
        <el-input
          class="w100"
          v-model="input1"
          placeholder="请输入设备名称"
        ></el-input>
        <span>保养规则名称</span>
        <el-input
          class="w100"
          v-model="input2"
          placeholder="请输入保养规则名称"
        ></el-input>
        <span>时间段</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          class="w100"
          placeholder="请选择开始时间"
        >
        </el-date-picker>
        <span>-</span>
        <el-date-picker
          v-model="value2"
          type="datetime"
          class="w100"
          placeholder="请选择结束时间"
        >
        </el-date-picker>
        <div class="searchBut ml20">
          <i class="el-icon-search"></i>
          <span>查询</span>
        </div>
      </div>
      <!-- <tab2 :active.sync="active" :list="tabList"></tab2> -->
      <item1></item1>
      <item2></item2>
    </div>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import item1 from "./upkeep_components/item1.vue";
import item2 from "./upkeep_components/item2.vue";
var active = ref(1);
var input2 = ref("");
var input1 = ref("");
var value1 = ref("");
var value2 = ref("");
var tabList = [
  {
    id: 0,
    name: "全部",
  },
  {
    id: 1,
    name: "未开始",
  },
  {
    id: 2,
    name: "已完成",
  },
  {
    id: 3,
    name: "待处理",
  },
  {
    id: 4,
    name: "已完成",
  },
];
// import sidebar from "@/components/sidebar";
// import item0 from "./upkeep_components/item0.vue";

// import tab2 from "@/components/tab2";

// export default {
//   data() {
//     return {
//       active: 0,
//       input2: "",
//       input1: "",
//       value1: "",
//       value2: "",
//       tabList: [
//         {
//           id: 0,
//           name: "全部",
//         },
//         {
//           id: 1,
//           name: "未开始",
//         },
//         {
//           id: 2,
//           name: "已完成",
//         },
//         {
//           id: 3,
//           name: "待处理",
//         },
//         {
//           id: 4,
//           name: "已完成",
//         },
//       ],
//     };
//   },
//   components: { sidebar, item1, item0, item2, tab2 },
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

.homeMain {
  position: relative;
  width: calc(100% - 50px);
  height: calc(100% - 40px);
  padding: 0 16px 10px 14px;
  margin-top: 20px;
  //min-height: 800px;
}

.searchHead {
  margin-bottom: 16px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  span {
    font-size: 14px;
    font-family: MiSans-Medium;
    font-weight: 500;
    color: #333333;
    flex-shrink: 0;
    margin-left: 20px;
    margin-right: 10px;
  }

  .ml0 {
    margin-left: 0 !important;
  }

  .searchBut {
    width: 80px;
    height: 36px;
    background: #5864ff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    cursor: pointer;

    i {
      font-size: 14px;
      font-family: MiSans-Medium;
      font-weight: 500;
      color: #ffffff;
    }

    span {
      margin-left: 7px;
      font-size: 14px;
      font-family: MiSans-Medium;
      font-weight: 500;
      color: #ffffff;
    }
  }
}

.w100 {
  flex: 1;
}

.ml20 {
  margin-left: 20px;
}
</style>
