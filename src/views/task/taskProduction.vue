<template>
  <div class="home">
    <!-- <sidebar active="/task/production"></sidebar> -->
    <div class="homeMain">
      <div class="infos">
        <div class="equipment">
          <div class="equipmentl">
            <img src="@/assets/shebei.png" alt="" />
          </div>
          <div class="equipmentr">
            <div class="equipmentrInfo">
              <span>当前设备：</span>
              <el-select v-model="value" placeholder="选择设备">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="equipmentrInfo">
              <span>当前状态：</span>
              <p>停机无原因</p>
            </div>
            <div class="equipmentrInfo">
              <span>状态持续时间：</span>
              <p>00:37:45</p>
            </div>
          </div>
        </div>
        <div class="itemR2">
          <div class="itemR">
            <div class="Num">
              <span>1</span>
              <div class="unit">次</div>
            </div>
            <p>生产加工</p>
          </div>
          <div class="itemR">
            <div class="Num">
              <span>15.00</span>
              <div class="unit">秒/次</div>
            </div>
            <p>最小节拍</p>
          </div>
          <div class="itemR">
            <div class="Num">
              <span>20.00</span>
              <div class="unit">秒/次</div>
            </div>
            <p>设备节拍</p>
          </div>
          <div class="itemR">
            <div class="Num">
              <span>30.00</span>
              <div class="unit">秒/次</div>
            </div>
            <p>中位数节拍</p>
          </div>
        </div>
      </div>
      <item0></item0>
      <div class="list hideScrollBar">
        <div class="listItem" v-for="(item, index) in 21" :key="index">
          <div class="listItemHead">
            <p>2022-11-07</p>
            <span>周一</span>
          </div>
          <div class="listItemBody" v-if="index == 0">
            <div class="listItemBody1">
              <span style="color: #5864ff">电磁铁</span>
              <p style="color: #5864ff">5000次</p>
            </div>
          </div>
          <div class="listItemBody" v-else>
            <div class="listItemBody1">
              <span>电磁铁</span>
              <p>5000次</p>
            </div>
            <div class="listItemBody1">
              <span>电磁铁</span>
              <p>5000次</p>
            </div>
            <div class="listItemBody1">
              <span>电磁铁</span>
              <p>5000次</p>
            </div>
            <div class="listItemBody1">
              <span>电磁铁</span>
              <p>5000次</p>
            </div>
            <div class="listItemBody1">
              <span>电磁铁</span>
              <p>5000次</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import item0 from "./production_components/item0.vue";

const value = ref("2");
const options = [
  {
    value: "1",
    label: "设备1",
  },
  {
    value: "2",
    label: "设备2",
  },
  {
    value: "3",
    label: "设备3",
  },
];
// var active = ref(1);
// var input2 = ref("");
// var input1 = ref("");
// var value1 = ref("");
// var value2 = ref("");
// var tabList = [
//   {
//     name: "近4小时",
//     id: "0",
//   },
//   {
//     name: "当日",
//     id: "1",
//   },
//   {
//     name: "上一日",
//     id: "2",
//   },
// ];
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
  width: calc(100% - 210px);
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

.equipment {
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .equipmentl {
    width: 137px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    img {
      width: 91px;
      height: 86px;
    }
  }

  .equipmentr {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;

    .equipmentrInfo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      flex-direction: row;
      align-content: flex-start;

      span {
        font-size: 14px;
        font-family: MiSans;
        font-weight: 400;
        color: #999999;
        line-height: 30px;
      }

      p {
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}

.infos {
  height: 116px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  width: calc(100% - 10px);
}

.itemR {
  width: 175px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;
  color: #0fa5e5;
  background: rgba(#0fa5e5, 0.1);
  margin-right: 20px;

  .Num {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    span {
      font-size: 24px;
      font-family: MiSans-Bold;
      font-weight: bold;
    }

    .unit {
      font-size: 14px;
      font-family: MiSans-Regular;
      font-weight: 400;
      margin-left: 10px;
    }
  }

  p {
    font-family: MiSans-Regular;
  }
}

.itemR:nth-child(2) {
  color: #f56085;
  background: rgba(#f56085, 0.1);
}

.itemR:nth-child(3) {
  color: #767ff7;
  background: rgba(#767ff7, 0.1);
}

.itemR:nth-child(4) {
  color: #34ceaf;
  background: rgba(#34ceaf, 0.1);
}

.itemR2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.list {
  width: 100%;
  height: calc(100% - 190px);
  overflow-y: scroll;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  .listItem {
    width: calc(14.35% - 16px);
    height: 264px;
    background: #ffffff;
    border-radius: 10px;
    margin-right: 16px;
    margin-bottom: 16px;

    .listItemHead {
      height: 54px;
      background: linear-gradient(0deg, #dfe9f3, #ffffff);
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 14px;
        font-family: MiSans-Regular;
        font-weight: 400;
        color: #666666;
        line-height: 26px;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 14px;
        font-family: MiSans-Demibold;
        font-weight: 400;
        color: #666666;
      }
    }
  }

  .listItem:nth-child(7n) {
    margin-right: 0;
  }
}

.listItemBody {
  width: calc(100% - 24px);
  margin: 0 auto;

  .listItemBody1 {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    border-bottom: 1px solid #edf1f5;

    span {
      font-size: 14px;
      font-family: MiSans-Regular;
      font-weight: 400;
      color: #8391a1;
    }

    p {
      font-size: 14px;
      font-family: MiSans-Medium;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
