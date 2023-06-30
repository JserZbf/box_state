<template>
  <div class="home">
    <!-- <sidebar active="typeStick"></sidebar> -->
    <div class="homeMain">
      <div class="list scrollBar">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="itemBody">
            <div class="itemBodyTitle">{{ item.title }}</div>
            <div class="itemBodyIcon">
              <img :src="item.icon" alt="" />
            </div>
            <div class="itemBodyType">
              <span>二级分类数:</span>
              <em>64</em>
            </div>
          </div>
          <div class="operation">
            <div class="operationItem" @click="drawer = !drawer">
              <img src="@/assets/typeStick/icon_edit.png" alt="" />
              编辑
            </div>
            <div class="operationItem">
              <img src="@/assets/typeStick/icon_delete.png" alt="" />
              删除
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-drawer
      v-model="drawer"
      title="编辑停机原因"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="一级分类" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <div class="tow flex-ac-sb">
          <span>二级分类</span>
          <span>
            <el-button size="small" :icon="Plus" @click="addIpt"
              >新增</el-button
            >
          </span>
        </div>
        <div class="iptItem" v-for="(item, idx) in iptList" :key="idx">
          <el-input v-model="item.value" placeholder="二级分类">
            <template #append>
              <el-button :icon="Delete" @click="delIpt(idx)" />
            </template>
          </el-input>
        </div>

        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm(ruleFormRef)">
            Create
          </el-button> -->
          <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
// import sidebar from "@/components/sidebar";
import { Delete, Plus } from "@element-plus/icons-vue";
import icon1 from "@/assets/typeStick/icon1.png";
import icon2 from "@/assets/typeStick/icon2.png";
import icon3 from "@/assets/typeStick/icon3.png";
import icon4 from "@/assets/typeStick/icon4.png";
import icon5 from "@/assets/typeStick/icon5.png";
import { ElMessageBox } from "element-plus";
import { ref, reactive } from "vue";

// ===========================form配置
const formSize = ref("default");
const ruleFormRef = ref();
const iptList = ref([]);
const addIpt = () => {
  iptList.value.push({ value: "" });
};
const delIpt = (idx) => {
  iptList.value.splice(idx,1);
};

const ruleForm = reactive({
  name: "",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const rules = reactive({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
// =================================
const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref("rtl");
const radio1 = ref("Option 1");
const handleClose = (done) => {
  ElMessageBox.confirm("Are you sure you want to close this?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
function cancelClick() {
  drawer2.value = false;
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false;
    })
    .catch(() => {
      // catch error
    });
}
const list = [
  {
    title: "技术损失",
    icon: icon1,
    num: 64,
  },
  {
    title: "组织损失",
    icon: icon2,
    num: 64,
  },
  {
    title: "换型损失",
    icon: icon3,
    num: 64,
  },
  {
    title: "计划停机",
    icon: icon4,
    num: 64,
  },
  {
    title: "设备损失",
    icon: icon5,
    num: 64,
  },
  {
    title: "生产损失",
    icon: icon5,
    num: 64,
  },
  {
    title: "测试自动反馈",
    icon: icon5,
    num: 64,
  },
  {
    title: "组装机故障",
    icon: icon5,
    num: 64,
  },
  {
    title: "设备损失",
    icon: icon5,
    num: 64,
  },
  {
    title: "生产损失",
    icon: icon5,
    num: 64,
  },
  {
    title: "测试自动反馈",
    icon: icon5,
    num: 64,
  },
  {
    title: "组装机故障",
    icon: icon5,
    num: 64,
  },
];
</script>

<style lang="scss" scoped>
.tow {
  width: calc(100% + 40px);
  margin-left: -20px;
  padding: 8px 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;
}
.iptItem {
  margin: 10px;
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

.mTitle {
  font-size: 16px;
  font-family: MiSans;
  font-weight: bold;
  color: #333333;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.homeMain {
  position: relative;
  width: calc(100% - 210px);
  height: calc(100% - 0px);
  padding: 0 16px 10px 14px;

  .list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    position: relative;
    width: 100%;
    height: calc(100% - 30px);
    margin-top: 20px;
    overflow-y: scroll;

    .item {
      width: calc(25% - 15px);
      height: calc(33% - 15px);
      background: #ffffff;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 16px;
      min-height: 280px;
    }

    .item:nth-child(4n) {
      margin-right: 0;
    }

    .itemBody {
      position: relative;
      width: 100%;
      height: calc(100% - 40px);

      .itemBodyTitle {
        font-size: 18px;
        font-family: MiSans;
        font-weight: 600;
        color: #333333;
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
      }

      .itemBodyIcon {
        background: url("@/assets/typeStick/itembg.png") center bottom no-repeat;
        width: 142px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 30px;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        margin: 0 auto;

        img {
          width: 60px;
          height: 61px;
        }
      }

      .itemBodyType {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 13px;
        font-family: MiSans;
        font-weight: 400;
        color: #333333;
        line-height: 47px;

        em {
          font-size: 18px;
          font-family: MiSans;
          font-weight: bold;
          color: #0fa5e5;
          font-style: normal;
          margin-left: 50px;
        }
      }
    }

    .operation {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      .operationItem {
        width: 50%;
        height: 40px;
        background: rgba(#313131, 0.02);
        border-radius: 0px 0px 0px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 13px;
        font-family: MiSans;
        font-weight: 400;
        color: #666666;

        img {
          width: 12px;
          height: 12px;
          margin-right: 10px;
        }
      }

      .operationItem:nth-child(2) {
        width: 50%;
        height: 40px;
        background: rgba(249, 238, 238, 1);
        border-radius: 0px 0px 16px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
        font-size: 13px;
        font-family: MiSans;
        font-weight: 400;
        color: rgba(239, 51, 51, 1);

        img {
          width: 12px;
          height: 12px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
