<template>
  <div class="home">
    <div class="homeMain">
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

      <div class="homeMain2rCenter3 flex flex-y">
        <div class="mTitle">故障反馈</div>
        <vtable />
      </div>
      <div class="footTable">
        <item1 />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, inject } from "vue"; // 主要
import item1 from "./maintain_components/item1.vue";
import vtable from "./maintain_components/vtable2.vue";
</script>

<style lang="scss" scoped>
.homeMain2rCenter2 {
  width: calc(100% - 0px);
  height: 8%;
  // height: 60px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-bottom: 20px;

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

.mTitle {
  font-size: 16px;
  font-family: MiSans-Bold;
  font-weight: bold;
  color: #333333;
}
.homeMain2rCenter3 {
  display: flex;
  //   justify-content: flex-start;
  //   align-items: flex-start;
  //   flex-wrap: nowrap;
  //   flex-direction: column;
  // width: calc(100% - 40px);
  margin-bottom: 20px;
  padding: 20px 20px;
  box-sizing: border-box;
  width: 100%;
  align-content: flex-start;
  height: calc(27%);
  position: relative;
  border-radius: 16px;
  background: #fff;
  // padding: 0 20px 20px 20px;
}
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
  min-height: 800px;
}
.footTable{
    height:calc(100% - 37%);
}
</style>
