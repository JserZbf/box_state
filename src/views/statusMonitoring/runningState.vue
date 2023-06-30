<template>
  <tab />
  <div class="contentBox flex flex-y">
    <div class="leftBox">
      <div class="flex-ac-sb">
        <div class="equipment bgfff">
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
        <div class="listType bgfff flex flex-c-c">
          <div class="flex-ac">
            <img src="@/assets/smile_red.png" alt="" />
            <div class="flex flex-y">
              <span class="font36 weightB">0%</span>
              <span class="font22 weightN">开动率</span>
            </div>
          </div>
          <div class="dataMsg flex-ac-sb">
            <div
              v-for="(item, idx) in data"
              :key="idx"
              class="echarts_item flex-ac-sb"
            >
              <span class="name flex-ac" :style="'color:' + item.color">
                <div class="color" :style="'background:' + item.color"></div>
                {{ item.name }}
              </span>
              <!-- <span :style="'color:' + item.color">{{ item.value }}%</span> -->
              <span>307:39:53</span>
            </div>
          </div>
          <!-- <div class="listType1">
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
          </div> -->
        </div>
      </div>
    </div>

    <div class="timeEcharts bgfff flex flex-y">
      <div class="mTitle">时间切片</div>
      <div class="flex1">
        <echarts4 class="box" />
      </div>
    </div>

    <div class="rightBox flex-ac flex-y bgfff">
      <div class="mTitle">汇总统计</div>
      <div class="rightEcharts">
        <div class="flex flex-y">
          <div class="mTitle">设备OEE</div>
          <div class="echarts_content flex-c-c">
            <div class="charts">
              <echarts1 class="box" title="设备OEE" />
            </div>
            <div class="list flex flex-y">
              <div class="listItem">
                <el-icon class="icon1"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p>1%</p>
                  <span>最差开动率</span>
                </div>
              </div>
              <div class="listItem">
                <el-icon class="icon2"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p style="color: rgba(23, 165, 229, 1)">6%</p>
                  <span>产品良率</span>
                </div>
              </div>
              <div class="listItem">
                <el-icon class="icon3"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p style="color: rgba(58, 188, 147, 1)">8%</p>
                  <span>性能加动率</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-y">
          <div class="mTitle">设备平均开动率</div>
          <div class="echarts_content flex-c-c">
            <div class="charts">
              <echarts1 class="box" title="平均开动率" />
            </div>
            <div class="list flex flex-y">
              <div class="listItem">
                <el-icon class="icon1"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p>1%</p>
                  <span>最差开动率</span>
                </div>
              </div>
              <div class="listItem">
                <el-icon class="icon2"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p style="color: rgba(23, 165, 229, 1)">6%</p>
                  <span>产品良率</span>
                </div>
              </div>
              <div class="listItem">
                <el-icon class="icon3"><Histogram color="#fff" /></el-icon>
                <div style="width: 70px;" class="flex-c-c flex-y">
                  <p style="color: rgba(58, 188, 147, 1)">8%</p>
                  <span>目标开动率</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zxt">
          <div class="mTitle">设备平均开动率</div>
          <div class="charts"><echarts2 class="box" /></div>
        </div>
        <div class="flex flex-y">
          <!-- <el-card shadow="hover"> -->
          <div class="mTitle">设备平均开动率</div>
          <div class="length_cs flex-c-c flex1">
            <div class="charts"><echarts3 class="box" /></div>
            <div class="dataMsg flex flex-y flex1">
              <div
                v-for="(item, idx) in data"
                :key="idx"
                class="echarts_item flex-ac-sb font12"
                style="width: 100%"
              >
                <span class="name flex-ac" :style="'color:' + item.color">
                  <div class="color" :style="'background:' + item.color"></div>
                  {{ item.name }}
                </span>
                <span :style="'color:' + item.color">{{ item.value }}%</span>
                <span>307:39:53</span>
              </div>
            </div>
          </div>

          <!-- </el-card> -->
        </div>
      </div>
    </div>

    <div class="homeMain2rCenter3">
      <el-card shadow="hover">
        <div class="mTitle">故障反馈</div>
        <div class="homeMain2rCenter2 scrollBox">
          <div class="Itemx1" v-for="(item, i) in 12" :key="i">
            <div class="Itemx1l flex-c-c">
              <!-- <span>设备名称</span> -->
              <p>2023-1-10</p>
            </div>
            <div class="Itemx1r">反馈</div>
          </div>
        </div>
        <vtable />
      </el-card>
    </div>
  </div>

  <!-- <HelloWorld msg="运行状态" /> -->
</template>
<script setup>
import { useStore } from "vuex";
import { defineComponent, onMounted, inject, ref, reactive } from "vue"; // 主要
import { Histogram } from "@element-plus/icons-vue";
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
var data = reactive([
  {
    name: "加工",
    value: 20.9,
    color: "#19b5fb",
  },
  {
    name: "停机有原因",
    value: 8.4,
    color: "#818bff",
  },
  {
    name: "断线",
    value: 9.1,
    color: "#ff6991",
  },
  {
    name: "计划停机",
    value: 20.9,
    color: "#ffd361",
  },
  {
    name: "支停机无原因出",
    value: 40.6,
    color: "#39e2bf",
  },
]);
// },
// });
</script>

