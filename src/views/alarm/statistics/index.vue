<template>
  <div class="home">
    <!-- <sidebar active="/alarm/statistics"></sidebar> -->
    <div class="homeMain">
      <div class="homeMain2">
        <div class="homeMain2l">
          <info></info>
        </div>
        <div class="homeMain2r">
          <div class="homeMain2rTop">
            <div class="homeMain2rTopItem">
              <div class="mTitle">设备停机原因占比</div>
              <item1></item1>
            </div>
            <div class="homeMain2rTopItem">
              <div class="mTitle">TOP5不良原因占比</div>
              <vtableTop></vtableTop>
            </div>
            <div class="homeMain2rTopItem">
              <div class="mTitle">TOP5不良原因占比</div>
              <vtableTop2></vtableTop2>
            </div>
          </div>
          <div class="homeMain2rCenter2">
            <div class="Itemx1">
              <div class="Itemx1l">
                <span>设备名称</span>
                <p>停机时间：20:06-20:46</p>
              </div>
              <div class="Itemx1r">反馈</div>
            </div>
            <div class="Itemx1">
              <div class="Itemx1l">
                <span>设备名称</span>
                <p>停机时间：20:06-20:46</p>
              </div>
              <div class="Itemx1r">反馈</div>
            </div>
            <div class="Itemx1">
              <div class="Itemx1l">
                <span>设备名称</span>
                <p>停机时间：20:06-20:46</p>
              </div>
              <div class="Itemx1r">反馈</div>
            </div>
          </div>
          <div class="homeMain2rBottom">
            <div class="mTitle">故障反馈</div>
            <vtable></vtable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import sidebar from "@/components/sidebar";
import vtable from "./components/vtable.vue";
import info from "./components/info.vue";
import item1 from "./components/item1.vue";
import echarts3 from "./components/echarts/echarts3.vue";
import item3 from "./components/item3.vue";
import echarts5 from "./components/echarts/echarts5.vue";
import vtableTop from "./components/vtableTop.vue";
import vtableTop2 from "./components/vtableTop2.vue";

const tabList = [{
    name: "近4小时",
    id: "0",
  },
  {
    name: "当日",
    id: "1",
  },
  {
    name: "上一日",
    id: "2",
  },];
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
//   components: {
//     // sidebar,
//     vtableTop,
//     vtableTop2,
//     vtable,
//     info,
//     item3,
//     echarts3,
//     item1,
//     echarts5,
//   },
//   created() {},
//   mounted() {
//     // new this.$wow.WOW().init();
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
  width: calc(100% - 70px);
  height: calc(100% - 0px);
  padding: 20px 16px 10px 14px;

  .homeMain2 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    height: calc(100% - 40px);
    position: relative;
    width: calc(100% - 10px);

    .homeMain2l {
      width: 27%;
      height: 100%;
      position: relative;
    }

    .homeMain2r {
      width: calc(73% - 15px);
      height: 100%;
      position: relative;
      border-radius: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;

      .homeMain2rTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        height: 48%;
        position: relative;
        width: 100%;

        .homeMain2rTopItem {
          width: calc(33.33% - 11px - 40px);
          position: relative;
          background: #fff;
          border-radius: 16px;
          height: calc(100% - 20px);
          padding: 0 20px 20px 20px;
        }
      }

      .homeMain2rBottom {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex-direction: column;
        width: calc(100% - 40px);
        align-content: flex-start;
        height: calc(52% - 16px - 20px - 100px);
        position: relative;
        border-radius: 16px;
        background: #fff;
        padding: 0 20px 20px 20px;
      }
    }
  }
}

.homeMain2rCenter {
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 84px;
  background: #ffffff;
  border-radius: 16px;
}

.homeMain2rCenter2 {
  width: calc(100% - 0px);
  height: 60px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .Itemx1 {
    width: calc(33% - 20px);
    height: 80px;
    background: #5864ff;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    min-width: 267px;
    align-content: flex-start;

    .Itemx1l {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;
      margin-left: 15px;

      span {
        font-size: 16px;
        font-family: MiSans-Bold;
        font-weight: bold;
        color: #ffffff;
      }

      p {
        font-size: 13px;
        font-family: MiSans-Regular;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .Itemx1r {
      width: 70px;
      height: 34px;
      background: #ffffff;
      border-radius: 17px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      font-size: 16px;
      font-family: MiSans-Semibold;
      font-weight: 600;
      color: #5864ff;
      cursor: pointer;
    }
  }
}
</style>
