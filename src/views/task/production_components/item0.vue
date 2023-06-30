<template>
  <div class="searchHead">
    <span class="ml0">设备名称</span>
    <el-input class="w100" v-model="name1" placeholder="工单名称"></el-input>
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
    <div class="searchBut searchBut2 ml20">
      <img src="@/assets/task/icon_muban.png" alt="" />
      <span>模板下载</span>
    </div>
    <div class="searchBut searchBut3 ml20">
      <img src="@/assets/task/icon_daochu.png" alt="" />
      <span>数据导入</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "item1",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      name1: "",
      input: "",
      value1: "",
      value2: "",
      input2: "",
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
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

.searchHead {
  margin-bottom: 16px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 16px;
  width: calc(100% - 10px);

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

    img {
      height: 17px;
    }

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

  .searchBut2 {
    width: 110px;
    background: #0fa5e5;
  }

  .searchBut3 {
    width: 110px;
    background: #34ceaf;
  }
}

.w100 {
  flex: 1;
}

.ml20 {
  margin-left: 20px;
}
</style>
