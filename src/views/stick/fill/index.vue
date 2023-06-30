<template>
  <div class="home">
    <div class="homeMain">
      <div class="homeMain1">
        <item1></item1>
      </div>
      <div class="homeMain2">
        <item2></item2>
      </div>
    </div>
  </div>
</template>

<script setup>
import item1 from "./components/item1.vue";
import item2 from "./components/item2.vue";
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
  min-height: 800px;

  .homeMain1 {
    position: relative;
    width: 100%;
    height: 40%;
    background: #fff;
    border-radius: 16px;
  }

  .homeMain2 {
    position: relative;
    width: 100%;
    height: calc(60% - 20px);
    background: #fff;
    margin-top: 20px;
    border-radius: 16px;
  }
}
</style>
