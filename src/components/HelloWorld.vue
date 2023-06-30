<script setup lang="ts">
// import { ref } from "vue";
import { useRouter } from 'vue-router'


defineProps<{ msg: string }>(); // 组件通信
const router = useRouter();
const toPath = () => {
  router.push('/home')
}
</script>

<template>
  <div class="main">
    <h1 @click="toPath()">{{ msg }}</h1>
  </div>

</template>

<style scoped>
.ep-button {
  margin: 4px;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
