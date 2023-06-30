<template>
  <div class="home">
    <div class="homeMain">
      <item0></item0>
      <item1></item1>
    </div>
  </div>
</template>

<script setup>
import item1 from "./components/item1.vue";
import item0 from "./components/item0.vue";

// export default {
//   data() {
//     return {}
//   },
//   components: {item1, item0},
//   created() {

//   },
//   mounted() {
//     new this.$wow.WOW().init()
//   },
//   methods: {},
//   filters: {},
//   watch: {}
// }
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
  width: calc(100% - 50px);
  height: calc(100% - 40px);
  padding: 0 16px 10px 14px;
  margin-top: 20px;
  //min-height: 800px;
}
</style>
