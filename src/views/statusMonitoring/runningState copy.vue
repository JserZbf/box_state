<template>
  <tab />
  <div class="contentBox flex-sb">
    <div class="leftBox">
      <el-card shadow="hover">
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

        <div class="echartBody">
          <LeftInfo color="#5864FF" color2="#93C6FF" class="ml44">
            <img class="icon" src="@/assets/home/icon1.png" alt="" />
          </LeftInfo>
          <div class="echartBodyInfo">
            <span>56%</span>
            <p>设备开动率</p>
          </div>
        </div>
        <div class="echartBody">
          <LeftInfo
            color="rgba(162, 218, 245, 1)"
            color2="rgba(15, 165, 229, 1)"
            class="ml44"
          >
            <img class="icon" src="@/assets/home/icon2.png" alt="" />
          </LeftInfo>
          <div class="echartBodyInfo">
            <span style="color: rgba(15, 165, 229, 1)">76%</span>
            <p>设备开动率</p>
          </div>
        </div>
        <div class="echartBody">
          <LeftInfo
            color="rgba(255, 150, 0, 1)"
            color2="rgba(253, 192, 89, 1)"
            class="ml44"
          >
            <img class="icon" src="@/assets/home/icon3.png" alt="" />
          </LeftInfo>
          <div class="echartBodyInfo">
            <span style="color: rgba(253, 192, 89, 1)">90%</span>
            <p>性能加动率</p>
          </div>
        </div>

        <div class="listType">
          <div class="listType1">
            <span>加工</span>
            <p>00:00:20</p>
          </div>
          <div class="listType1">
            <span>停机有原因</span>
            <p>00:00:20</p>
          </div>
          <div class="listType1">
            <span>断线</span>
            <p>00:00:20</p>
          </div>
          <div class="listType1">
            <span>停机无原因</span>
            <p>00:00:20</p>
          </div>
          <div class="listType1">
            <span>计划停机</span>
            <p>00:00:20</p>
          </div>
        </div>
      </el-card>
    </div>
    <div class="rightBox flex-ac-sb flex-y">
      <div class="rightEcharts">
        <div>
          <el-card shadow="hover">
            <div class="mTitle">设备平均开动率</div>
            <echarts1 class="box" />
          </el-card>
        </div>
        <div>
          <el-card shadow="hover">
            <div class="mTitle">设备平均开动率</div>
            <echarts2 class="box" />
          </el-card>
        </div>
        <div>
          <el-card shadow="hover">
            <div class="mTitle">设备平均开动率</div>
            <echarts3 class="box" />
          </el-card>
        </div>
      </div>

      <div class="timeEcharts">
        <el-card shadow="hover">
          <div class="mTitle">时间切片</div>
          <div style="width: 100%; height: 70px">
            <echarts4 class="box" />
          </div>
        </el-card>
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

      <div class="homeMain2rCenter3">
        <el-card shadow="hover">
          <div class="mTitle">故障反馈</div>
          <vtable />
        </el-card>
      </div>
    </div>
  </div>

  <!-- <HelloWorld msg="运行状态" /> -->
</template>
<script setup>
import { useStore } from "vuex";
import { defineComponent, onMounted, inject, ref } from "vue"; // 主要
import tab from "@/components/layouts/tab.vue";
import LeftInfo from "./running_components/echarts/running_info.vue";
import echarts1 from "./running_components/echarts/running_gauge.vue";
import echarts2 from "./running_components/echarts/running_zxt.vue";
import echarts3 from "./running_components/echarts/running_circle.vue";
import echarts4 from "./running_components/echarts/running_time.vue";
import vtable from "./running_components/vtable.vue";
// export default defineComponent({
//     // eslint-disable-next-line vue/no-unused-components
//     components:{ echarts1,echarts2,echarts3,echarts4,vtable,LeftInfo },
//     setup() {
const radio = ref(3);
// },
// });
</script>

<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: calc(100% - 58px);
  overflow: hidden;
  padding: 0 16px 10px 14px;
  // padding: 8px 20px 20px 20px;
  box-sizing: border-box;
  .leftBox {
    width: 27%;
    height: 100%;
    .el-card {
      overflow-y: scroll;
    }
    .el-card::-webkit-scrollbar {
      width: 0px;
      height: 10px;
    }

    .el-card::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      opacity: 0.2;
      background: rgba(0, 0, 0, 0.2);
    }

    .el-card::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
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
            margin: 0 !important;
          }
        }
      }
    }
    .echartBody {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      width: 100%;
      margin: 15px auto;

      .ml44 {
        margin-left: 44px;
      }
    }
    .echartBodyInfo {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;

      span {
        font-size: 20px;
        font-family: MiSans-Bold;
        font-weight: bold;
        color: #767ff7;
        line-height: 30px;
      }

      p {
        font-size: 14px;
        font-family: MiSans-Demibold;
        font-weight: 600;
        color: #333333;
        line-height: 30px;
      }
    }
    .listType {
      .listType1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        height: 40px;

        span {
          margin-left: 20px;
          font-size: 14px;
          font-family: MiSans;
          font-weight: 400;
          color: #999999;
        }

        p {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 600;
          color: #333333;
          margin-right: 20px;
        }
      }
    }
  }
}
.rightBox {
  width: 72%;
  height: 100%;
}
.rightEcharts {
  width: 100%;
  height: calc(48% - 20px);
  display: flex;
  justify-content: space-between;

  & > div {
    width: calc(33.33% - 11px);
    position: relative;
    background: #fff;
    border-radius: 16px;
    // height: calc(100% - 20px);
    height: 100%;
    :deep(.el-card__body) {
      // height: auto !important;
      // display: flex;
      height: calc(100% - 50px);
      box-sizing: border-box;
    }
    // .echarts_box{
    // padding: 0 20px 20px 20px;
    // box-sizing: border-box;
    // }
  }
}
.el-card {
  width: 100%;
  height: 100%;
  border-radius: 15px;

  // padding-bottom: 15px;

  .el-card > div {
    width: 100%;
    height: 100%;
  }
}
.mTitle {
  font-size: 16px;
  font-family: MiSans-Bold;
  font-weight: bold;
  color: #333333;
}
.timeEcharts {
  width: 100%;
//   height: 96px;
  // margin-top: 30px;
}

.homeMain2rCenter2 {
  width: calc(100% - 0px);
  // height: 60px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  // margin-top: 30px;

  .Itemx1 {
    width: calc(32% - 20px);
    // height: 60px;
    background: #5864ff;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    min-width: 267px;
    align-content: flex-start;
    padding: 14px;
    box-sizing: border-box;

    .Itemx1l {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;
      // margin-left: 15px;

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
        margin: 0px 0;
      }
    }

    .Itemx1r {
      width: 70px;
      height: 34px;
      background: #ffffff;
      border-radius: 17px;
      // margin-right: 20px;
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

.homeMain2rCenter3 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  // width: calc(100% - 40px);
  width: 100%;
  align-content: flex-start;
  height: calc(52% - 16px - 20px - 180px);
  position: relative;
  border-radius: 16px;
  background: #fff;
  // padding: 0 20px 20px 20px;
}
</style>
