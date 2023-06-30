<script setup>
import { provide } from "vue";
import * as echarts from "echarts";
provide("echarts", echarts);
</script>
<template>
  <!-- <div class="common-layout">
    <el-container>
      <el-aside class="left-aside">
        <BaseSide />
      </el-aside>
      <el-container>
        <div class="main_app">
          <BaseHeader />
          <router-view />
        </div>
      </el-container>
    </el-container>
  </div> -->
  <router-view></router-view>
</template>

<style></style>
