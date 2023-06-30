<template>
  <div class="home">
    <!-- <sidebar active="/configuration/account"></sidebar> -->
    <div class="homeMain">
      <div class="itemBody">
        <div class="title">账号管理</div>
        <el-form
          ref="form"
          class="form"
          label-position="left"
          :model="form"
          label-width="80px"
        >
          <el-form-item label="头像:">
            <div class="userInfo">
              <div class="userHead">
                <img class="userx" src="@/assets/userHeadImg.png" alt="" />
                <img class="edit" src="@/assets/icon_edit2.png" alt="" />
              </div>
              <div class="userInfo2">
                <em></em>
                <span>上传图片大小不超过 1MB.</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="账号:">
            <span class="info">189***6699</span>
          </el-form-item>
          <el-form-item label="邮箱:">
            <span class="info">cslshlee@gmail.com</span>
          </el-form-item>
          <el-form-item label="昵称:">
            <div class="userName">
              <span class="info">Admin</span>
              <img class="edit" src="@/assets/icon_edit2.png" alt="" />
            </div>
          </el-form-item>
          <el-form-item label="性别:">
            <div class="sexInfo">
              <sex :active.sync="form.sex"></sex>
            </div>
          </el-form-item>
          <el-form-item label="职位:">
            <div class="Infox">
              <el-input
                disabled=""
                v-model="form.zhiwei"
                placeholder="审核员"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item label="权限:">
            <div class="Infox">
              <el-select
                style="width: 100%"
                v-model="value"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="w100p mr30" type="primary" plain @click="onSubmit"
              >修改密码</el-button
            >
            <el-button class="w100p" type="primary">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
import sex from "./components/sex.vue";
// eslint-disable-next-line vue/valid-define-props
// const props = defineProps({
//   id: {
//     type: String,
//     default: "",
//   },
// });

const form = ref({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
  sex: 0,
  zhiwei: "审核员",
});
const options = [
  {
    value: "一级权限",
    label: "一级权限",
  },
  {
    value: "选项2",
    label: "双皮奶",
  },
  {
    value: "选项3",
    label: "蚵仔煎",
  },
  {
    value: "选项4",
    label: "龙须面",
  },
  {
    value: "选项5",
    label: "北京烤鸭",
  },
];
const value = ref("一级权限");
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

.itemBody {
  width: calc(100% - 0px);
  position: relative;
  height: calc(100% - 0px);
  padding: 0px 0 0 0;
  background: #fff;

  .title {
    font-size: 16px;
    font-family: MiSans;
    font-weight: bold;
    color: #333333;
    margin-left: 20px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
  }
}

.userInfo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.userHead {
  width: 60px;
  height: 60px;
  position: relative;

  .userx {
    width: 60px;
    height: 60px;
  }

  .edit {
    position: absolute;
    right: -12px;
    bottom: -6px;
  }
}

.userInfo2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-left: 60px;

  em {
    width: 4px;
    height: 4px;
    background: #da2222;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-size: 14px;
    font-family: PingFang;
    font-weight: 500;
    color: #333333;
  }
}

.userName {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  img {
    margin-left: 20px;
  }
}

.sexInfo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.Infox {
  width: 300px;
}

.mr30 {
  margin-right: 30px;
}
.form {
  margin-left: 70px;
}
</style>
