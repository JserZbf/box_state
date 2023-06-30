<template>
  <div class="menuBox">
    <h3 class="texC flex-c-c">
      <div class="logo flex-c-c font14">FS</div>
      管理系统
    </h3>
    <el-menu
      style="width: 100%; height: 100%"
      class="el-menu-vertical-demo"
      router
      :collapse="isCollapse"
      :default-active="$router.currentRoute.value.fullPath"
      :default-openeds="thatRouteArr"
      @open="handleOpen"
      @close="handleClose"
      @select="handleThat"
    >
      <el-sub-menu
        v-for="(item, idx) in routes"
        :key="idx"
        :index="idx.toString()"
      >
        <template #title>
          <div class="title">
            <div class="icon">
              <i class="icons" :class="item.icon" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </template>
        <el-menu-item-group
          v-for="(items, index) in item.children"
          :key="index"
        >
          <el-menu-item :index="items.path">
            <div :class="thatRoute === items.path ? 'nowBackground' : ''">
              {{ items.name }}
            </div>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router/index.js";
const isCollapse = ref(false);
const $router = useRouter();
let url = $router.currentRoute.value.fullPath;
var thatRoute = ref("");
var thatRouteArr = ref([]);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleThat = (key, keyPath) => {
  thatRoute.value = key;
  console.log(key, keyPath);
};
onMounted(() => {
  let arr = [];
  routes.forEach((el, idx) => {
    if (el.path === thatRoute.value) {
      arr.push(idx.toString());
    } else {
      el.children.forEach((element, index) => {
        console.log(element);
        if (element.path === thatRoute.value) {
          arr.push(idx.toString());
        }
      });
    }
  });
  thatRouteArr.value = arr;
});
watchEffect(() => {
  thatRoute.value = $router.currentRoute.value.path;
});
</script>

<style lang="scss" scoped>
.menuBox {
  color: #fff;
  overflow: hidden;

  .el-menu {
    border: none !important;
    background: none !important;
  }
  .el-menu-vertical-demo {
    border: 0 !important;
    .el-menu-item.is-active {
      color: #fff;
    }
    :deep(.el-sub-menu__title) {
      width: 100%;
      height: 60px;
      box-shadow: 0px 6px 16px 0px rgb(1 44 76 / 0%);
      font-size: 16px;
      font-family: MiSans;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      line-height: 30px;
      padding-left: 0 !important;
      padding-right: 0 !important;
      display: flex;
      justify-content: space-between;
      border-left: 2px solid rgba(0, 0, 0, 0);
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 16px;
        font-weight: 400;
        color: rgba(#ffffff, 0.6);

        .icon {
          display: flex;
          margin-left: 40px;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: row;
          align-content: flex-start;
          font-size: 20px;
        }
      }
    }
  }

  .el-menu-item.is-active {
    color: #fff;
    .el-sub-menu__title {
      background: red !important;
    }
  }
  .el-menu-item {
    width: 100%;
    position: relative;
  }
  .el-menu-item.is-active {
    // color: #6681fa;
  }
  .nowBackground {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    margin-left: -20px;
    text-indent: 20px;
    color: #fff;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #faa050;
    line-height: 30px;
  }
  .logo {
    width: 40px;
    height: 40px;
    background-color: #eee;
    border-radius: 50%;
    margin-right: 12px;
  }
  .icon {
    display: flex;
    // margin-left: 40px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    font-size: 20px;
  }
  .icons {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    margin-right: 16px;
  }
  .icons.icon1 {
    background: url("@/assets/sidebar/icon_icon1.png") center center no-repeat;
    background-size: 16px 16px;
  }

  .icons.icon2 {
    background: url("@/assets/sidebar/icon_icon2.png") center center no-repeat;
    background-size: 16px 16px;
  }

  .icons.icon3 {
    background: url("@/assets/sidebar/icon_icon3.png") center center no-repeat;
    background-size: 16px 16px;
  }

  .icons.icon4 {
    background: url("@/assets/sidebar/icon_icon4.png") center center no-repeat;
    background-size: 16px 16px;
  }

  .icons.icon5 {
    background: url("@/assets/sidebar/icon_icon5.png") center center no-repeat;
    background-size: 16px 16px;
  }
}
</style>
