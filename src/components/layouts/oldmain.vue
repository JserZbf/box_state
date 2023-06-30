<script setup lang="ts">
// defineProps<{ code: string }>(); // 组件通信
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="left-aside">
        <BaseSide />
      </el-aside>
      <el-container>
        <div class="main">
          <BaseHeader />
          <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite + Echarts" />
        </div>
      </el-container>
    </el-container>
  </div>
</template>