<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: calc(100% - 58px);
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 16px 10px 14px;
  // padding: 8px 20px 20px 20px;
  box-sizing: border-box;
  .leftBox {
    width: 100%;
    // height: 100%;
    // .el-card {
    //   overflow-y: scroll;
    // }
    // .el-card::-webkit-scrollbar {
    //   width: 0px;
    //   height: 10px;
    // }

    // .el-card::-webkit-scrollbar-thumb {
    //   border-radius: 10px;
    //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    //   opacity: 0.2;
    //   background: rgba(0, 0, 0, 0.2);
    // }

    // .el-card::-webkit-scrollbar-track {
    //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    //   border-radius: 0;
    //   background: rgba(0, 0, 0, 0.1);
    // }

    .equipment {
      width: calc(30% - 20px);
      height: 176px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      border-radius: 9px 9px 9px 9px;
      margin-right: 20px;

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
      width: 70%;
      height: 176px;
      border-radius: 9px 9px 9px 9px;
      padding: 19px 30px;
      box-sizing: border-box;
      & > .flex-ac {
        width: 340px;
        height: 100%;
        border-right: solid 1px #70707021;
        margin-right: 104px;
        // flex: 1;
      }
      img {
        margin-right: 19px;
        width: 80px;
        height: 80px;
      }

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
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 8px 8px;
  margin-top: 15px;
  & > .mTitle {
    width: 100%;
    text-align: left;
    margin: 11px 0 0 21px;
  }
}
.dataMsg {
  width: 540px;
  flex-wrap: wrap;
  .echarts_item {
    width: calc(50% - 60px);
    font-size: 13px;
    padding: 8px 0;
    .name {
      width: 114px;
    }
    .color {
      width: 8px;
      height: 8px;
      margin-right: 5px;
      border-radius: 1px 1px 1px 1px;
    }
  }
}
.rightEcharts {
  width: 100%;
  height: 329px;
  display: flex;
  padding: 17px 21px 33px 21px;
  box-sizing: border-box;
  .zxt {
    .charts {
      width: 100%;
      height: 207px;
    }
  }
  & > div {
    width: calc(25% - 11px);
    position: relative;
    background: #fff;
    border-radius: 16px;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #70707042;
    // height: calc(10rgba(112, 112, 112, 0.437)px);
    height: 100%;
    padding: 11px 21px;
    box-sizing: border-box;
    margin-right: 11px;

    .echarts_content {
      // height: 100%;
      flex: 1;
    }

    .charts {
      width: 169px;
      height: 155px;
    }
    .length_cs {
      .charts {
        width: 99px;
        height: 93px;
        margin-right: 17px;
      }
    }
    .list {
      display: flex;
      margin-left: 33px;
      //   justify-content: center;
      //   align-items: center;
      //   flex-wrap: nowrap;
      //   flex-direction: row;
      //   align-content: flex-start;
      //   width: 100%;

      .listItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        // flex-wrap: nowrap;
        // flex-direction: column;
        // align-content: flex-start;
        flex: 1;
        .icon1 {
          width: 43px;
          height: 43px;
          margin-right: 9px;
          padding: 8px;
          font-size: 43px;
          box-sizing: border-box;
          background: linear-gradient(180deg, #ff141a 0%, #ff565c 100%);
          border-radius: 5px 5px 5px 5px;
        }
        .icon2 {
          width: 43px;
          height: 43px;
          margin-right: 9px;
          padding: 8px;
          font-size: 43px;
          box-sizing: border-box;

          background: linear-gradient(180deg, #34bf4d 0%, #48d661 100%);
          border-radius: 5px 5px 5px 5px;
        }
        .icon3 {
          width: 43px;
          height: 43px;
          margin-right: 9px;
          padding: 8px;
          font-size: 43px;
          box-sizing: border-box;

          background: linear-gradient(180deg, #127fe4 0%, #2e96fb 100%);
          border-radius: 5px 5px 5px 5px;
        }
        p {
          color: rgba(245, 96, 133, 1);
          font-size: 18px;
          font-family: MiSans;
          font-weight: bold;
          color: #f56085;
        }

        span {
          font-size: 13px;
          font-family: MiSans;
          font-weight: 400;
          color: #333333;
        }
      }
    }

    // :deep(.el-card__body) {
    //   height: calc(100% - 50px);
    //   box-sizing: border-box;
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
  height: 123px;
  border-radius: 8px 8px 8px 8px;
  margin-top: 15px;
  padding: 12px 24px;
  box-sizing: border-box;
  flex-shrink: 0;

  //   overflow: hidden;
  //   height: 96px;
  // margin-top: 30px;
}

.homeMain2rCenter2 {
  // height: 60px;
  //   border-radius: 16px;
  display: flex;
  //   justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 20px;
  overflow-x: scroll;
  //   flex-wrap: nowrap;
  //   flex-direction: row;
  //   align-content: flex-start;
  // margin-top: 30px;

  .Itemx1 {
    // width: calc(32% - 20px);
    // float: left;
    flex-shrink: 0;
    width: 217px;
    height: 45px;
    background: rgba(198, 208, 218, 0.52);
    border-radius: 4px 4px 4px 4px;
    color: #000;
    // height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    padding: 9px 12px;
    box-sizing: border-box;
    margin-right: 12px;

    .Itemx1l {
      //   display: flex;
      //   justify-content: flex-start;
      //   align-items: flex-start;
      //   flex-wrap: nowrap;
      //   flex-direction: column;
      //   align-content: flex-start;
      // margin-left: 15px;

      span {
        font-size: 16px;
        font-family: MiSans-Bold;
        font-weight: bold;
      }

      p {
        font-size: 13px;
        font-family: MiSans-Regular;
        font-weight: 400;
        margin: 0px 0;
      }
    }

    .Itemx1r {
      width: 69px;
      height: 35px;
      background: #5864ff;
      border-radius: 23px 23px 23px 23px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-weight: 400;
      font-size: 20px;
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
  margin-top: 15px;
  // padding: 0 20px 20px 20px;
}
</style>
