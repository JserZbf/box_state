<template>
  <div class="home">
    <!-- <sidebar active="/state/order"></sidebar> -->
    <div class="homeMain">
      <tab />
      <!-- <tab :active.sync="active" :list="tabList"></tab> -->
      <div class="infos">
        <div class="equipment">
          <div class="equipmentl">
            <img src="@/assets/shebei.png" alt="" />
          </div>
          <div class="equipmentr">
            <div class="equipmentrInfo">
              <span>设备名称：</span>
              <p>XXXX</p>
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
      <item1 />
      <item2 />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, inject } from "vue"; // 主要
import tab from "@/components/layouts/tab.vue";
import item1 from "./order_components/item1.vue";
import item2 from "./order_components/item2.vue";
export default defineComponent({
  components: {  item1, item2,tab },
  setup() {},
});
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
  // width: 100%;
  height: calc(100% - 40px);
  padding: 0 16px 10px 16px;
  box-sizing: border-box;
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
  width: calc(100% - 0px);
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
</style>
