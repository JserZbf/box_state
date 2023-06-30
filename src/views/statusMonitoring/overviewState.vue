<template>
  <!-- <div style="height: 20px"></div> -->
  <div class="contentBox flex-sb">
    <div class="leftBox">
      <div class="card flex flex-y" v-for="(item, idx) in 6" :key="idx">
        <div
          class="equipment"
          :style="idx == 0 ? 'background: #FF4B69' : 'background: #EDEEEE'"
        >
          <div class="hf"></div>
          <div class="equipmentr" :class="idx == 0 ? 'cfff' : 'c555'">
            <div class="equipmentrInfo flex-c-c">
              <span>设备名称：</span>
              <p>XXXX</p>
            </div>
            <div class="equipmentrInfo state flex-c-c">
              <span>当前状态：</span>
              <p>停机无原因</p>
            </div>
            <div
              class="equipmentrInfo tag flex-c-c"
              :class="idx == 0 ? 'bgff7d93 cfff' : 'bgf0d6da cFF4B69'"
            >
              <span>状态持续时间：</span>
              <p>00:37:45</p>
              <el-icon><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
        <div class="content flex">
          <div class="rightMsg">
            <div class="msgBox">
              <img src="@/assets/smile_red.png" alt="" />
              <div class="flex-ac flex-y">
                <span class="font28 weightB">0%</span>
                <span class="font16 c999">开动率</span>
              </div>
            </div>
            <div class="msgBox">
              <img src="@/assets/echarts.png" alt="" />
              <div class="flex-ac flex-y">
                <span class="c999"
                  ><!-- <span class="c000">--</span> -->秒/次</span
                >
                <span class="c999">设备节拍</span>
              </div>
            </div>
          </div>
          <div class="leftItem">
            <div class="echatsBox flex-ac">
              <div class="echarts">
                <echarts3 />
              </div>
              <div class="dataMsg flex flex-y">
                <div
                  v-for="(item, idx) in data"
                  :key="idx"
                  class="echarts_item flex-ac-sb"
                >
                  <span class="name flex-ac" :style="'color:' + item.color">
                    <div
                      class="color"
                      :style="'background:' + item.color"
                    ></div>
                    {{ item.name }}
                  </span>
                  <span :style="'color:' + item.color">{{ item.value }}%</span>
                  <span>307:39:53</span>
                </div>
              </div>
            </div>
            <div class="tableBox">
              <h3 class="flex-ac">工单列表</h3>
              <vtable />
            </div>
          </div>
        </div>
        <div class="foot flex-ac-sb cfff">
          <div class="btn flex-c-c bg0FA5E5">设备状态</div>
          <div class="btn flex-c-c bg34CEAF">工单状态</div>
          <div class="btn flex-c-c bgFF4B69">参数状态</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { defineComponent, onMounted, inject, reactive, ref } from "vue"; // 主要
import echarts3 from "./overview_components/echarts/overview_circle.vue";
import vtable from "./overview_components/vtable.vue";
import { ArrowRight } from "@element-plus/icons-vue";
// export default defineComponent({
//     // eslint-disable-next-line vue/no-unused-components
//     components:{ echarts3,vtable },
//     setup() {
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
//     },
// });
</script>

<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: calc(100% - 0px);
  overflow: hidden;
  //   padding: 0 16px 10px 14px;
  // padding: 8px 20px 20px 20px;
  box-sizing: border-box;
  .leftBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    // height: 50%;
    .card {
      // width: 32.5%;
      // height: 49%;
      width: 541px;
      height: 564px;
      //   width: 406px;
      //   height: 423px;
      background-color: #fff;
      border: 1px solid #e4e7ed;
      box-sizing: border-box;
      position: relative;
      //   overflow: hidden;
      //   margin: 19px 11px 0 0;
      margin-left: 11px;
      margin-top: 8px;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.16);
      //   & > div {
      //     // padding: 0 10px 10px;
      //   }
      .content {
        padding: 10px;
        // overflow: auto;
        flex: 1;
        background-color: #fff;
        height: 405px;
        .rightMsg {
          width: 114px;
          display: flex;
          align-items: center;
          flex-direction: column;
          border-right: 1px solid rgba(112, 112, 112, 0.23);
          .msgBox {
            height: 196px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            // padding: 0 6px;
            box-sizing: border-box;
            width: 100%;
            // margin-bottom: 20px;
            img {
              width: 55px;
              height: 55px;
              //   margin-right: 10px;
              margin-bottom: 5px;
            }
            span {
              margin-bottom: 5px;
            }
          }
          // height: 100%;
        }
        .leftItem {
          width: 393px;
          height: 100%;
          .echatsBox {
            width: 100%;
            height: 192px;
            border-bottom: 1px solid rgba(112, 112, 112, 0.23);
            margin-left: 5px;
            .echarts {
              width: 100px;
              height: 100px;
            }
            .dataMsg {
              width: 258px;
              .echarts_item {
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
          }
          .tableBox {
            width: 100%;
            height: 170px;
            // background-color: #e4e7ed;
            margin-left: 5px;
            h3 {
              font-size: 19px;
              color: #526579;
              height: 34px;
              font-weight: bold;
              padding: 0;
              margin: 0;
              padding-left: 5px;
              box-sizing: border-box;
            }
            .table {
              table-layout: fixed;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .foot {
        width: 100%;
        padding: 21px 43px 35px 43px;
        box-sizing: border-box;
        .btn {
          width: 141px;
          height: 45px;
          border-radius: 4px 4px 4px 4px;
        }
      }
    }
    .equipment {
      //   height: 120px;
      //   display: flex;
      //   justify-content: flex-start;
      //   align-items: center;
      //   flex-wrap: nowrap;
      //   flex-direction: row;
      //   align-content: flex-start;
      border-radius: 10px 10px 0px 0px;
      border-bottom: solid 1px #e4e7ed;
      //   margin-top: 10px;
      //   .hf {
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     z-index: 1;
      //     width: 100%;
      //     height: 15px;
      //     background-color: #999;
      //   }

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
        width: 100%;
        height: 56px;
        display: flex;
        //   justify-content: center;
        align-items: center;
        //   flex-wrap: nowrap;
        //   flex-direction: column;
        //   align-content: flex-start;
        flex-wrap: wrap;
        padding: 10px;
        box-sizing: border-box;
        position: relative;

        .equipmentrInfo {
          height: auto;
          display: flex;
          // justify-content: flex-start;
          align-items: center;
          // flex-wrap: nowrap;
          //   min-width: 50%;
          // flex-direction: row;
          // align-content: flex-start;

          span {
            font-size: 14px;
            font-family: MiSans;
            font-weight: 400;
            // color: #999999;
            // line-height: 30px;
          }

          p {
            // color: rgba(51, 51, 51, 1);
            margin: 0 !important;
            font-weight: 600;
          }
        }
        .tag {
          height: 35px;
          padding: 7px 15px;
          //   background-color: #f0d6da;
          position: absolute;
          color: #ff4b69;
          right: 0;
          border-radius: 17px 0px 0px 17px;
          box-sizing: border-box;
          p {
            // color: rgba(51, 51, 51, 1);
            margin: 0 !important;
            font-weight: 500;
          }
        }
        .state {
          margin-left: 13px;
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
  height: 96px;
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
